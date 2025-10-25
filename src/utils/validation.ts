export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateMobile = (mobile: string): boolean => {
  const mobileRegex = /^[6-9]\d{9}$/;
  return mobileRegex.test(mobile);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2;
};

export const validateAge = (dateOfBirth: string): boolean => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1 >= 18;
  }
  
  return age >= 18;
};

export const calculateCompatibilityScore = (profile1: any, profile2: any): number => {
  let score = 0;
  let totalCriteria = 0;

  const criteria = [
    { field: 'education', weight: 20 },
    { field: 'job', weight: 15 },
    { field: 'native', weight: 15 },
    { field: 'kulam', weight: 20 },
    { field: 'rassi', weight: 10 },
    { field: 'dosham', weight: 20 }
  ];

  criteria.forEach(({ field, weight }) => {
    totalCriteria += weight;
    if (profile1[field] && profile2[field]) {
      if (profile1[field].toLowerCase().includes(profile2[field].toLowerCase()) ||
          profile2[field].toLowerCase().includes(profile1[field].toLowerCase())) {
        score += weight;
      }
    }
  });

  return Math.round((score / totalCriteria) * 100);
};