import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    // TODO: Replace with actual API call to your backend
    // const response = await fetch('/api/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(credentials)
    // });
    // const data = await response.json();
    
    // Mock implementation - Backend should return user data with isAdmin boolean
    const mockUser = {
      id: '1',
      name: credentials.email.split('@')[0],
      email: credentials.email,
      isAdmin: credentials.email.includes('admin'), // Backend will determine this
      role: credentials.email.includes('admin') ? 'admin' : 'student', // Derived from isAdmin
      profileComplete: false,
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return mockUser;
  };

  const signup = async (userData) => {
    // TODO: Replace with actual API call to your backend
    // const response = await fetch('/api/auth/signup', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(userData)
    // });
    // const data = await response.json();
    
    // Mock implementation - By default, new signups are students
    // Admin accounts should be created through a separate admin panel or backend process
    const mockUser = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      isAdmin: false, // New signups are students by default
      role: 'student', // Derived from isAdmin
      profileComplete: false,
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return mockUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    updateProfile,
    isAuthenticated: !!user,
    isStudent: user?.role === 'student',
    isAdmin: user?.role === 'admin',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
