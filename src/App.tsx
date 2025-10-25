import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './components/Layout/HomePage';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import ProfileForm from './components/Profile/ProfileForm';
import AdminDashboard from './components/Admin/AdminDashboard';

const AppContent: React.FC = () => {
  const { isAuthenticated, user, loading } = useAuth();
  const [currentView, setCurrentView] = useState<'dashboard' | 'profile' | 'admin'>('dashboard');

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-700 font-semibold text-lg sm:text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <HomePage />;
  }

  // Admin view
  if (user?.isAdmin) {
    return (
      <div className="min-h-screen bg-mesh">
        <Header />
        <AdminDashboard />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentView={currentView} onViewChange={setCurrentView} />

      {/* Main Content */}
      <main>
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'profile' && <ProfileForm />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 sm:py-12 mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 tamil-text">வெட்டுவ கவுண்டர் திருமண சேவை</h3>
          <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">Trusted matrimony service for our community</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8 lg:space-x-12 text-gray-600">
            <span className="flex items-center space-x-2 text-sm sm:text-base lg:text-lg">
              <span>📞</span>
              <span>+91 9876543210</span>
            </span>
            <span className="flex items-center space-x-2 text-sm sm:text-base lg:text-lg">
              <span>📧</span>
              <span>info@vgmatrimony.com</span>
            </span>
            <span className="flex items-center space-x-2 text-sm sm:text-base lg:text-lg">
              <span>🕒</span>
              <span>9 AM - 6 PM</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;