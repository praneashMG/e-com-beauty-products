import React, { useState, useEffect } from 'react';
import { Save, Upload, Camera } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Profile } from '../../types';

const ProfileForm: React.FC = () => {
  const { user, profile, updateProfile } = useAuth();
  const [formData, setFormData] = useState<Partial<Profile>>({
    name: '',
    education: '',
    job: '',
    income: '',
    dateOfBirth: '',
    natchatram: '',
    rassi: '',
    laknam: '',
    dosham: 'none',
    height: '',
    weight: '',
    color: '',
    fatherName: '',
    motherName: '',
    fatherJob: '',
    motherJob: '',
    siblings: '',
    siblingsMarried: '',
    phoneNumber1: '',
    phoneNumber2: '',
    currentAddress: '',
    permanentAddress: '',
    whatsapp: '',
    gender: 'male',
    jadhagam: '',
    expectations: '',
    native: '',
    kulam: '',
    propertyDetails: '',
    otherDetails: '',
    photos: [],
    profileStatus: 'in-progress'
  });

  const [activeSection, setActiveSection] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  const sections = [
    { title: 'Personal Details', fields: ['name', 'education', 'job', 'income', 'dateOfBirth', 'gender'] },
    { title: 'Horoscope Details', fields: ['natchatram', 'rassi', 'laknam', 'dosham', 'jadhagam'] },
    { title: 'Physical Details', fields: ['height', 'weight', 'color'] },
    { title: 'Family Details', fields: ['fatherName', 'motherName', 'fatherJob', 'motherJob', 'siblings', 'siblingsMarried'] },
    { title: 'Contact Details', fields: ['phoneNumber1', 'phoneNumber2', 'currentAddress', 'permanentAddress', 'whatsapp'] },
    { title: 'Preferences & Photos', fields: ['expectations', 'native', 'kulam', 'propertyDetails', 'otherDetails', 'photos'] }
  ];

  const validateSection = (sectionIndex: number) => {
    const section = sections[sectionIndex];
    const newErrors: Record<string, string> = {};
    
    section.fields.forEach(field => {
      if (['name', 'education', 'job', 'dateOfBirth', 'fatherName', 'motherName', 'phoneNumber1', 'currentAddress'].includes(field)) {
        if (!formData[field as keyof Profile]) {
          newErrors[field] = 'This field is required';
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateSection(activeSection)) {
      setActiveSection(Math.min(activeSection + 1, sections.length - 1));
    }
  };

  const handlePrevious = () => {
    setActiveSection(Math.max(activeSection - 1, 0));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateSection(activeSection)) {
      updateProfile({
        ...formData,
        profileStatus: 'uploaded'
      });
      alert('Profile updated successfully! Your profile will be reviewed by our admin team.');
    }
  };

  const handleInputChange = (field: keyof Profile, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const renderPersonalDetails = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            பெயர் / Name *
          </label>
          <input
            type="text"
            value={formData.name || ''}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="Full name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            கல்வித்தகுதி / Education *
          </label>
          <input
            type="text"
            value={formData.education || ''}
            onChange={(e) => handleInputChange('education', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="Educational qualification"
          />
          {errors.education && <p className="text-red-500 text-xs mt-1">{errors.education}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            தொழில் / Job *
          </label>
          <input
            type="text"
            value={formData.job || ''}
            onChange={(e) => handleInputChange('job', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="Occupation"
          />
          {errors.job && <p className="text-red-500 text-xs mt-1">{errors.job}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            வருமானம் / Income
          </label>
          <input
            type="text"
            value={formData.income || ''}
            onChange={(e) => handleInputChange('income', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="Annual income"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            பிறந்த தேதி / Date of Birth *
          </label>
          <input
            type="date"
            value={formData.dateOfBirth || ''}
            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
          />
          {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            பாலினம் / Gender
          </label>
          <select
            value={formData.gender || 'male'}
            onChange={(e) => handleInputChange('gender', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderHoroscopeDetails = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            நட்சத்திரம் / Natchatram
          </label>
          <input
            type="text"
            value={formData.natchatram || ''}
            onChange={(e) => handleInputChange('natchatram', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="Star/Nakshatra"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ராசி / Rassi
          </label>
          <input
            type="text"
            value={formData.rassi || ''}
            onChange={(e) => handleInputChange('rassi', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="Zodiac sign"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            லக்னம் / Laknam
          </label>
          <input
            type="text"
            value={formData.laknam || ''}
            onChange={(e) => handleInputChange('laknam', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="Lagnam"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            தோஷம் / Dosham
          </label>
          <select
            value={formData.dosham || 'none'}
            onChange={(e) => handleInputChange('dosham', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
          >
            <option value="none">No Dosham</option>
            <option value="செவ்வாய்">செவ்வாய் தோஷம்</option>
            <option value="செவ்வாய், ராகு கேது">செவ்வாய், ராகு கேது தோஷம்</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ஜாதகம் / Jadhagam
          </label>
          <textarea
            value={formData.jadhagam || ''}
            onChange={(e) => handleInputChange('jadhagam', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            rows={2}
            placeholder="Horoscope details"
          />
        </div>
      </div>
    </div>
  );

  const renderPhysicalDetails = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            உயரம் / Height
          </label>
          <input
            type="text"
            value={formData.height || ''}
            onChange={(e) => handleInputChange('height', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="e.g., 5'6''"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            எடை / Weight
          </label>
          <input
            type="text"
            value={formData.weight || ''}
            onChange={(e) => handleInputChange('weight', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="e.g., 65 kg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            நிறம் / Color
          </label>
          <input
            type="text"
            value={formData.color || ''}
            onChange={(e) => handleInputChange('color', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="Complexion"
          />
        </div>
      </div>
    </div>
  );

  const renderFamilyDetails = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            தந்தையின் பெயர் / Father Name *
          </label>
          <input
            type="text"
            value={formData.fatherName || ''}
            onChange={(e) => handleInputChange('fatherName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
          />
          {errors.fatherName && <p className="text-red-500 text-xs mt-1">{errors.fatherName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            தாயின் பெயர் / Mother Name *
          </label>
          <input
            type="text"
            value={formData.motherName || ''}
            onChange={(e) => handleInputChange('motherName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
          />
          {errors.motherName && <p className="text-red-500 text-xs mt-1">{errors.motherName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            தந்தையின் தொழில் / Father Job
          </label>
          <input
            type="text"
            value={formData.fatherJob || ''}
            onChange={(e) => handleInputChange('fatherJob', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            தாயின் தொழில் / Mother Job
          </label>
          <input
            type="text"
            value={formData.motherJob || ''}
            onChange={(e) => handleInputChange('motherJob', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            உடன்பிறந்தோர் / Siblings
          </label>
          <input
            type="text"
            value={formData.siblings || ''}
            onChange={(e) => handleInputChange('siblings', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="Number of brothers and sisters"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            திருமணமான உடன்பிறந்தோர் / Siblings Married
          </label>
          <input
            type="text"
            value={formData.siblingsMarried || ''}
            onChange={(e) => handleInputChange('siblingsMarried', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="Number of siblings married"
          />
        </div>
      </div>
    </div>
  );

  const renderContactDetails = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            தொலைபேசி எண் 1 / Phone Number 1 *
          </label>
          <input
            type="tel"
            value={formData.phoneNumber1 || ''}
            onChange={(e) => handleInputChange('phoneNumber1', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="Primary contact number"
          />
          {errors.phoneNumber1 && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber1}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            தொலைபேசி எண் 2 / Phone Number 2
          </label>
          <input
            type="tel"
            value={formData.phoneNumber2 || ''}
            onChange={(e) => handleInputChange('phoneNumber2', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="Secondary contact number"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            தற்போதைய முகவரி / Current Address *
          </label>
          <textarea
            value={formData.currentAddress || ''}
            onChange={(e) => handleInputChange('currentAddress', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            rows={3}
            placeholder="Current residential address"
          />
          {errors.currentAddress && <p className="text-red-500 text-xs mt-1">{errors.currentAddress}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            நிரந்தர முகவரி / Permanent Address
          </label>
          <textarea
            value={formData.permanentAddress || ''}
            onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            rows={3}
            placeholder="Permanent address"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            வாட்ஸ் ஆப் / WhatsApp
          </label>
          <input
            type="tel"
            value={formData.whatsapp || ''}
            onChange={(e) => handleInputChange('whatsapp', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="WhatsApp number"
          />
        </div>
      </div>
    </div>
  );

  const renderPreferencesAndPhotos = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            எதிர்பார்ப்பு / Expectations
          </label>
          <textarea
            value={formData.expectations || ''}
            onChange={(e) => handleInputChange('expectations', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            rows={2}
            placeholder="Partner expectations"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            பூர்வீகம் / Native
          </label>
          <input
            type="text"
            value={formData.native || ''}
            onChange={(e) => handleInputChange('native', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="Native place"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            குலம் / Kulam
          </label>
          <input
            type="text"
            value={formData.kulam || ''}
            onChange={(e) => handleInputChange('kulam', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="Sub-caste"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            சொத்து விவரம் / Property Details
          </label>
          <textarea
            value={formData.propertyDetails || ''}
            onChange={(e) => handleInputChange('propertyDetails', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            rows={2}
            placeholder="Property and asset details"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          படம் / Photo Upload
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-red-400 transition-colors">
          <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600 mb-2 text-sm">Upload your photos</p>
          <button
            type="button"
            className="bg-red-600 text-white px-3 py-1.5 rounded-lg hover:bg-red-700 transition-colors text-sm"
          >
            <Upload className="w-4 h-4 inline mr-2" />
            Choose Photos
          </button>
          <p className="text-xs text-gray-500 mt-1">Maximum 5 photos, JPG/PNG format</p>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 0:
        return renderPersonalDetails();
      case 1:
        return renderHoroscopeDetails();
      case 2:
        return renderPhysicalDetails();
      case 3:
        return renderFamilyDetails();
      case 4:
        return renderContactDetails();
      case 5:
        return renderPreferencesAndPhotos();
      default:
        return renderPersonalDetails();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-red-100">
        <div className="p-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-red-900 mb-2">Profile Information</h2>
            <p className="text-red-600">Complete your matrimony profile</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              {sections.map((section, index) => (
                <span key={index} className={`${
                  index === activeSection 
                    ? 'text-red-600 font-medium' 
                    : index < activeSection 
                    ? 'text-green-600 font-medium' 
                    : 'text-gray-500'
                }`}>
                  {section.title}
                </span>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 relative">
              {/* Completed sections (green) */}
              <div 
                className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300 absolute"
                style={{ width: `${(activeSection / sections.length) * 100}%` }}
              />
              {/* Current section (red) */}
              <div 
                className="bg-gradient-to-r from-red-600 to-red-700 h-2 rounded-full transition-all duration-300 absolute"
                style={{ 
                  left: `${(activeSection / sections.length) * 100}%`,
                  width: `${(1 / sections.length) * 100}%` 
                }}
              />
            </div>
            <div className="text-center text-sm text-gray-600 mt-2">
              Step {activeSection + 1} of {sections.length}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="min-h-80">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                {sections[activeSection].title}
              </h3>
              {renderSection()}
            </div>

            <div className="flex justify-between mt-6 pt-4 border-t border-gray-200">
              {activeSection > 0 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Previous
                </button>
              )}
              
              {activeSection === 0 && <div></div>}
              
              <div className="space-x-4">
                {activeSection < sections.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Profile</span>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;