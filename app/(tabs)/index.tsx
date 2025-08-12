import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/useTheme';
import { dailyVerses } from '@/data/sahasranama';
import ThemeToggle from '@/components/ThemeToggle';
import LoadingScreen from '@/components/LoadingScreen';

export default function HomeTab() {
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [dailyVerse, setDailyVerse] = useState(dailyVerses[0]);

  useEffect(() => {
    // Select daily verse based on current date
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const verseIndex = dayOfYear % dailyVerses.length;
    setDailyVerse(dailyVerses[verseIndex]);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <LinearGradient
      colors={colors.gradient}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            {/* Logo placeholder - you can add your logo here */}
            <View style={[styles.logoPlaceholder, { borderColor: colors.primary }]}>
              <Text style={[styles.logoText, { color: colors.primary }]}>
                ॐ
              </Text>
            </View>
          </View>
          <ThemeToggle />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          {/* Welcome Section */}
          <View style={[styles.welcomeCard, { backgroundColor: colors.surface }]}>
            <Text style={[styles.welcomeText, { color: colors.textSecondary }]}>
              From Prajwal to Divine Mother
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

          {/* Daily Verse Section */}
          <View style={[styles.verseCard, { backgroundColor: colors.surface }]}>
            <View style={styles.verseHeader}>
              <Text style={[styles.todayLabel, { color: colors.primary }]}>
                आज का पवित्र नाम
              </Text>
              <Text style={[styles.todayLabelEn, { color: colors.secondary }]}>
                Today's Sacred Name
              </Text>
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

          {/* About Section */}
          <View style={[styles.infoCard, { backgroundColor: colors.surface }]}>
            <Text style={[styles.infoTitle, { color: colors.text }]}>
              About Lalita Sahasranama
            </Text>
            <Text style={[styles.infoText, { color: colors.textSecondary }]}>
              The Lalita Sahasranama contains 1000 sacred names of Goddess Lalita, each carrying profound spiritual significance. Regular recitation brings peace, prosperity, and spiritual growth.
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

          {/* Navigation Guide */}
          <View style={[styles.guideCard, { backgroundColor: colors.accent }]}>
            <Text style={[styles.guideTitle, { color: colors.background }]}>
              How to Use This App
            </Text>
            <Text style={[styles.guideText, { color: colors.background }]}>
              Navigate through the tabs below to explore the complete Namavali, detailed meanings, and auto-scroll feature for guided recitation.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  welcomeText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 8,
  },
  mainTitle: {
    fontSize: 32,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  verseHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  todayLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  todayLabelEn: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 4,
    fontStyle: 'italic',
  },
  verseContent: {
    alignItems: 'center',
  },
  sanskritContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  sanskrit: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 36,
  },
  transliteration: {
    fontSize: 18,
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
    fontSize: 16,
    lineHeight: 24,
  },
  significanceContainer: {
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  significanceLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  significance: {
    fontSize: 15,
    lineHeight: 22,
    fontStyle: 'italic',
  },
  infoCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    lineHeight: 24,
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
  guideCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
    alignItems: 'center',
  },
  guideTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  guideText: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },
});