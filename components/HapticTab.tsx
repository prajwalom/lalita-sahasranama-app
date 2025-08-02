import { Pressable } from 'react-native';
import * as Haptics from 'expo-haptics';

type HapticTabProps = {
  children: React.ReactNode;
  onPress?: () => void;
  style?: any;
};

export function HapticTab({ children, onPress, style }: HapticTabProps) {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress?.();
  };

  return (
    <Pressable style={style} onPress={handlePress}>
      {children}
    </Pressable>
  );
}