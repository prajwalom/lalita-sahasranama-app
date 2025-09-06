import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/useTheme';
import { dailyVerses } from '@/data/sahasranama';
import LoadingScreen from '@/components/LoadingScreen';
import { Book, Heart, Play, Star } from 'lucide-react-native';

export default function HomeTab() {
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [dailyVerse, setDailyVerse] = useState(dailyVerses[0]);

  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const verseIndex = dayOfYear % dailyVerses.length;
    setDailyVerse(dailyVerses[verseIndex]);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <LinearGradient
        colors={['#FF6B35', '#8B5CF6', '#000000']}
        style={styles.gradientOverlay}
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={[styles.logoPlaceholder, { borderColor: colors.primary }]}>
              <Text style={[styles.logoText, { color: colors.primary }]}>
                ॐ
              </Text>
            </View>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          <View style={[styles.welcomeCard, { backgroundColor: colors.surface }]}>
            <Text style={[styles.welcomeText, { color: colors.textSecondary }]}>
              Divine Mother's Blessings
            </Text>
            <Text style={[styles.mainTitle, { color: colors.text }]}>
              श्री ललिता सहस्रनाम
            </Text>
            <Text style={[styles.subtitle, { color: colors.primary }]}>
              Śrī Lalitā Sahasranāma
            </Text>
            <Text style={[styles.blessing, { color: colors.secondary }]}>
              माँ की कृपा सदा आप पर बनी रहे
            </Text>
          </View>

          <View style={[styles.verseCard, { backgroundColor: colors.surface }]}>
            <View style={styles.verseHeader}>
              <Star size={24} color={colors.accent} />
              <Text style={[styles.todayLabel, { color: colors.primary }]}>
                आज का पवित्र नाम
              </Text>
              <Star size={24} color={colors.accent} />
            </View>

            <View style={styles.verseContent}>
              <View style={[styles.sanskritContainer, { backgroundColor: colors.background }]}>
                <Text style={[styles.sanskrit, { color: colors.text }]}>
                  {dailyVerse.sanskrit}
                </Text>
              </View>
              
              <Text style={[styles.transliteration, { color: colors.textSecondary }]}>
                {dailyVerse.transliteration}
              </Text>

              <View style={styles.meanings}>
                <View style={styles.meaningRow}>
                  <Text style={[styles.meaningLabel, { color: colors.primary }]}>
                    हिंदी अर्थ:
                  </Text>
                  <Text style={[styles.meaning, { color: colors.text }]}>
                    {dailyVerse.meaningHindi}
                  </Text>
                </View>

                <View style={styles.meaningRow}>
                  <Text style={[styles.meaningLabel, { color: colors.secondary }]}>
                    English Meaning:
                  </Text>
                  <Text style={[styles.meaning, { color: colors.text }]}>
                    {dailyVerse.meaningEnglish}
                  </Text>
                </View>

                <View style={[styles.significanceContainer, { backgroundColor: colors.background }]}>
                  <Text style={[styles.significanceLabel, { color: colors.accent }]}>
                    Spiritual Significance:
                  </Text>
                  <Text style={[styles.significance, { color: colors.textSecondary }]}>
                    {dailyVerse.significance}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.featuresGrid, { backgroundColor: colors.surface }]}>
            <Text style={[styles.featuresTitle, { color: colors.text }]}>
              App Features
            </Text>
            <View style={styles.featuresRow}>
              <View style={styles.featureItem}>
                <Book size={32} color={colors.primary} />
                <Text style={[styles.featureText, { color: colors.text }]}>
                  Complete Namavali
                </Text>
              </View>
              <View style={styles.featureItem}>
                <Heart size={32} color={colors.error} />
                <Text style={[styles.featureText, { color: colors.text }]}>
                  Detailed Meanings
                </Text>
              </View>
              <View style={styles.featureItem}>
                <Play size={32} color={colors.secondary} />
                <Text style={[styles.featureText, { color: colors.text }]}>
                  Auto-scroll Mode
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.infoCard, { backgroundColor: colors.surface }]}>
            <Text style={[styles.infoTitle, { color: colors.text }]}>
              About Lalita Sahasranama
            </Text>
            <Text style={[styles.infoText, { color: colors.textSecondary }]}>
              The Lalita Sahasranama contains 1000 sacred names of Goddess Lalita. Regular recitation brings peace, prosperity, and spiritual growth.
            </Text>
            
            <View style={styles.benefitsContainer}>
              <Text style={[styles.benefitsTitle, { color: colors.primary }]}>
                Benefits of Daily Recitation:
              </Text>
              <Text style={[styles.benefitItem, { color: colors.textSecondary }]}>
                • Purifies the mind and heart
              </Text>
              <Text style={[styles.benefitItem, { color: colors.textSecondary }]}>
                • Brings inner peace and tranquility
              </Text>
              <Text style={[styles.benefitItem, { color: colors.textSecondary }]}>
                • Enhances spiritual growth
              </Text>
              <Text style={[styles.benefitItem, { color: colors.textSecondary }]}>
                • Removes obstacles and negativity
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF6B35',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  welcomeCard: {
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#FF6B35',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  welcomeText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 8,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 12,
  },
  blessing: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  verseCard: {
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  verseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  todayLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 12,
  },
  verseContent: {
    alignItems: 'center',
  },
  sanskritContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#FCD34D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  sanskrit: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 32,
  },
  transliteration: {
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 24,
  },
  meanings: {
    width: '100%',
  },
  meaningRow: {
    marginBottom: 16,
  },
  meaningLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  meaning: {
    fontSize: 15,
    lineHeight: 22,
  },
  significanceContainer: {
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
    shadowColor: '#FCD34D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  significanceLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  significance: {
    fontSize: 14,
    lineHeight: 20,
    fontStyle: 'italic',
  },
  featuresGrid: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#FF6B35',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  featureItem: {
    alignItems: 'center',
    flex: 1,
  },
  featureText: {
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
    fontWeight: '600',
  },
  infoCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },
  benefitsContainer: {
    marginTop: 8,
  },
  benefitsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  benefitItem: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 4,
  },
});