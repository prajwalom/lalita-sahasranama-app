import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Colors } from '@/constants/Colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'outline' | 'text';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
  textStyle,
}) => {
  const getButtonStyle = () => {
    const baseStyle = [styles.button, style];
    switch (variant) {
      case 'outline':
        return [...baseStyle, styles.outlineButton];
      case 'text':
        return [...baseStyle, styles.textButton];
      default:
        return [...baseStyle, styles.primaryButton];
    }
  };

  const getTextStyle = () => {
    const baseStyle = [styles.buttonText, textStyle];
    switch (variant) {
      case 'outline':
        return [...baseStyle, styles.outlineButtonText];
      case 'text':
        return [...baseStyle, styles.textButtonText];
      default:
        return [...baseStyle, styles.primaryButtonText];
    }
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={getTextStyle()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  primaryButton: {
    backgroundColor: Colors.light.tint,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.light.tint,
  },
  textButton: {
    backgroundColor: 'transparent',
  },
  disabledButton: {
    backgroundColor: Colors.light.tabIconDefault,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryButtonText: {
    color: '#fff',
  },
  outlineButtonText: {
    color: Colors.light.tint,
  },
  textButtonText: {
    color: Colors.light.tint,
  },
});