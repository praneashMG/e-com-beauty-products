import React, { useState, useEffect } from 'react';
import { Search, Filter, Heart, Lock, Star, MapPin, Briefcase, GraduationCap, Grid, List, Eye, Sparkles, Crown, Zap } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Profile, Match } from '../../types';
import PaymentModal from '../Payment/PaymentModal';
import ProfileViewModal from './ProfileViewModal';

const Dashboard: React.FC = () => {
  const { user, profile } = useAuth();
  const [matches, setMatches] = useState<Match[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchFilters, setSearchFilters] = useState({
    ageFrom: '',
    ageTo: '',
    education: '',
    location: ''
  });

  useEffect(() => {
    // Mock matches data with 90%+ compatibility - filtered by gender
    const allProfiles: Match[] = [
      {
        profile: {
          id: '1',
          userId: 'user1',
          name: 'Priya Gounder',
          gender: 'female',
          education: 'BE Computer Science',
          job: 'Software Engineer',
          income: '8-10 LPA',
          dateOfBirth: '1999-01-15',
          height: "5'4\"",
          color: 'Fair',
          native: 'Salem',
          photos: ['https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'],
          currentAddress: 'Chennai',
          fatherName: 'Rajesh Gounder',
          motherName: 'Lakshmi Gounder',
          phoneNumber1: '+91 9876543210',
          whatsapp: '+91 9876543210'
        } as Profile,
        compatibilityScore: 95,
        matchedFields: ['education', 'location', 'age', 'caste'],
        isUnlocked: false
      },
      {
        profile: {
          id: '2',
          userId: 'user2',
          name: 'Kavitha Gounder',
          gender: 'female',
          education: 'MSc Mathematics',
          job: 'Teacher',
          income: '4-6 LPA',
          dateOfBirth: '2001-03-20',
          height: "5'2\"",
          color: 'Wheatish',
          native: 'Erode',
          photos: ['https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'],
          currentAddress: 'Coimbatore',
          fatherName: 'Kumar Gounder',
          motherName: 'Devi Gounder',
          phoneNumber1: '+91 9876543211',
          whatsapp: '+91 9876543211'
        } as Profile,
        compatibilityScore: 92,
        matchedFields: ['education', 'age', 'caste'],
        isUnlocked: false
      },
      {
        profile: {
          id: '3',
          userId: 'user3',
          name: 'Meera Gounder',
          gender: 'female',
          education: 'MBA Finance',
          job: 'Bank Manager',
          income: '10-15 LPA',
          dateOfBirth: '1998-07-10',
          height: "5'3\"",
          color: 'Fair',
          native: 'Madurai',
          photos: ['https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'],
          currentAddress: 'Chennai',
          fatherName: 'Venkat Gounder',
          motherName: 'Radha Gounder',
          phoneNumber1: '+91 9876543212',
          whatsapp: '+91 9876543212'
        } as Profile,
        compatibilityScore: 90,
        matchedFields: ['profession', 'location', 'caste'],
        isUnlocked: true
      }
    ];

    // Add male profiles for female users
    const maleProfiles: Match[] = [
      {
        profile: {
          id: '4',
          userId: 'user4',
          name: 'Rajesh Gounder',
          gender: 'male',
          education: 'BE Mechanical',
          job: 'Engineer',
          income: '12-15 LPA',
          dateOfBirth: '1995-05-15',
          height: "5'8\"",
          color: 'Fair',
          native: 'Chennai',
          photos: ['https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'],
          currentAddress: 'Chennai',
          fatherName: 'Kumar Gounder',
          motherName: 'Sita Gounder',
          phoneNumber1: '+91 9876543213',
          whatsapp: '+91 9876543213'
        } as Profile,
        compatibilityScore: 93,
        matchedFields: ['education', 'location', 'caste'],
        isUnlocked: false
      },
      {
        profile: {
          id: '5',
          userId: 'user5',
          name: 'Suresh Gounder',
          gender: 'male',
          education: 'MBA Marketing',
          job: 'Business Manager',
          income: '15-20 LPA',
          dateOfBirth: '1993-12-08',
          height: "5'10\"",
          color: 'Wheatish',
          native: 'Salem',
          photos: ['https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'],
          currentAddress: 'Bangalore',
          fatherName: 'Raman Gounder',
          motherName: 'Kamala Gounder',
          phoneNumber1: '+91 9876543214',
          whatsapp: '+91 9876543214'
        } as Profile,
        compatibilityScore: 91,
        matchedFields: ['profession', 'caste'],
        isUnlocked: true
      }
    ];

    // Filter profiles based on user gender
    let filteredProfiles: Match[] = [];
    
    if (user?.profile?.gender === 'male' || profile?.gender === 'male') {
      filteredProfiles = allProfiles;
    } else if (user?.profile?.gender === 'female' || profile?.gender === 'female') {
      filteredProfiles = maleProfiles;
    } else {
      filteredProfiles = allProfiles;
    }

    setMatches(filteredProfiles);
  }, []);

  const handleUnlockProfile = (match: Match) => {
    setSelectedMatch(match);
    setShowPaymentModal(true);
  };

  const handleViewProfile = (match: Match) => {
    setSelectedProfile(match.profile);
    setShowProfileModal(true);
  };

  const handlePaymentSuccess = () => {
    if (selectedMatch) {
      const updatedMatches = matches.map(match => 
        match.profile.id === selectedMatch.profile.id 
          ? { ...match, isUnlocked: true }
          : match
      );
      setMatches(updatedMatches);
      setShowPaymentModal(false);
      setSelectedMatch(null);
    }
  };

  const renderGridView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {matches.map((match) => (
        <div key={match.profile.id} className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden floating-card group">
          <div className="relative">
            <img
              src={match.profile.photos?.[0] || 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'}
              alt={match.profile.name}
              className="w-full h-48 sm:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
              <div className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center space-x-1 sm:space-x-2 shadow-md">
                <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{match.compatibilityScore}% Match</span>
              </div>
            </div>
            {!match.isUnlocked && (
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-sm">
                <button
                  onClick={() => handleUnlockProfile(match)}
                  className="elegant-button px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 shadow-md flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base"
                >
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Unlock Profile</span>
                </button>
              </div>
            )}
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{match.profile.name}</h3>
            
            <div className="space-y-2 sm:space-y-3 text-gray-600">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-sm sm:text-base lg:text-lg">{match.profile.education}</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-sm sm:text-base lg:text-lg">{match.profile.job}</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-sm sm:text-base lg:text-lg">{match.profile.currentAddress}</span>
              </div>
              <div className="text-gray-500 text-sm sm:text-base lg:text-lg">
                Age: {new Date().getFullYear() - new Date(match.profile.dateOfBirth || '1995-01-01').getFullYear()} years
              </div>
            </div>

            {match.isUnlocked && (
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                <div className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                  <p><strong>Father:</strong> {match.profile.fatherName}</p>
                  <p><strong>Height:</strong> {match.profile.height}</p>
                  <p><strong>Native:</strong> {match.profile.native}</p>
                </div>
              </div>
            )}

            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-1 sm:space-x-2 text-green-600">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base lg:text-lg">
                  {match.matchedFields.length} common interests
                </span>
              </div>
              
              {match.isUnlocked ? (
                <button 
                  onClick={() => handleViewProfile(match)}
                  className="elegant-button px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm shadow-md w-full sm:w-auto"
                >
                  View Full Profile
                </button>
              ) : (
                <span className="text-gray-500 font-medium text-sm sm:text-base">₹199 to unlock</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4 sm:space-y-6">
      {matches.map((match) => (
        <div key={match.profile.id} className="bg-white border border-gray-200 rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
            <div className="relative flex-shrink-0">
              <img
                src={match.profile.photos?.[0] || 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'}
                alt={match.profile.name}
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-2xl"
              />
              {!match.isUnlocked && (
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-2xl">
                  <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              )}
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between space-y-4 sm:space-y-0">
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{match.profile.name}</h3>
                  <div className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold inline-flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                    <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{match.compatibilityScore}% Match</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4">
                  {!match.isUnlocked ? (
                    <button
                      onClick={() => handleUnlockProfile(match)}
                      className="elegant-button px-4 sm:px-6 lg:px-8 py-2 sm:py-3 shadow-md flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base w-full sm:w-auto"
                    >
                      <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Unlock ₹199</span>
                    </button>
                  ) : (
                    <button 
                      onClick={() => handleViewProfile(match)}
                      className="elegant-button px-4 sm:px-6 lg:px-8 py-2 sm:py-3 shadow-md flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base w-full sm:w-auto"
                    >
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>View Profile</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 text-gray-600">
                <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg">{match.profile.education}</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg">{match.profile.job}</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg">{match.profile.currentAddress}</span>
                </div>
              </div>

              {match.isUnlocked && (
                <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 text-gray-600 pt-3 sm:pt-4 border-t border-gray-200">
                  <div className="text-sm sm:text-base lg:text-lg text-center sm:text-left"><strong>Father:</strong> {match.profile.fatherName}</div>
                  <div className="text-sm sm:text-base lg:text-lg text-center sm:text-left"><strong>Height:</strong> {match.profile.height}</div>
                  <div className="text-sm sm:text-base lg:text-lg text-center sm:text-left"><strong>Native:</strong> {match.profile.native}</div>
                </div>
              )}

              <div className="mt-3 sm:mt-4 flex items-center justify-center sm:justify-start text-green-600">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                <span className="font-medium text-sm sm:text-base lg:text-lg">
                  {match.matchedFields.length} common interests
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 pt-6 sm:pt-8">
        {/* Header Section */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-md">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2">Welcome, {user?.name}!</h1>
                <p className="text-gray-600 text-base sm:text-lg lg:text-xl">Find your perfect life partner from our trusted Vettuva Gounder community</p>
              </div>
            </div>
          
            {!user?.profileCompleted && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                  <p className="text-yellow-800 text-sm sm:text-base lg:text-lg">
                    <strong>Complete Your Profile:</strong> Add your details to get better matches and unlock all features.
                  </p>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 text-sm sm:text-base lg:text-lg">Verified Profiles</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600 text-sm sm:text-base lg:text-lg">Success Rate</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600 text-sm sm:text-base lg:text-lg">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Section */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8 mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-md">
                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Find Your Match</h2>
            </div>
            
            <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 sm:p-3 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 sm:p-3 rounded-lg transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                <List className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3">Age From</label>
              <input
                type="number"
                value={searchFilters.ageFrom}
                onChange={(e) => setSearchFilters({...searchFilters, ageFrom: e.target.value})}
                className="form-input"
                placeholder="Min age"
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3">Age To</label>
              <input
                type="number"
                value={searchFilters.ageTo}
                onChange={(e) => setSearchFilters({...searchFilters, ageTo: e.target.value})}
                className="form-input"
                placeholder="Max age"
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3">Education</label>
              <input
                type="text"
                value={searchFilters.education}
                onChange={(e) => setSearchFilters({...searchFilters, education: e.target.value})}
                className="form-input"
                placeholder="Education level"
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3">Location</label>
              <input
                type="text"
                value={searchFilters.location}
                onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                className="form-input"
                placeholder="Preferred location"
              />
            </div>
          </div>
        </div>

        {/* Matches Section */}
        {viewMode === 'grid' ? renderGridView() : renderListView()}

        {matches.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 sm:p-12 lg:p-16">
              <Heart className="w-16 h-16 sm:w-20 sm:h-20 text-gray-300 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-600 mb-3 sm:mb-4">No matches found</h3>
              <p className="text-gray-500 text-base sm:text-lg">Try adjusting your search criteria or complete your profile</p>
            </div>
          </div>
        )}

        {/* Payment Modal */}
        {showPaymentModal && selectedMatch && (
          <PaymentModal
            match={selectedMatch}
            onClose={() => setShowPaymentModal(false)}
            onSuccess={handlePaymentSuccess}
          />
        )}

        {/* Profile View Modal */}
        {showProfileModal && selectedProfile && (
          <ProfileViewModal
            profile={selectedProfile}
            onClose={() => setShowProfileModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;