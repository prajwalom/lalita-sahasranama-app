import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/hooks/useTheme';

interface LoadingScreenProps {
  onComplete?: () => void;
  duration?: number;
}

export default function LoadingScreen({ onComplete, duration = 2000 }: LoadingScreenProps) {
  const { colors } = useTheme();
  const [progress, setProgress] = useState(0);
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.8);
  const rotateAnim = new Animated.Value(0);
  const progressAnim = new Animated.Value(0);

  useEffect(() => {
    const animateIn = () => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 100,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.timing(progressAnim, {
          toValue: 1,
          duration: duration,
          useNativeDriver: false,
        }),
      ]).start();
    };

    const rotateAnimation = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      })
    );

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / (duration / 50));
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 50);

    const timer = setTimeout(() => {
      onComplete?.();
    }, duration);

    animateIn();
    rotateAnimation.start();

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
      rotateAnimation.stop();
    };
  }, [duration, onComplete]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <LinearGradient
        colors={['#FF6B35', '#8B5CF6', '#000000']}
        style={styles.gradientOverlay}
      />
      
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.logoContainer}>
          <Animated.View
            style={[
              styles.outerCircle,
              {
                borderColor: colors.primary,
                transform: [{ rotate: spin }],
              },
            ]}
          >
            <View style={[styles.innerCircle, { backgroundColor: colors.primary + '20' }]}>
              <Text style={[styles.omText, { color: colors.primary }]}>
                ॐ
              </Text>
            </View>
          </Animated.View>
        </View>

        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: colors.text }]}>
            श्री ललिता सहस्रनाम
          </Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            Śrī Lalitā Sahasranāma
          </Text>
          <View style={[styles.divider, { backgroundColor: colors.primary }]} />
        </View>

        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { backgroundColor: colors.border }]}>
            <Animated.View
              style={[
                styles.progressFill,
                {
                  backgroundColor: colors.primary,
                  width: progressAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0%', '100%'],
                  }),
                },
              ]}
            />
          </View>
          <Text style={[styles.progressText, { color: colors.textSecondary }]}>
            Loading... {Math.round(progress)}%
          </Text>
        </View>

        <View style={styles.blessingsContainer}>
          <Text style={[styles.blessing, { color: colors.primary }]}>
            माँ की कृपा आप पर सदा बनी रहे
          </Text>
          <Text style={[styles.blessingEn, { color: colors.textSecondary }]}>
            May the Mother's grace always be with you
          </Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.3,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 32,
    width: '100%',
  },
  logoContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  outerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  omText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 16,
  },
  divider: {
    width: 60,
    height: 2,
    borderRadius: 1,
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 32,
  },
  progressBar: {
    width: '80%',
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
  },
  blessingsContainer: {
    alignItems: 'center',
  },
  blessing: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  blessingEn: {
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});