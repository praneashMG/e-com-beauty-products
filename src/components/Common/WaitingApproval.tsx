import React from 'react';
import { Clock, Shield, CheckCircle, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';

const WaitingApproval: React.FC = () => {
  const { logout } = useAuth();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center border border-red-100">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {t('approval.title')}
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {t('approval.message')}
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3 text-left">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-sm text-gray-700">Registration completed successfully</span>
            </div>
            
            <div className="flex items-center space-x-3 text-left">
              <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-yellow-600" />
              </div>
              <span className="text-sm text-gray-700">Admin verification in progress</span>
            </div>
            
            <div className="flex items-center space-x-3 text-left">
              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-gray-400" />
              </div>
              <span className="text-sm text-gray-500">Account activation pending</span>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800 text-sm">
              <strong>{t('approval.timeline')}</strong>
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-red-800 mb-2">For Demo Testing:</h4>
            <div className="space-y-1 text-sm text-red-700">
              <p>🔑 Admin Login: 9999999999</p>
              <p>🔐 Password: admin123</p>
              <p>💡 Open new tab to login as admin</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">For Immediate Assistance:</h4>
            <div className="space-y-1 text-sm text-gray-700">
              <p>📞 Contact: +91 9876543210</p>
              <p>📧 Email: admin@vgmatrimony.com</p>
              <p>🕒 Office Hours: 9 AM - 6 PM</p>
            </div>
          </div>

          {/* Logout button for demo purposes */}
          <button
            onClick={logout}
            className="mt-6 w-full flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout (For Demo)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitingApproval;