import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/hooks/useTheme';
import { inspirationalQuotes } from '@/data/sahasranama';

interface LoadingScreenProps {
  onComplete?: () => void;
  duration?: number;
}

export default function LoadingScreen({ onComplete, duration = 4000 }: LoadingScreenProps) {
  const { colors } = useTheme();
  const [currentQuote, setCurrentQuote] = useState(0);
  const [progress, setProgress] = useState(0);
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.8);
  const rotateAnim = new Animated.Value(0);
  const pulseAnim = new Animated.Value(1);
  const progressAnim = new Animated.Value(0);

  useEffect(() => {
    const animateIn = () => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
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

    // Continuous rotation animation
    const rotateAnimation = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: true,
      })
    );

    // Pulse animation
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    );

    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 2500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / (duration / 100));
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 100);

    const timer = setTimeout(() => {
      onComplete?.();
    }, duration);

    animateIn();
    rotateAnimation.start();
    pulseAnimation.start();

    return () => {
      clearInterval(quoteInterval);
      clearInterval(progressInterval);
      clearTimeout(timer);
      rotateAnimation.stop();
      pulseAnimation.stop();
    };
  }, [duration, onComplete]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <LinearGradient
        colors={[colors.primary + '20', colors.secondary + '20', colors.accent + '20']}
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
                transform: [{ rotate: spin }, { scale: pulseAnim }],
              },
            ]}
          >
            <View style={[styles.innerCircle, { backgroundColor: colors.primary + '30' }]}>
              <Text style={[styles.omText, { color: colors.primary }]}>
                ॐ
              </Text>
            </View>
          </Animated.View>
          
          <View style={styles.decorativeElements}>
            <View style={[styles.dot, { backgroundColor: colors.secondary }]} />
            <View style={[styles.dot, { backgroundColor: colors.accent }]} />
            <View style={[styles.dot, { backgroundColor: colors.primary }]} />
          </View>
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
        
        <View style={[styles.quoteContainer, { backgroundColor: colors.surface }]}>
          <View style={[styles.quoteIcon, { backgroundColor: colors.primary }]}>
            <Text style={[styles.quoteSymbol, { color: colors.background }]}>
              "
            </Text>
          </View>
          <Text style={[styles.quote, { color: colors.text }]}>
            {inspirationalQuotes[currentQuote]}
          </Text>
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
            {Math.round(progress)}% Complete
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
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 32,
    width: '100%',
  },
  logoContainer: {
    marginBottom: 40,
    alignItems: 'center',
    position: 'relative',
  },
  outerCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
  },
  innerCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  omText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  decorativeElements: {
    position: 'absolute',
    top: -10,
    right: -10,
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 16,
  },
  divider: {
    width: 60,
    height: 3,
    borderRadius: 2,
  },
  quoteContainer: {
    marginBottom: 32,
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderRadius: 16,
    minHeight: 100,
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  quoteIcon: {
    position: 'absolute',
    top: -10,
    left: 20,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteSymbol: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quote: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    fontStyle: 'italic',
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 32,
  },
  progressBar: {
    width: '80%',
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
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