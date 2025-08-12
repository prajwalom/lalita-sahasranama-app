import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Heart } from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';
import { Verse } from '@/data/sahasranama';

interface VerseCardProps {
  verse: Verse;
  onFavorite?: (id: number) => void;
  isFavorite?: boolean;
  showMeaning?: boolean;
}

export default function VerseCard({ 
  verse, 
  onFavorite, 
  isFavorite = false, 
  showMeaning = false 
}: VerseCardProps) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <View style={styles.header}>
        <Text style={[styles.number, { color: colors.primary }]}>
          {verse.id}
        </Text>
        {onFavorite && (
          <TouchableOpacity onPress={() => onFavorite(verse.id)}>
            <Heart
              size={24}
              color={isFavorite ? colors.error : colors.textSecondary}
              fill={isFavorite ? colors.error : 'transparent'}
            />
          </TouchableOpacity>
        )}
      </View>

      <Text style={[styles.sanskrit, { color: colors.text }]}>
        {verse.sanskrit}
      </Text>
      
      <Text style={[styles.transliteration, { color: colors.textSecondary }]}>
        {verse.transliteration}
      </Text>

      {showMeaning && (
        <View style={styles.meaningContainer}>
          <Text style={[styles.meaningLabel, { color: colors.primary }]}>
            हिंदी अर्थ:
          </Text>
          <Text style={[styles.meaning, { color: colors.text }]}>
            {verse.meaningHindi}
          </Text>
          
          <Text style={[styles.meaningLabel, { color: colors.secondary, marginTop: 12 }]}>
            English Meaning:
          </Text>
          <Text style={[styles.meaning, { color: colors.text }]}>
            {verse.meaningEnglish}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sanskrit: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 32,
  },
  transliteration: {
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 16,
  },
  meaningContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  meaningLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  meaning: {
    fontSize: 15,
    lineHeight: 22,
  },
});