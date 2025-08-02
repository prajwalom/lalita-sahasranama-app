import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FavoriteButton } from './FavoriteButton';
import { SahasranamaName } from '@/data/lalitaSahasranama';

interface NameCardProps {
  name: SahasranamaName;
  onPress?: () => void;
}

export const NameCard: React.FC<NameCardProps> = ({ name, onPress }) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.push(`/sahasranama/${name.id}`);
    }
  };

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

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <ThemedView style={styles.card}>
        <View style={styles.header}>
          <View style={styles.nameContainer}>
            <ThemedText style={styles.id}>#{name.id}</ThemedText>
            <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(name.category) }]}>
              <ThemedText style={styles.categoryText}>{name.category}</ThemedText>
            </View>
          </View>
          <FavoriteButton nameId={name.id} />
        </View>
        
        <ThemedText style={styles.sanskrit}>{name.sanskrit}</ThemedText>
        <ThemedText style={styles.transliteration}>{name.transliteration}</ThemedText>
        <ThemedText style={styles.meaning}>{name.meaning}</ThemedText>
        
        {name.significance && (
          <ThemedText style={styles.significance} numberOfLines={2}>
            {name.significance}
          </ThemedText>
        )}
      </ThemedView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 8,
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  id: {
    fontSize: 14,
    fontWeight: '600',
    opacity: 0.7,
    marginRight: 8,
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  sanskrit: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#8B4513',
  },
  transliteration: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  meaning: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
  significance: {
    fontSize: 14,
    opacity: 0.8,
    lineHeight: 20,
  },
});