import { useState, useEffect, createContext, useContext } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';

interface Theme {
  isDark: boolean;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    warning: string;
    error: string;
    gradient: string[];
  };
}

const lightTheme: Theme = {
  isDark: false,
  colors: {
    primary: '#FF6B35',
    secondary: '#6B46C1',
    accent: '#F59E0B',
    background: '#FFFFFF',
    surface: '#F8FAFC',
    text: '#1F2937',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    gradient: ['#FF6B35', '#6B46C1'],
  },
};

const darkTheme: Theme = {
  isDark: true,
  colors: {
    primary: '#FF6B35',
    secondary: '#8B5CF6',
    accent: '#FCD34D',
    background: '#111827',
    surface: '#1F2937',
    text: '#F9FAFB',
    textSecondary: '#D1D5DB',
    border: '#374151',
    success: '#34D399',
    warning: '#FBBF24',
    error: '#F87171',
    gradient: ['#FF6B35', '#8B5CF6'],
  },
};

export function useTheme() {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme()
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });

    return () => subscription?.remove();
  }, []);

  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  return { ...theme, toggleTheme };
}