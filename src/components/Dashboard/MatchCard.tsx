import React from 'react';
import { Star, Heart, Lock, GraduationCap, Briefcase, MapPin, Phone, Calendar } from 'lucide-react';
import { Match } from '../../types';

interface MatchCardProps {
  match: Match;
  onUnlock: (match: Match) => void;
  viewMode: 'grid' | 'list';
}

const MatchCard: React.FC<MatchCardProps> = ({ match, onUnlock, viewMode }) => {
  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    return today.getFullYear() - birthDate.getFullYear();
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-48 lg:w-56">
            <img
              src={match.profile.photos?.[0] || 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'}
              alt={match.profile.name}
              className="w-full h-48 md:h-full object-cover object-center"
            />
            <div className="absolute top-3 right-3">
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
                <Star className="w-4 h-4" />
                <span>{match.compatibilityScore}%</span>
              </div>
            </div>
            {!match.isUnlocked && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <Lock className="w-8 h-8 text-white" />
              </div>
            )}
          </div>

          <div className="flex-1 p-4 lg:p-6">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">{match.profile.name}</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-red-500" />
                    <span>{match.profile.age || calculateAge(match.profile.dateOfBirth || '')} years</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-red-500" />
                    <span>{match.profile.education}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 text-red-500" />
                    <span>{match.profile.job}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>{match.profile.currentAddress}</span>
                  </div>
                </div>

                {match.isUnlocked && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-green-800 mb-2">Contact Information</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-green-700">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>{match.profile.phoneNumber1}</span>
                      </div>
                      <div><strong>Father:</strong> {match.profile.fatherName}</div>
                      <div><strong>Height:</strong> {match.profile.height}</div>
                      <div><strong>Native:</strong> {match.profile.native}</div>
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-green-600">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {match.matchedFields.length} common interests
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Income: {match.profile.income}
                  </div>
                </div>
              </div>

              <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col space-y-3 lg:w-40">
                {match.isUnlocked ? (
                  <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium">
                    View Details
                  </button>
                ) : (
                  <button
                    onClick={() => onUnlock(match)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Unlock</span>
                  </button>
                )}
                <div className="text-center text-xs text-gray-500">
                  ₹199 one-time
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="relative">
        <img
          src={match.profile.photos?.[0] || 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'}
          alt={match.profile.name}
          className="w-full h-48 sm:h-56 lg:h-64 object-cover"
        />
        <div className="absolute top-3 right-3">
          <div className="bg-green-500 text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-semibold flex items-center space-x-1 shadow-lg">
            <Star className="w-3 h-3 lg:w-4 lg:h-4" />
            <span>{match.compatibilityScore}%</span>
          </div>
        </div>
        {!match.isUnlocked && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
            <button
              onClick={() => onUnlock(match)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <Lock className="w-4 h-4" />
              <span className="text-sm lg:text-base">Unlock</span>
            </button>
          </div>
        )}
      </div>

      <div className="p-4 lg:p-6">
        <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2 truncate">{match.profile.name}</h3>
        
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-red-500" />
            <span>{match.profile.age || calculateAge(match.profile.dateOfBirth || '')} years</span>
          </div>
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-4 h-4 text-red-500" />
            <span className="truncate">{match.profile.education}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Briefcase className="w-4 h-4 text-red-500" />
            <span className="truncate">{match.profile.job}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-red-500" />
            <span className="truncate">{match.profile.currentAddress}</span>
          </div>
        </div>

        {match.isUnlocked && (
          <div className="bg-gray-50 rounded-lg p-3 mb-4 text-xs">
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <div><strong>Height:</strong> {match.profile.height}</div>
              <div><strong>Income:</strong> {match.profile.income}</div>
              <div><strong>Father:</strong> {match.profile.fatherName}</div>
              <div><strong>Native:</strong> {match.profile.native}</div>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1 text-green-600">
            <Heart className="w-4 h-4" />
            <span className="text-xs lg:text-sm font-medium">
              {match.matchedFields.length} matches
            </span>
          </div>
          
          {match.isUnlocked ? (
            <button className="bg-red-600 text-white px-3 lg:px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-xs lg:text-sm font-medium">
              View Details
            </button>
          ) : (
            <span className="text-xs text-gray-500">₹199</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchCard;