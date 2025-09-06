import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Heart } from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';
import { lalitaSahasranama } from '@/data/sahasranama';
import LoadingScreen from '@/components/LoadingScreen';

export default function NamavaliTab() {
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredVerses = lalitaSahasranama.filter(verse =>
    verse.sanskrit.toLowerCase().includes(searchQuery.toLowerCase()) ||
    verse.transliteration.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  const renderVerseItem = ({ item }: { item: typeof lalitaSahasranama[0] }) => (
    <View style={[styles.verseItem, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <View style={styles.verseHeader}>
        <Text style={[styles.verseNumber, { color: colors.primary }]}>
          {item.id}
        </Text>
        <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
          <Heart
            size={20}
            color={favorites.has(item.id) ? colors.error : colors.textSecondary}
            fill={favorites.has(item.id) ? colors.error : 'transparent'}
          />
        </TouchableOpacity>
      </View>
      <Text style={[styles.sanskrit, { color: colors.text }]}>
        {item.sanskrit}
      </Text>
      <Text style={[styles.transliteration, { color: colors.textSecondary }]}>
        {item.transliteration}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>
            नामावली
          </Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            Sacred Names Collection
          </Text>
        </View>

        <View style={[styles.searchContainer, { backgroundColor: colors.surface }]}>
          <Search size={20} color={colors.textSecondary} />
          <TextInput
            style={[styles.searchInput, { color: colors.text }]}
            placeholder="Search names..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <FlatList
          data={filteredVerses}
          renderItem={renderVerseItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={10}
          removeClippedSubviews={true}
          getItemLayout={(data, index) => ({
            length: 120,
            offset: 120 * index,
            index,
          })}
        />
      </SafeAreaView>
    </View>
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
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 4,
    fontStyle: 'italic',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: '#FF6B35',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  listContent: {
    paddingBottom: 100,
  },
  verseItem: {
    marginHorizontal: 16,
    marginVertical: 6,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  verseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  verseNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sanskrit: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  transliteration: {
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});