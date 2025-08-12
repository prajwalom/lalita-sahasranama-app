import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Play, Heart, Star, Sparkles } from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';
import LoadingScreen from '@/components/LoadingScreen';

export default function VisualizationTab() {
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const videoUrl = "https://youtu.be/YUWypiBs6xk?si=eXxAw10mXc7mcDyt";

  const openVideo = async () => {
    try {
      await Linking.openURL(videoUrl);
    } catch (error) {
      console.error('Error opening video:', error);
    }
  };

  const benefits = [
    {
      icon: <Heart size={24} color={colors.error} />,
      title: "Purifies the Heart",
      description: "Visualization of the Divine Mother cleanses the heart of negative emotions and fills it with divine love."
    },
    {
      icon: <Star size={24} color={colors.accent} />,
      title: "Enhances Concentration",
      description: "Focusing on the Mother's divine form improves concentration and makes the recitation more effective."
    },
    {
      icon: <Sparkles size={24} color={colors.secondary} />,
      title: "Awakens Devotion",
      description: "Seeing the Mother's beautiful form naturally awakens deep devotion and surrender in the devotee's heart."
    }
  ];

  const visualizationSteps = [
    "Find a quiet, clean space and sit comfortably facing east or north",
    "Light a lamp or candle and offer flowers if available",
    "Close your eyes and take three deep breaths to center yourself",
    "Visualize the Divine Mother seated on a golden throne",
    "See Her radiant form with four arms, holding sacred objects",
    "Feel Her compassionate gaze blessing you with love and protection",
    "Hold this divine image in your heart throughout the recitation"
  ];

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <LinearGradient
      colors={colors.gradient}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          <View style={styles.header}>
            <Text style={[styles.title, { color: colors.text }]}>
              माँ का ध्यान
            </Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              Divine Mother Visualization
            </Text>
          </View>

          <View style={[styles.card, { backgroundColor: colors.surface }]}>
            <Text style={[styles.cardTitle, { color: colors.primary }]}>
              Why Visualize Before Recitation?
            </Text>
            <Text style={[styles.description, { color: colors.text }]}>
              Before beginning the sacred recitation of Lalita Sahasranama, it is traditional and highly beneficial to first visualize the Divine Mother. This practice, known as Dhyana, prepares the mind and heart for deeper spiritual connection.
            </Text>
            <Text style={[styles.sanskrit, { color: colors.secondary }]}>
              "ध्यानमूलं गुरोर्मूर्तिः पूजामूलं गुरोः पदम्।"
            </Text>
            <Text style={[styles.translation, { color: colors.textSecondary }]}>
              "Meditation is rooted in the Guru's form, worship is rooted in the Guru's feet."
            </Text>
          </View>

          <View style={[styles.card, { backgroundColor: colors.surface }]}>
            <Text style={[styles.cardTitle, { color: colors.primary }]}>
              Sacred Visualization Video
            </Text>
            <Text style={[styles.description, { color: colors.text }]}>
              Watch this beautiful visualization of the Divine Mother to prepare your mind and heart for the sacred recitation.
            </Text>
            
            <TouchableOpacity
              style={[styles.videoButton, { backgroundColor: colors.primary }]}
              onPress={openVideo}
            >
              <Play size={24} color={colors.background} />
              <Text style={[styles.videoButtonText, { color: colors.background }]}>
                Watch Divine Mother Visualization
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.card, { backgroundColor: colors.surface }]}>
            <Text style={[styles.cardTitle, { color: colors.primary }]}>
              Benefits of Visualization
            </Text>
            {benefits.map((benefit, index) => (
              <View key={index} style={styles.benefitItem}>
                <View style={styles.benefitIcon}>
                  {benefit.icon}
                </View>
                <View style={styles.benefitContent}>
                  <Text style={[styles.benefitTitle, { color: colors.text }]}>
                    {benefit.title}
                  </Text>
                  <Text style={[styles.benefitDescription, { color: colors.textSecondary }]}>
                    {benefit.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <View style={[styles.card, { backgroundColor: colors.surface }]}>
            <Text style={[styles.cardTitle, { color: colors.primary }]}>
              How to Visualize
            </Text>
            {visualizationSteps.map((step, index) => (
              <View key={index} style={styles.stepItem}>
                <View style={[styles.stepNumber, { backgroundColor: colors.primary }]}>
                  <Text style={[styles.stepNumberText, { color: colors.background }]}>
                    {index + 1}
                  </Text>
                </View>
                <Text style={[styles.stepText, { color: colors.text }]}>
                  {step}
                </Text>
              </View>
            ))}
          </View>

          <View style={[styles.card, { backgroundColor: colors.surface }]}>
            <Text style={[styles.cardTitle, { color: colors.secondary }]}>
              Divine Mother's Form
            </Text>
            <Text style={[styles.description, { color: colors.text }]}>
              Visualize the Divine Mother as described in the scriptures:
            </Text>
            <Text style={[styles.formDescription, { color: colors.textSecondary }]}>
              • Seated on a golden throne supported by Brahma, Vishnu, Shiva, and Indra{'\n'}
              • Radiant like the rising sun, with a complexion of molten gold{'\n'}
              • Four arms holding a noose, goad, sugarcane bow, and flowery arrows{'\n'}
              • Adorned with precious gems and divine ornaments{'\n'}
              • Eyes filled with compassion and motherly love{'\n'}
              • Surrounded by divine light and celestial fragrance
            </Text>
          </View>

          <View style={[styles.finalCard, { backgroundColor: colors.accent }]}>
            <Text style={[styles.finalMessage, { color: colors.background }]}>
              "After visualization, begin the sacred recitation with complete devotion. The Mother's grace will guide you through each holy name."
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
  content: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 4,
    fontStyle: 'italic',
  },
  card: {
    marginHorizontal: 16,
    marginBottom: 20,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  sanskrit: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  translation: {
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  videoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 12,
  },
  videoButtonText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  benefitItem: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  benefitIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  benefitContent: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  benefitDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  stepItem: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  stepNumberText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  stepText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
  },
  formDescription: {
    fontSize: 15,
    lineHeight: 24,
    marginTop: 8,
  },
  finalCard: {
    marginHorizontal: 16,
    marginBottom: 32,
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
  },
  finalMessage: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 24,
  },
});