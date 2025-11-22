import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  neonPurple: {
    name: 'Neon Purple',
    primary: '#8B5CF6',
    secondary: '#A78BFA',
    accent: '#C4B5FD',
    gradient: 'from-purple-600 to-pink-600'
  },
  sunsetOrange: {
    name: 'Sunset Orange',
    primary: '#F59E0B',
    secondary: '#FBBF24',
    accent: '#FCD34D',
    gradient: 'from-orange-500 to-red-500'
  },
  cyberBlue: {
    name: 'Cyber Blue',
    primary: '#3B82F6',
    secondary: '#60A5FA',
    accent: '#93C5FD',
    gradient: 'from-blue-600 to-cyan-600'
  },
  emeraldGreen: {
    name: 'Emerald Green',
    primary: '#10B981',
    secondary: '#34D399',
    accent: '#6EE7B7',
    gradient: 'from-green-500 to-teal-500'
  },
  minimalWhite: {
    name: 'Minimal White',
    primary: '#6B7280',
    secondary: '#9CA3AF',
    accent: '#D1D5DB',
    gradient: 'from-gray-400 to-gray-600'
  }
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('neonPurple');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedMode = localStorage.getItem('darkMode');
    
    if (savedTheme) setCurrentTheme(savedTheme);
    if (savedMode) setIsDark(savedMode === 'true');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('darkMode', isDark);
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
    const theme = themes[currentTheme];
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--accent-color', theme.accent);
  }, [currentTheme]);

  const toggleDarkMode = () => setIsDark(!isDark);
  const changeTheme = (themeName) => setCurrentTheme(themeName);

  return (
    <ThemeContext.Provider value={{
      isDark,
      currentTheme,
      theme: themes[currentTheme],
      toggleDarkMode,
      changeTheme,
      themes
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};