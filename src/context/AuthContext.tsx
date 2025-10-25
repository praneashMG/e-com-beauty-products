import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Profile, AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (mobile: string, password: string) => Promise<boolean>;
  register: (userData: Partial<User>) => Promise<boolean>;
  logout: () => void;
  updateProfile: (profileData: Partial<Profile>) => void;
  sendOTP: (mobile: string) => Promise<boolean>;
  verifyOTP: (mobile: string, otp: string) => Promise<boolean>;
  approveUser: (userId: string) => void;
  rejectUser: (userId: string) => void;
  getPendingUsers: () => User[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    profile: null,
    loading: true
  });

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem('current_user');
    const storedProfile = localStorage.getItem('current_profile');
    
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setAuthState({
        isAuthenticated: true,
        user,
        profile: storedProfile ? JSON.parse(storedProfile) : null,
        loading: false
      });
    } else {
      setAuthState(prev => ({ ...prev, loading: false }));
    }
  }, []);

  const sendOTP = async (mobile: string): Promise<boolean> => {
    try {
      console.log(`Sending OTP to ${mobile}`);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, this would call your SMS service
      // For demo purposes, we always return success
      console.log(`OTP sent successfully to ${mobile}. Demo OTP: 123456`);
      return true;
    } catch (error) {
      console.error('Failed to send OTP:', error);
      return false;
    }
  };

  const verifyOTP = async (mobile: string, otp: string): Promise<boolean> => {
    try {
      console.log(`Verifying OTP for ${mobile}: ${otp}`);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Static OTP verification - in production this would verify with your backend
      const isValid = otp === '123456';
      
      if (isValid) {
        console.log('OTP verified successfully');
      } else {
        console.log('Invalid OTP provided');
      }
      
      return isValid;
    } catch (error) {
      console.error('OTP verification failed:', error);
      return false;
    }
  };

  const register = async (userData: Partial<User>): Promise<boolean> => {
    try {
      const newUser: User = {
        id: `user_${Date.now()}`,
        name: userData.name || '',
        mobile: userData.mobile || '',
        email: userData.email || '',
        whoseProfile: userData.whoseProfile || 'self',
        isVerified: true,
        adminApproved: true,
        profileCompleted: false,
        isAdmin: false,
        createdAt: new Date()
      };

      // Store user in approved users list directly
      const existingApprovedUsers = localStorage.getItem('approved_users');
      const approvedUsers = existingApprovedUsers ? JSON.parse(existingApprovedUsers) : [];
      approvedUsers.push(newUser);
      localStorage.setItem('approved_users', JSON.stringify(approvedUsers));
      
      // Store current user session
      localStorage.setItem('current_user', JSON.stringify(newUser));
      
      setAuthState({
        isAuthenticated: true,
        user: newUser,
        profile: null,
        loading: false
      });

      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  };

  const login = async (mobile: string, password: string): Promise<boolean> => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo admin credentials
      if (mobile === '9999999999' && password === 'admin123') {
        const adminUser: User = {
          id: 'admin_1',
          name: 'Admin User',
          mobile: '9999999999',
          email: 'admin@vgmatrimony.com',
          whoseProfile: 'self',
          isVerified: true,
          adminApproved: true,
          profileCompleted: true,
          isAdmin: true,
          createdAt: new Date()
        };
        
        localStorage.setItem('current_user', JSON.stringify(adminUser));
        setAuthState({
          isAuthenticated: true,
          user: adminUser,
          profile: null,
          loading: false
        });
        return true;
      }
      
      // Check pending users
      const pendingUsersData = localStorage.getItem('pending_users');
      if (pendingUsersData) {
        const pendingUsers = JSON.parse(pendingUsersData);
        const user = pendingUsers.find((u: User) => u.mobile === mobile);
        if (user) {
          localStorage.setItem('current_user', JSON.stringify(user));
          setAuthState({
            isAuthenticated: true,
            user,
            profile: null,
            loading: false
          });
          return true;
        }
      }
      
      // Check approved users
      const approvedUsersData = localStorage.getItem('approved_users');
      if (approvedUsersData) {
        const approvedUsers = JSON.parse(approvedUsersData);
        const user = approvedUsers.find((u: User) => u.mobile === mobile);
        if (user) {
          localStorage.setItem('current_user', JSON.stringify(user));
          setAuthState({
            isAuthenticated: true,
            user,
            profile: null,
            loading: false
          });
          return true;
        }
      }
      
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('current_user');
    localStorage.removeItem('current_profile');
    setAuthState({
      isAuthenticated: false,
      user: null,
      profile: null,
      loading: false
    });
  };

  const updateProfile = (profileData: Partial<Profile>) => {
    if (authState.user) {
      const updatedProfile: Profile = {
        id: authState.profile?.id || `profile_${Date.now()}`,
        userId: authState.user.id,
        ...profileData,
        createdAt: authState.profile?.createdAt || new Date(),
        updatedAt: new Date()
      } as Profile;

      localStorage.setItem('current_profile', JSON.stringify(updatedProfile));
      
      // Update user's profile completion status
      const updatedUser = { ...authState.user, profileCompleted: true };
      localStorage.setItem('current_user', JSON.stringify(updatedUser));
      
      setAuthState(prev => ({
        ...prev,
        profile: updatedProfile,
        user: updatedUser
      }));
    }
  };

  const approveUser = (userId: string) => {
    try {
      // Get pending users
      const pendingUsersData = localStorage.getItem('pending_users');
      if (!pendingUsersData) return;
      
      const pendingUsers = JSON.parse(pendingUsersData);
      const userToApprove = pendingUsers.find((u: User) => u.id === userId);
      
      if (userToApprove) {
        // Update user status
        userToApprove.adminApproved = true;
        
        // Remove from pending users
        const updatedPendingUsers = pendingUsers.filter((u: User) => u.id !== userId);
        localStorage.setItem('pending_users', JSON.stringify(updatedPendingUsers));
        
        // Add to approved users
        const approvedUsersData = localStorage.getItem('approved_users');
        const approvedUsers = approvedUsersData ? JSON.parse(approvedUsersData) : [];
        approvedUsers.push(userToApprove);
        localStorage.setItem('approved_users', JSON.stringify(approvedUsers));
      }
    } catch (error) {
      console.error('Error approving user:', error);
    }
  };

  const rejectUser = (userId: string) => {
    try {
      const pendingUsersData = localStorage.getItem('pending_users');
      if (!pendingUsersData) return;
      
      const pendingUsers = JSON.parse(pendingUsersData);
      const updatedPendingUsers = pendingUsers.filter((u: User) => u.id !== userId);
      localStorage.setItem('pending_users', JSON.stringify(updatedPendingUsers));
    } catch (error) {
      console.error('Error rejecting user:', error);
    }
  };

  const getPendingUsers = (): User[] => {
    try {
      const pendingUsersData = localStorage.getItem('pending_users');
      return pendingUsersData ? JSON.parse(pendingUsersData) : [];
    } catch (error) {
      console.error('Error getting pending users:', error);
      return [];
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        logout,
        updateProfile,
        sendOTP,
        verifyOTP,
        approveUser,
        rejectUser,
        getPendingUsers
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};