import React from 'react';
import { LogOut, User, Heart, Sparkles, Crown, Shield } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';

interface HeaderProps {
  currentView?: 'dashboard' | 'profile';
  onViewChange?: (view: 'dashboard' | 'profile') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  const { user, logout, isAuthenticated } = useAuth();
  const { t } = useLanguage();

  return (
    <header className="bg-white sticky top-0 z-40 border-b border-gray-200 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 sm:py-6 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="relative group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-md transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                {t('site.title')}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium tamil-text hidden sm:block">{t('site.subtitle')}</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 w-full sm:w-auto">
            {/* Navigation for non-admin users */}
            {isAuthenticated && user && !user.isAdmin && onViewChange && (
              <div className="bg-gray-100 rounded-xl p-1 shadow-sm w-full sm:w-auto">
                <div className="flex space-x-1">
                  <button
                    onClick={() => onViewChange('dashboard')}
                    className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      currentView === 'dashboard' 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => onViewChange('profile')}
                    className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm font-semibold transition-all duration-300 relative ${
                      currentView === 'profile' 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    My Profile
                    {!user?.profileCompleted && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm animate-pulse">
                        Incomplete
                      </span>
                    )}
                  </button>
                </div>
              </div>
            )}

            {isAuthenticated && user && (
              <>
                <div className="bg-white border border-gray-200 px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-sm">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center shadow-sm">
                      {user.isAdmin ? (
                        <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      ) : (
                        <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      )}
                    </div>
                    <div>
                      <span className="text-sm sm:text-base font-semibold text-gray-900">{user.name}</span>
                      {user.isAdmin && (
                        <div className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold mt-1 flex items-center space-x-1">
                          <Shield className="w-2 h-2 sm:w-3 sm:h-3" />
                          <span>Admin</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="outline-button px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm font-medium transition-all duration-300 shadow-sm w-full sm:w-auto"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{t('header.logout')}</span>
                  </div>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;