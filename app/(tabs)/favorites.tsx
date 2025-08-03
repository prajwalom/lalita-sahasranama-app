import React from 'react';
import { ScrollView, StyleSheet, View, Share, Alert } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/ui';
import { FavoriteButton } from '@/components/sahasranama';
import { lalitaSahasranama } from '@/data/lalitaSahasranama';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';

export default function NameDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  
  const name = lalitaSahasranama.find(n => n.id.toString() === id);

  if (!name) {
    return (
      <ThemedView style={styles.centerContainer}>
        <ThemedText style={styles.errorText}>Name not found</ThemedText>
        <Button
          title="Go Back"
          onPress={() => router.back()}
          style={styles.backButton}
        />
      </ThemedView>
    );
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      form: '#FF6B6B',
      attributes: '#4ECDC4',
      powers: '#45B7D1',
      abode: '#96CEB4',
      devotion: '#FFEAA7',
      cosmic: '#DDA0DD',
    };
    return colors[category as keyof typeof colors] || '#95A5A6';
  };

  const shareContent = async () => {
    try {
      await Share.share({
        message: `${name.sanskrit} (${name.transliteration})\n\n${name.meaning}\n\n${name.significance || ''}\n\nFrom Lalita Sahasranama App`,
        title: name.transliteration,
      });
    } catch (error) {
      Alert.alert('Error', 'Could not share this content');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <ThemedText style={styles.id}>#{name.id}</ThemedText>
            <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(name.category) }]}>
              <ThemedText style={styles.categoryText}>{name.category}</ThemedText>
            </View>
          </View>
          <FavoriteButton nameId={name.id} size={28} />
        </View>

        <ThemedText style={styles.sanskrit}>{name.sanskrit}</ThemedText>
        <ThemedText style={styles.transliteration}>{name.transliteration}</ThemedText>
        
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Meaning</ThemedText>
          <ThemedText style={styles.meaning}>{name.meaning}</ThemedText>
        </View>

        {name.significance && (
          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Significance</ThemedText>
            <ThemedText style={styles.significance}>{name.significance}</ThemedText>
          </View>
        )}

        <View style={styles.actions}>
          <Button
            title="Share"
            onPress={shareContent}
            variant="outline"
            style={styles.actionButton}
          />
          <Button
            title="Back to List"
            onPress={() => router.back()}
            style={styles.actionButton}
          />
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  id: {
    fontSize: 18,
    fontWeight: '600',
    opacity: 0.7,
    marginRight: 12,
  },
  categoryBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    textTransform: 'capitalize',
  },
  sanskrit: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: '#8B4513',
    lineHeight: 44,
  },
  transliteration: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
    fontStyle: 'italic',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: Colors.light.tint,
  },
  meaning: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '500',
  },
  significance: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.9,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    gap: 12,
  },
  actionButton: {
    flex: 1,
  },
  errorText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  backButton: {
    minWidth: 120,
  },
});