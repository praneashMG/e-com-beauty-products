import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'en' | 'ta';
  setLanguage: (lang: 'en' | 'ta') => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'site.title': 'Vettuva Gounder Matrimony',
    'site.subtitle': 'Vettuva Gounder Matrimony',
    'header.logout': 'Logout',
    
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.profile': 'My Profile',
    'nav.incomplete': 'Incomplete',
    
    // Auth
    'auth.welcome.back': 'Welcome Back',
    'auth.join.community': 'Join Our Community',
    'auth.signin.subtitle': 'Sign in to find your perfect match',
    'auth.register.subtitle': 'Create your matrimony profile',
    'auth.name': 'Name',
    'auth.mobile': 'Mobile Number',
    'auth.password': 'Password',
    'auth.whose.profile': 'Whose Profile',
    'auth.otp.verification': 'OTP Verification',
    'auth.send.otp': 'Send OTP',
    'auth.verify': 'Verify',
    'auth.signin': 'Sign In',
    'auth.create.account': 'Create Account',
    'auth.no.account': "Don't have an account? Register here",
    'auth.have.account': 'Already have an account? Sign in',
    
    // Profile options
    'profile.self': 'Self',
    'profile.son': 'Son',
    'profile.daughter': 'Daughter',
    'profile.friend': 'Friend',
    'profile.relative': 'Relative',
    
    // Dashboard
    'dashboard.welcome': 'Welcome',
    'dashboard.find.partner': 'Find your perfect life partner from our community',
    'dashboard.find.match': 'Find Your Match',
    'dashboard.age.from': 'Age From',
    'dashboard.age.to': 'Age To',
    'dashboard.education': 'Education',
    'dashboard.location': 'Location',
    'dashboard.unlock.profile': 'Unlock Profile',
    'dashboard.view.profile': 'View Full Profile',
    'dashboard.common.interests': 'common interests',
    'dashboard.match': 'Match',
    
    // Profile Form
    'profile.personal.details': 'Personal Details',
    'profile.horoscope.details': 'Horoscope Details',
    'profile.physical.details': 'Physical Details',
    'profile.family.details': 'Family Details',
    'profile.contact.details': 'Contact Details',
    'profile.preferences.photos': 'Preferences & Photos',
    
    // Waiting Approval
    'approval.title': 'Account Under Review',
    'approval.message': 'Thank you for registering with Vettuva Gounder Matrimony. Your account is currently being reviewed by our admin team.',
    'approval.timeline': 'Expected Timeline: Your account will be reviewed within 24-48 hours.',
    
    // Admin
    'admin.dashboard': 'Admin Dashboard',
    'admin.manage': 'Manage user registrations and approvals',
    'admin.all.users': 'All Users',
    'admin.completed.profile': 'Profile Completed',
    'admin.incomplete.profile': 'Profile Incomplete',
    'admin.pending.approvals': 'Pending Approvals',
    'admin.approved.users': 'Approved Users',
    'admin.approve': 'Approve',
    'admin.reject': 'Reject',
    'admin.view': 'View',
    
    // Common
    'common.loading': 'Loading...',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.next': 'Next',
    'common.previous': 'Previous'
  },
  ta: {
    // Header
    'site.title': 'வெட்டுவ கவுண்டர் திருமண சேவை',
    'site.subtitle': 'வெட்டுவ கவுண்டர் திருமண சேவை',
    'header.logout': 'வெளியேறு',
    
    // Navigation
    'nav.dashboard': 'முகப்பு',
    'nav.profile': 'என் விவரம்',
    'nav.incomplete': 'முழுமையடையாத',
    
    // Auth
    'auth.welcome.back': 'மீண்டும் வரவேற்கிறோம்',
    'auth.join.community': 'எங்கள் சமூகத்தில் சேருங்கள்',
    'auth.signin.subtitle': 'உங்கள் வாழ்க்கைத் துணையைக் கண்டறிய உள்நுழையுங்கள்',
    'auth.register.subtitle': 'உங்கள் திருமண விவரத்தை உருவாக்குங்கள்',
    'auth.name': 'பெயர்',
    'auth.mobile': 'மொபைல் எண்',
    'auth.password': 'கடவுச்சொல்',
    'auth.whose.profile': 'யாருடைய விவரம்',
    'auth.otp.verification': 'OTP சரிபார்ப்பு',
    'auth.send.otp': 'OTP அனுப்பு',
    'auth.verify': 'சரிபார்',
    'auth.signin': 'உள்நுழை',
    'auth.create.account': 'கணக்கு உருவாக்கு',
    'auth.no.account': 'கணக்கு இல்லையா? இங்கே பதிவு செய்யுங்கள்',
    'auth.have.account': 'ஏற்கனவே கணக்கு உள்ளதா? உள்நுழையுங்கள்',
    
    // Profile options
    'profile.self': 'சுயம்',
    'profile.son': 'மகன்',
    'profile.daughter': 'மகள்',
    'profile.friend': 'நண்பர்',
    'profile.relative': 'உறவினர்',
    
    // Dashboard
    'dashboard.welcome': 'வரவேற்கிறோம்',
    'dashboard.find.partner': 'எங்கள் சமூகத்திலிருந்து உங்கள் சரியான வாழ்க்கைத் துணையைக் கண்டறியுங்கள்',
    'dashboard.find.match': 'உங்கள் பொருத்தத்தைக் கண்டறியுங்கள்',
    'dashboard.age.from': 'வயது முதல்',
    'dashboard.age.to': 'வயது வரை',
    'dashboard.education': 'கல்வி',
    'dashboard.location': 'இடம்',
    'dashboard.unlock.profile': 'விவரம் திற',
    'dashboard.view.profile': 'முழு விவரம் பார்',
    'dashboard.common.interests': 'பொதுவான ஆர்வங்கள்',
    'dashboard.match': 'பொருத்தம்',
    
    // Profile Form
    'profile.personal.details': 'தனிப்பட்ட விவரங்கள்',
    'profile.horoscope.details': 'ஜாதக விவரங்கள்',
    'profile.physical.details': 'உடல் விவரங்கள்',
    'profile.family.details': 'குடும்ப விவரங்கள்',
    'profile.contact.details': 'தொடர்பு விவரங்கள்',
    'profile.preferences.photos': 'விருப்பங்கள் & புகைப்படங்கள்',
    
    // Waiting Approval
    'approval.title': 'கணக்கு மதிப்பாய்வில்',
    'approval.message': 'வெட்டுவ கவுண்டர் திருமண சேவையில் பதிவு செய்ததற்கு நன்றி. உங்கள் கணக்கு தற்போது எங்கள் நிர்வாக குழுவால் மதிப்பாய்வு செய்யப்படுகிறது.',
    'approval.timeline': 'எதிர்பார்க்கப்படும் நேரம்: உங்கள் கணக்கு 24-48 மணி நேரத்திற்குள் மதிப்பாய்வு செய்யப்படும்.',
    
    // Admin
    'admin.dashboard': 'நிர்வாக பலகை',
    'admin.manage': 'பயனர் பதிவுகள் மற்றும் ஒப்புதல்களை நிர்வகிக்கவும்',
    'admin.all.users': 'அனைத்து பயனர்கள்',
    'admin.completed.profile': 'முழுமையான விவரம்',
    'admin.incomplete.profile': 'முழுமையடையாத விவரம்',
    'admin.pending.approvals': 'நிலுவையில் உள்ள ஒப்புதல்கள்',
    'admin.approved.users': 'ஒப்புதல் பெற்ற பயனர்கள்',
    'admin.approve': 'ஒப்புதல்',
    'admin.reject': 'நிராகரி',
    'admin.view': 'பார்',
    
    // Common
    'common.loading': 'ஏற்றுகிறது...',
    'common.save': 'சேமி',
    'common.cancel': 'ரத்து',
    'common.next': 'அடுத்து',
    'common.previous': 'முந்தைய'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ta'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};