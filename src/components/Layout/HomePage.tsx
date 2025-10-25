import React, { useState } from 'react';
import { Heart, Users, Shield, Award, ArrowRight, Phone, Mail, MapPin, Star, Sparkles, Crown, Zap, Camera, Gift, Smile, Music, Coffee, Flower } from 'lucide-react';
import LoginRegister from '../Auth/LoginRegister';

const HomePage: React.FC = () => {
  const [showAuth, setShowAuth] = useState(false);

  if (showAuth) {
    return <LoginRegister onBack={() => setShowAuth(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 sm:py-6 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="relative group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-md transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  Vettuva Gounder Matrimony
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium tamil-text">வெட்டுவ கவுண்டர் திருமண சேவை</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 w-full sm:w-auto justify-center sm:justify-end">
              <button
                onClick={() => setShowAuth(true)}
                className="elegant-button w-full sm:w-auto"
              >
                Login / Register
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        <div className="floating-elements"></div>
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8">
                <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <span className="text-blue-800 font-medium text-sm sm:text-base">Premium Matrimony Service</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                Find Your Perfect
                <span className="text-blue-600 block mt-2">Life Partner</span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-lg">
                Join thousands of Vettuva Gounder families who found their happiness through our trusted matrimony service. 
                Your perfect match is waiting for you.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                <button
                  onClick={() => setShowAuth(true)}
                  className="elegant-button text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 w-full sm:w-auto"
                >
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span>Register Free</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </button>
                <button
                  onClick={() => setShowAuth(true)}
                  className="outline-button text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 w-full sm:w-auto"
                >
                  Browse Profiles
                </button>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 animate-float card-hover-effect">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md">
                    <Star className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Success Stories</h3>
                  <p className="text-gray-600 text-base sm:text-lg">Happy couples who found love</p>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gray-50 border border-gray-200 p-4 sm:p-6 rounded-xl card-hover-effect">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-600 rounded-xl flex items-center justify-center shadow-sm">
                        <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-base sm:text-lg">Rajesh & Priya</p>
                        <p className="text-gray-600 text-sm sm:text-base">Married in 2023</p>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 border border-gray-200 p-4 sm:p-6 rounded-xl card-hover-effect">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-xl flex items-center justify-center shadow-sm">
                        <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-base sm:text-lg">Kumar & Kavitha</p>
                        <p className="text-gray-600 text-sm sm:text-base">Married in 2023</p>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Gallery Section */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Happy Moments</h3>
              <p className="text-lg sm:text-xl text-gray-600">Celebrating love stories from our Vettuva Gounder community</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
              <div className="gallery-item">
                <img src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Traditional Tamil wedding ceremony" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                  <span className="text-white font-semibold text-sm sm:text-base">Traditional Wedding</span>
                </div>
              </div>
              <div className="gallery-item">
                <img src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Engagement ceremony" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                  <span className="text-white font-semibold text-sm sm:text-base">Engagement Ceremony</span>
                </div>
              </div>
              <div className="gallery-item">
                <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Family gathering" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                  <span className="text-white font-semibold text-sm sm:text-base">Family Gathering</span>
                </div>
              </div>
              <div className="gallery-item">
                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Couple portrait" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                  <span className="text-white font-semibold text-sm sm:text-base">Couple Portrait</span>
                </div>
              </div>
              <div className="gallery-item">
                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Cultural celebration" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                  <span className="text-white font-semibold text-sm sm:text-base">Cultural Celebration</span>
                </div>
              </div>
              <div className="gallery-item">
                <img src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Bridal portrait" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                  <span className="text-white font-semibold text-sm sm:text-base">Bridal Portrait</span>
                </div>
              </div>
              <div className="gallery-item">
                <img src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Wedding rituals" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                  <span className="text-white font-semibold text-sm sm:text-base">Wedding Rituals</span>
                </div>
              </div>
              <div className="gallery-item">
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Reception celebration" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                  <span className="text-white font-semibold text-sm sm:text-base">Reception</span>
                </div>
              </div>
            </div>
            
            {/* Additional Image Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md card-hover-effect">
                <img src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Traditional Tamil wedding" className="w-full h-48 sm:h-64 object-cover" />
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Traditional Ceremonies</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Experience the rich cultural heritage of Vettuva Gounder community weddings with traditional rituals and customs.</p>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md card-hover-effect">
                <img src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Family celebrations" className="w-full h-48 sm:h-64 object-cover" />
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Family Celebrations</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Join families in celebrating the union of hearts with joy, love, and traditional festivities.</p>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md card-hover-effect">
                <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Community gathering" className="w-full h-48 sm:h-64 object-cover" />
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Community Unity</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Bringing together the Vettuva Gounder community through meaningful connections and lasting relationships.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        <div className="floating-elements"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <span className="text-blue-800 font-medium text-sm sm:text-base">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">Premium Features</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Trusted by thousands of families across Tamil Nadu</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8 lg:p-10 text-center card-hover-effect group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">100% Verified</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">All profiles are manually verified by our expert team</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8 lg:p-10 text-center card-hover-effect group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">500+ Profiles</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">Large database of Vettuva Gounder community</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8 lg:p-10 text-center card-hover-effect group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">95% Success</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">High success rate in finding perfect matches</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8 lg:p-10 text-center card-hover-effect group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Free Service</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">Registration and basic features are completely free</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="bg-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        <div className="floating-elements"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">What Our Couples Say</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Real stories from real couples who found love through our platform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8 card-hover-effect">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Couple" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gray-200" />
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">Rajesh & Priya</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Married in 2023</p>
                </div>
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">"We found each other through this wonderful platform. The process was smooth and the support team was amazing!"</p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8 card-hover-effect">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Couple" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gray-200" />
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">Kumar & Kavitha</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Married in 2023</p>
                </div>
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">"Perfect match! The compatibility system really works. We're so grateful for this service."</p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8 card-hover-effect">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Couple" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gray-200" />
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">Suresh & Meera</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Married in 2024</p>
                </div>
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">"Excellent service with genuine profiles. Found my soulmate within 3 months!"</p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24 relative">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8 lg:p-10 group card-hover-effect">
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-600 mb-2 sm:mb-4">500+</div>
              <div className="text-gray-600 font-semibold text-sm sm:text-base lg:text-lg">Active Profiles</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8 lg:p-10 group card-hover-effect">
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-600 mb-2 sm:mb-4">200+</div>
              <div className="text-gray-600 font-semibold text-sm sm:text-base lg:text-lg">Success Stories</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8 lg:p-10 group card-hover-effect">
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-purple-600 mb-2 sm:mb-4">15+</div>
              <div className="text-gray-600 font-semibold text-sm sm:text-base lg:text-lg">Years Experience</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8 lg:p-10 group card-hover-effect">
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500 mb-2 sm:mb-4">24/7</div>
              <div className="text-gray-600 font-semibold text-sm sm:text-base lg:text-lg">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 relative">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl shadow-lg p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-md">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">Ready to Find Your Life Partner?</h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                Join our premium community today and take the first step towards your happily ever after
              </p>
              <button
                onClick={() => setShowAuth(true)}
                className="elegant-button text-lg sm:text-xl px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 w-full sm:w-auto"
              >
                <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Start Your Journey</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-md">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Vettuva Gounder Matrimony</h3>
                  <p className="text-gray-300 tamil-text text-sm sm:text-base">வெட்டுவ கவுண்டர் திருமண சேவை</p>
                </div>
              </div>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Trusted matrimony service for the Vettuva Gounder community. 
                Helping families find perfect matches since 2008.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Contact Info</h4>
              <div className="space-y-3 sm:space-y-4 text-gray-300">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center shadow-sm">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center shadow-sm">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg">info@vgmatrimony.com</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center shadow-sm">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg">Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Quick Links</h4>
              <div className="space-y-3 sm:space-y-4 text-gray-300">
                <button onClick={() => setShowAuth(true)} className="block hover:text-white transition-colors text-sm sm:text-base lg:text-lg text-left">
                  Register
                </button>
                <button onClick={() => setShowAuth(true)} className="block hover:text-white transition-colors text-sm sm:text-base lg:text-lg text-left">
                  Login
                </button>
                <a href="#" className="block hover:text-white transition-colors text-sm sm:text-base lg:text-lg">
                  Success Stories
                </a>
                <a href="#" className="block hover:text-white transition-colors text-sm sm:text-base lg:text-lg">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-sm sm:text-base lg:text-lg">&copy; 2024 Vettuva Gounder Matrimony. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;