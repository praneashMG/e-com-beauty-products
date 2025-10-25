import React from 'react';
import { X, User, GraduationCap, Briefcase, MapPin, Phone, Heart, Home, Star, Calendar, Ruler, Weight, Palette } from 'lucide-react';
import { Profile } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface ProfileDetailsModalProps {
  profile: Profile;
  onClose: () => void;
}

const ProfileDetailsModal: React.FC<ProfileDetailsModalProps> = ({ profile, onClose }) => {
  const { t } = useLanguage();

  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    return today.getFullYear() - birthDate.getFullYear();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-800">{profile.name} - {t('dashboard.view.profile')}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Profile Photo */}
          <div className="text-center mb-8">
            <img
              src={profile.photos?.[0] || 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'}
              alt={profile.name}
              className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-red-100 shadow-lg"
            />
            <h3 className="text-2xl font-bold text-gray-800 mt-4">{profile.name}</h3>
            <p className="text-red-600 font-medium">{profile.education}</p>
          </div>

          {/* Personal Details */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
              <User className="w-5 h-5 text-red-600" />
              <span>{t('profile.personal.details')}</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-red-500" />
                <div>
                  <span className="text-sm text-gray-600">{t('dashboard.age')}:</span>
                  <span className="ml-1 font-medium">{profile.age || calculateAge(profile.dateOfBirth || '')} years</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-red-500" />
                <div>
                  <span className="text-sm text-gray-600">{t('dashboard.education')}:</span>
                  <span className="ml-1 font-medium">{profile.education}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="w-4 h-4 text-red-500" />
                <div>
                  <span className="text-sm text-gray-600">Job:</span>
                  <span className="ml-1 font-medium">{profile.job}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 text-red-500">💰</span>
                <div>
                  <span className="text-sm text-gray-600">{t('dashboard.income')}:</span>
                  <span className="ml-1 font-medium">{profile.income}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <div>
                  <span className="text-sm text-gray-600">{t('dashboard.native')}:</span>
                  <span className="ml-1 font-medium">{profile.native}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 text-red-500">🏛️</span>
                <div>
                  <span className="text-sm text-gray-600">Kulam:</span>
                  <span className="ml-1 font-medium">{profile.kulam}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Physical Details */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
              <Ruler className="w-5 h-5 text-red-600" />
              <span>{t('profile.physical.details')}</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <Ruler className="w-4 h-4 text-red-500" />
                <div>
                  <span className="text-sm text-gray-600">{t('dashboard.height')}:</span>
                  <span className="ml-1 font-medium">{profile.height}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Weight className="w-4 h-4 text-red-500" />
                <div>
                  <span className="text-sm text-gray-600">Weight:</span>
                  <span className="ml-1 font-medium">{profile.weight}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Palette className="w-4 h-4 text-red-500" />
                <div>
                  <span className="text-sm text-gray-600">Complexion:</span>
                  <span className="ml-1 font-medium">{profile.color}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Horoscope Details */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
              <Star className="w-5 h-5 text-red-600" />
              <span>{t('dashboard.horoscope')}</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-50 rounded-lg p-4">
              <div>
                <span className="text-sm text-gray-600">Natchatram:</span>
                <span className="ml-1 font-medium block">{profile.natchatram}</span>
              </div>
              <div>
                <span className="text-sm text-gray-600">Rassi:</span>
                <span className="ml-1 font-medium block">{profile.rassi}</span>
              </div>
              <div>
                <span className="text-sm text-gray-600">Laknam:</span>
                <span className="ml-1 font-medium block">{profile.laknam}</span>
              </div>
              <div>
                <span className="text-sm text-gray-600">Dosham:</span>
                <span className="ml-1 font-medium block">{profile.dosham === 'none' ? 'No Dosham' : profile.dosham}</span>
              </div>
            </div>
            {profile.jadhagam && (
              <div className="mt-4 bg-blue-50 rounded-lg p-4">
                <span className="text-sm text-gray-600">Jadhagam Details:</span>
                <p className="mt-1 text-gray-800">{profile.jadhagam}</p>
              </div>
            )}
          </div>

          {/* Family Details */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
              <Home className="w-5 h-5 text-red-600" />
              <span>{t('dashboard.family')}</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
              <div>
                <span className="text-sm text-gray-600">{t('dashboard.father')}:</span>
                <span className="ml-1 font-medium block">{profile.fatherName}</span>
                <span className="text-xs text-gray-500">({profile.fatherJob})</span>
              </div>
              <div>
                <span className="text-sm text-gray-600">{t('dashboard.mother')}:</span>
                <span className="ml-1 font-medium block">{profile.motherName}</span>
                <span className="text-xs text-gray-500">({profile.motherJob})</span>
              </div>
              <div>
                <span className="text-sm text-gray-600">Siblings:</span>
                <span className="ml-1 font-medium block">{profile.siblings}</span>
              </div>
              <div>
                <span className="text-sm text-gray-600">Siblings Married:</span>
                <span className="ml-1 font-medium block">{profile.siblingsMarried}</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
              <Phone className="w-5 h-5 text-red-600" />
              <span>{t('profile.contact.details')}</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-500" />
                <div>
                  <span className="text-sm text-gray-600">{t('dashboard.contact')}:</span>
                  <span className="ml-1 font-medium">{profile.phoneNumber1}</span>
                </div>
              </div>
              {profile.phoneNumber2 && (
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-red-500" />
                  <div>
                    <span className="text-sm text-gray-600">Contact 2:</span>
                    <span className="ml-1 font-medium">{profile.phoneNumber2}</span>
                  </div>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 text-red-500">📱</span>
                <div>
                  <span className="text-sm text-gray-600">{t('dashboard.whatsapp')}:</span>
                  <span className="ml-1 font-medium">{profile.whatsapp}</span>
                </div>
              </div>
              <div className="md:col-span-2">
                <span className="text-sm text-gray-600">{t('dashboard.address')}:</span>
                <p className="mt-1 text-gray-800">{profile.currentAddress}</p>
              </div>
            </div>
          </div>

          {/* Expectations & Additional Details */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-600" />
              <span>{t('profile.preferences.photos')}</span>
            </h4>
            <div className="space-y-4">
              {profile.expectations && (
                <div className="bg-red-50 rounded-lg p-4">
                  <span className="text-sm text-gray-600 font-medium">{t('dashboard.expectations')}:</span>
                  <p className="mt-1 text-gray-800">{profile.expectations}</p>
                </div>
              )}
              {profile.propertyDetails && (
                <div className="bg-green-50 rounded-lg p-4">
                  <span className="text-sm text-gray-600 font-medium">{t('dashboard.property')}:</span>
                  <p className="mt-1 text-gray-800">{profile.propertyDetails}</p>
                </div>
              )}
              {profile.otherDetails && (
                <div className="bg-blue-50 rounded-lg p-4">
                  <span className="text-sm text-gray-600 font-medium">Other Details:</span>
                  <p className="mt-1 text-gray-800">{profile.otherDetails}</p>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 pt-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {t('common.close')}
            </button>
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>Express Interest</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsModal;