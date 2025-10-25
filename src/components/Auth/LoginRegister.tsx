import React, { useState } from 'react';
import { Eye, EyeOff, Phone, User, Lock, ArrowLeft, Shield, Crown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import Captcha from '../Common/Captcha';

interface LoginRegisterProps {
  onBack?: () => void;
}

const LoginRegister: React.FC<LoginRegisterProps> = ({ onBack }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    password: '',
    whoseProfile: 'self' as const,
    otp: ''
  });
  const [otpState, setOtpState] = useState({
    isOTPSent: false,
    isVerified: false
  });
  const [captchaValid, setCaptchaValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { login, register, sendOTP, verifyOTP } = useAuth();
  const { t } = useLanguage();

  const validateMobile = (mobile: string) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
  };

  const handleSendOTP = async () => {
    if (!validateMobile(formData.mobile)) {
      setErrors({ mobile: 'Please enter a valid 10-digit mobile number' });
      return;
    }

    setErrors({});
    setOtpState({ isOTPSent: true, isVerified: false });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      let success = false;
      
      if (isLogin) {
        success = await login(formData.mobile, formData.password);
        if (!success) {
          setErrors({ password: 'Invalid mobile number or password' });
        }
      } else {
        if (!formData.name.trim()) {
          setErrors({ name: 'Name is required' });
          setLoading(false);
          return;
        }
        
        if (!otpState.isVerified) {
          setErrors({ otp: 'Please verify your mobile number first' });
          setLoading(false);
          return;
        }

        success = await register({
          name: formData.name,
          mobile: formData.mobile,
          email: '',
          whoseProfile: formData.whoseProfile
        });
        
        if (!success) {
          setErrors({ general: 'Registration failed. Please try again.' });
        }
      }
    } catch (error) {
      setErrors({ general: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      mobile: '',
      password: '',
      whoseProfile: 'self',
      otp: ''
    });
    setOtpState({ isOTPSent: false, isVerified: false });
    setCaptchaValid(false);
    setErrors({});
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setIsAdminLogin(false);
    resetForm();
  };

  const switchToAdminLogin = () => {
    setIsAdminLogin(true);
    setIsLogin(true);
    resetForm();
  };

  const switchToUserLogin = () => {
    setIsAdminLogin(false);
    resetForm();
  };

  // Check if submit button should be enabled
  const isSubmitEnabled = () => {
    if (!captchaValid) return false;
    
    if (isLogin) {
      return formData.mobile && formData.password;
    } else {
      return formData.name && 
             formData.mobile && 
             formData.password && 
             otpState.isVerified;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-white hover:text-purple-200 mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        )}
        
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Header with Mode Selection */}
          <div className={`p-8 text-center relative overflow-hidden ${
            isAdminLogin 
              ? 'bg-gradient-to-br from-amber-500 via-orange-500 to-red-500' 
              : 'bg-gradient-to-br from-purple-600 via-pink-600 to-red-600'
          }`}>
            <div className="absolute inset-0 bg-pattern opacity-20"></div>
            <div className="relative z-10">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center shadow-2xl ${
                isAdminLogin 
                  ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
                  : 'bg-gradient-to-br from-white/20 to-white/10'
              } backdrop-blur-sm border-2 border-white/30`}>
                {isAdminLogin ? (
                  <Crown className="w-10 h-10 text-white drop-shadow-lg" />
                ) : (
                  <User className="w-10 h-10 text-white drop-shadow-lg" />
                )}
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-2 text-shadow-lg">
                {isAdminLogin ? 'Admin Portal' : isLogin ? 'Welcome Back' : 'Join Our Community'}
              </h2>
              <p className="text-white/90 text-shadow">
                {isAdminLogin 
                  ? 'Administrative access to matrimony platform' 
                  : isLogin 
                  ? 'Sign in to find your perfect match' 
                  : 'Create your matrimony profile'
                }
              </p>

              {/* Mode Toggle Buttons */}
              <div className="flex justify-center mt-6 space-x-2">
                <button
                  onClick={switchToUserLogin}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    !isAdminLogin 
                      ? 'bg-white/30 text-white shadow-lg backdrop-blur-sm' 
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  User Login
                </button>
                <button
                  onClick={switchToAdminLogin}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-1 ${
                    isAdminLogin 
                      ? 'bg-white/30 text-white shadow-lg backdrop-blur-sm' 
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  <Shield className="w-4 h-4" />
                  <span>Admin</span>
                </button>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Admin Demo Credentials */}
            {isAdminLogin && (
              <div className="mb-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Crown className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold text-amber-800">Admin Credentials</span>
                </div>
                <div className="text-sm text-amber-700 space-y-1">
                  <p><strong>Mobile:</strong> 9999999999</p>
                  <p><strong>Password:</strong> admin123</p>
                </div>
              </div>
            )}

            {/* Regular User Demo Info */}
            {!isAdminLogin && !isLogin && (
              <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <User className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-800">Registration Info</span>
                </div>
                <p className="text-sm text-blue-700">
                  Use any valid mobile number and OTP: <strong>123456</strong>
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && !isAdminLogin && (
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    {t('auth.name')} *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all text-white placeholder-white/60"
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && <p className="text-red-300 text-sm mt-2">{errors.name}</p>}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">
                  {t('auth.mobile')} *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => {
                      setFormData({ ...formData, mobile: e.target.value });
                    }}
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all text-white placeholder-white/60 ${
                      !isLogin && !isAdminLogin && otpState.isVerified 
                        ? 'border-green-400 bg-green-500/20' 
                        : 'border-white/20'
                    }`}
                    placeholder="Enter 10-digit mobile number"
                    maxLength={10}
                    disabled={!isLogin && !isAdminLogin && otpState.isVerified}
                  />
                  {!isLogin && !isAdminLogin && otpState.isVerified && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-300">
                      <span className="text-sm font-medium">✓ Verified</span>
                    </div>
                  )}
                </div>
                {errors.mobile && <p className="text-red-300 text-sm mt-2">{errors.mobile}</p>}
                
                {!isLogin && !isAdminLogin && formData.mobile.length === 10 && validateMobile(formData.mobile) && !otpState.isOTPSent && (
                  <button
                    type="button"
                    onClick={handleSendOTP}
                    className="mt-3 w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Send OTP
                  </button>
                )}
              </div>

              {!isLogin && !isAdminLogin && otpState.isOTPSent && !otpState.isVerified && (
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    {t('auth.otp.verification')}
                  </label>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={formData.otp}
                      onChange={(e) => {
                        const otpValue = e.target.value;
                        setFormData({ ...formData, otp: otpValue });
                        
                        if (otpValue.length === 6) {
                          if (otpValue === '123456') {
                            setOtpState({ isOTPSent: true, isVerified: true });
                            setErrors({});
                          } else {
                            setErrors({ otp: 'Invalid OTP. Please enter 123456' });
                          }
                        } else {
                          setErrors({});
                        }
                      }}
                      className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all text-white placeholder-white/60 text-center text-lg font-mono"
                      placeholder="Enter 6-digit OTP"
                      maxLength={6}
                    />
                  </div>
                  {errors.otp && <p className="text-red-300 text-sm mt-2">{errors.otp}</p>}
                  <div className="mt-3 p-3 bg-blue-500/20 border border-blue-400/30 rounded-xl backdrop-blur-sm">
                    <p className="text-sm text-blue-200">
                      <strong>Demo OTP:</strong> 123456
                    </p>
                  </div>
                </div>
              )}

              {!isLogin && !isAdminLogin && (
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    {t('auth.whose.profile')}
                  </label>
                  <select
                    value={formData.whoseProfile}
                    onChange={(e) => setFormData({ ...formData, whoseProfile: e.target.value as any })}
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all text-white"
                  >
                    <option value="self" className="bg-gray-800">{t('profile.self')}</option>
                    <option value="son" className="bg-gray-800">{t('profile.son')}</option>
                    <option value="daughter" className="bg-gray-800">{t('profile.daughter')}</option>
                    <option value="friend" className="bg-gray-800">{t('profile.friend')}</option>
                    <option value="relative" className="bg-gray-800">{t('profile.relative')}</option>
                  </select>
                </div>
              )}

              {(isLogin || (!isLogin && !isAdminLogin && otpState.isVerified)) && (
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    {t('auth.password')} *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all text-white placeholder-white/60"
                      placeholder={isLogin ? 'Enter your password' : 'Create a strong password'}
                      minLength={6}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-300 text-sm mt-2">{errors.password}</p>}
                  {!isLogin && !isAdminLogin && formData.password && formData.password.length < 6 && (
                    <p className="text-yellow-300 text-sm mt-2">Password must be at least 6 characters long</p>
                  )}
                </div>
              )}

              {/* Captcha - Show after password is entered or for login */}
              {((isLogin && formData.mobile && formData.password) || 
                (!isLogin && !isAdminLogin && formData.password && otpState.isVerified)) && (
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Captcha
                    onVerify={setCaptchaValid}
                    className="captcha-dark"
                  />
                </div>
              )}

              {errors.general && (
                <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-red-200 text-sm">{errors.general}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !isSubmitEnabled()}
                className={`w-full py-4 px-4 rounded-xl font-semibold transition-all duration-200 transform ${
                  isSubmitEnabled() && !loading
                    ? isAdminLogin
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-xl hover:scale-105 hover:shadow-2xl'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl hover:scale-105 hover:shadow-2xl'
                    : 'bg-gray-600/50 text-gray-300 cursor-not-allowed opacity-60'
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{isLogin ? 'Signing in...' : 'Creating Account...'}</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    {isAdminLogin && <Crown className="w-5 h-5" />}
                    <span>{isLogin ? t('auth.signin') : t('auth.create.account')}</span>
                  </div>
                )}
              </button>
            </form>

            {!isAdminLogin && (
              <div className="mt-6 text-center">
                <button
                  onClick={switchMode}
                  className="text-purple-300 hover:text-white font-medium transition-colors"
                >
                  {isLogin ? t('auth.no.account') : t('auth.have.account')}
                </button>
              </div>
            )}

            {!isLogin && !isAdminLogin && (
              <div className="mt-6 bg-yellow-500/20 border border-yellow-400/30 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-sm text-yellow-200">
                  <strong>Note:</strong> After registration, your profile will be reviewed by our admin team. 
                  You'll receive access once approved (usually within 24-48 hours).
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;