import React from 'react';
import { Heart, Shield, Users, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
interface HomePageProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}
const HomePage: React.FC<HomePageProps> = ({ onGetStarted, onSignIn }) => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 animate-gradient-x">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-red-900 mb-6">
              {t('home.welcome')}
            </h1>
            <p className="text-xl lg:text-2xl text-red-700 mb-8 max-w-3xl mx-auto">
              {t('home.subtitle')}
            </p>            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={onGetStarted}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>{t('home.get.started')}</span>
                <ArrowRight className="w-5 h-5" />
              </button>              
              <button
                onClick={onSignIn}
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                {t('auth.already.member')} {t('auth.sign.in.here')}
              </button>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-200 rounded-full opacity-25 animate-pulse delay-500"></div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {t('home.trusted.by')}
            </h2>
          </div>          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-2">5000+</div>
              <div className="text-gray-600 font-medium">{t('home.verified.profiles')}</div>
            </div>            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">1200+</div>
              <div className="text-gray-600 font-medium">{t('home.successful.matches')}</div>
            </div>            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">{t('home.years.experience')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {t('home.why.choose')}
            </h2>
          </div>          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('home.community.focused')}</h3>
              <p className="text-gray-600">{t('home.community.desc')}</p>
            </div>            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('home.verified.members')}</h3>
              <p className="text-gray-600">{t('home.verified.desc')}</p>
            </div>            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('home.secure.platform')}</h3>
              <p className="text-gray-600">{t('home.secure.desc')}</p>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t('auth.find.partner')}
          </h2>
          <p className="text-xl text-red-100 mb-8">
            {t('auth.trusted.service')}
          </p>
          <button
            onClick={onGetStarted}
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
          >
            {t('auth.join.now')}
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;