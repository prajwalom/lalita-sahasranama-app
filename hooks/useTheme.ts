import { useState, useEffect } from 'react';
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

const darkTheme: Theme = {
  isDark: true,
  colors: {
    primary: '#FF6B35',
    secondary: '#8B5CF6',
    accent: '#FCD34D',
    background: '#000000',
    surface: '#1A1A1A',
    text: '#FFFFFF',
    textSecondary: '#B0B0B0',
    border: '#333333',
    success: '#00FF88',
    warning: '#FFB800',
    error: '#FF4444',
    gradient: ['#FF6B35', '#8B5CF6', '#000000'],
  },
};

export function useTheme() {
  const [colorScheme] = useState<ColorSchemeName>('dark');

  // Always return dark theme for consistent black background
  const theme = darkTheme;

  const toggleTheme = () => {
    // Keep dark theme always
  };

  return { ...theme, toggleTheme };
}