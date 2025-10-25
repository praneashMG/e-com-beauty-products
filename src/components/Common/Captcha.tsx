import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

interface CaptchaProps {
  onVerify: (isValid: boolean) => void;
  className?: string;
}

const Captcha: React.FC<CaptchaProps> = ({ onVerify, className = '' }) => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(false);

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    setUserInput('');
    setIsValid(false);
    onVerify(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    const valid = userInput.toLowerCase() === captchaText.toLowerCase() && userInput.length > 0;
    setIsValid(valid);
    onVerify(valid);
  }, [userInput, captchaText, onVerify]);

  const isDarkTheme = className.includes('captcha-dark');

  const drawCaptcha = () => {
    return (
      <div className={`border-2 rounded-lg p-4 flex items-center justify-center h-16 font-mono text-xl font-bold select-none relative overflow-hidden ${
        isDarkTheme 
          ? 'border-white/30 bg-white/10 backdrop-blur-sm' 
          : 'border-gray-300 bg-white'
      }`}>
        <span className="tracking-wider transform rotate-1">
          {captchaText.split('').map((char, index) => (
            <span
              key={index}
              className={`inline-block transform ${
                index % 2 === 0 ? 'rotate-2' : '-rotate-1'
              } ${
                isDarkTheme
                  ? index % 3 === 0 ? 'text-purple-300' : index % 3 === 1 ? 'text-pink-300' : 'text-white'
                  : index % 3 === 0 ? 'text-red-600' : index % 3 === 1 ? 'text-blue-600' : 'text-gray-800'
              }`}
              style={{
                fontSize: `${18 + Math.random() * 6}px`,
                marginLeft: `${Math.random() * 2}px`,
                marginTop: `${(Math.random() - 0.5) * 4}px`
              }}
            >
              {char}
            </span>
          ))}
        </span>
      </div>
    );
  };

  return (
    <div className={className}>
      <label className={`block text-sm font-medium mb-2 ${
        isDarkTheme ? 'text-white/90' : 'text-gray-700'
      }`}>
        Verification Code *
      </label>
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          {drawCaptcha()}
          <button
            type="button"
            onClick={generateCaptcha}
            className={`p-2 transition-colors rounded-lg ${
              isDarkTheme 
                ? 'text-white/60 hover:text-white hover:bg-white/10' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            title="Refresh captcha"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg transition-colors ${
            isDarkTheme 
              ? 'bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/60 focus:ring-purple-400 focus:border-purple-400' 
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-red-500 focus:border-red-500'
          } ${
            userInput.length > 0
              ? isValid
                ? isDarkTheme 
                  ? 'border-green-400 focus:ring-green-400 focus:border-green-400' 
                  : 'border-green-500 focus:ring-green-500 focus:border-green-500'
                : isDarkTheme 
                  ? 'border-red-400 focus:ring-red-400 focus:border-red-400' 
                  : 'border-red-500 focus:ring-red-500 focus:border-red-500'
              : ''
          }`}
          placeholder="Enter the code above"
          maxLength={6}
        />
        {userInput.length > 0 && (
          <p className={`text-sm ${
            isValid 
              ? isDarkTheme ? 'text-green-300' : 'text-green-600'
              : isDarkTheme ? 'text-red-300' : 'text-red-500'
          }`}>
            {isValid ? '✓ Verification code is correct' : '✗ Verification code is incorrect'}
          </p>
        )}
      </div>
    </div>
  );
};

export default Captcha;