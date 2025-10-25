export interface User {
  id: string;
  name: string;
  mobile: string;
  email: string;
  whoseProfile: 'self' | 'son' | 'daughter' | 'friend' | 'relative';
  isVerified: boolean;
  adminApproved: boolean;
  profileCompleted: boolean;
  isAdmin: boolean;
  createdAt: Date;
}

export interface Profile {
  id: string;
  userId: string;
  // Personal Details
  name: string;
  education: string;
  job: string;
  income: string;
  dateOfBirth: string;
  natchatram: string;
  rassi: string;
  laknam: string;
  dosham: 'செவ்வாய்' | 'செவ்வாய், ராகு கேது' | 'செவ்வாய்' | 'none';
  height: string;
  weight: string;
  color: string;
  
  // Family Details
  fatherName: string;
  motherName: string;
  fatherJob: string;
  motherJob: string;
  siblings: string;
  siblingsMarried: string;
  
  // Contact Details
  phoneNumber1: string;
  phoneNumber2: string;
  currentAddress: string;
  permanentAddress: string;
  whatsapp: string;
  
  // Additional Details
  gender: 'male' | 'female';
  jadhagam: string;
  expectations: string;
  native: string;
  kulam: string;
  propertyDetails: string;
  otherDetails: string;
  photos: string[];
  
  // Status
  profileStatus: 'verified' | 'in-progress' | 'uploaded';
  
  createdAt: Date;
  updatedAt: Date;
}

export interface Match {
  profile: Profile;
  compatibilityScore: number;
  matchedFields: string[];
  isUnlocked: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  profile: Profile | null;
  loading: boolean;
}

export interface OTPState {
  mobile: string;
  isOTPSent: boolean;
  isVerified: boolean;
  otp: string;
}