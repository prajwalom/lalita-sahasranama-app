import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { NameCard } from '@/components/sahasranama';
import { lalitaSahasranama, SahasranamaName } from '@/data/lalitaSahasranama';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';

export default function FavoritesScreen() {
  const [favoriteNames, setFavoriteNames] = useState<SahasranamaName[]>([]);
  const [loading, setLoading] = useState(true);
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const loadFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      if (favorites) {
        const favIds = JSON.parse(favorites);
        const favNames = lalitaSahasranama.filter(name => 
          favIds.includes(name.id)
        );
        setFavoriteNames(favNames);
      } else {
        setFavoriteNames([]);
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
      setFavoriteNames([]);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  );

  const renderName = ({ item }: { item: SahasranamaName }) => (
    <NameCard name={item} />
  );

  if (loading) {
    return (
      <ThemedView style={styles.centerContainer}>
        <ThemedText>Loading favorites...</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.header}>Favorite Names</ThemedText>
      
      {favoriteNames.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons 
            name="heart-outline" 
            size={64} 
            color={colors.tabIconDefault}
            style={styles.emptyIcon}
          />
          <ThemedText style={styles.emptyTitle}>No Favorites Yet</ThemedText>
          <ThemedText style={styles.emptyText}>
            Tap the heart icon on any name to add it to your favorites
          </ThemedText>
        </View>
      ) : (
        <>
          <ThemedText style={styles.subheader}>
            {favoriteNames.length} favorite name{favoriteNames.length !== 1 ? 's' : ''}
          </ThemedText>
          <FlatList
            data={favoriteNames}
            renderItem={renderName}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
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
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 8,
  },
  subheader: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyIcon: {
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
    lineHeight: 24,
  },
});