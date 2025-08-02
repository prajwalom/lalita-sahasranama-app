import React, { useState, useMemo } from 'react';
import { 
  FlatList, 
  StyleSheet, 
  View, 
  ScrollView, 
  TouchableOpacity,
  RefreshControl 
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { NameCard, SearchBar } from '@/components/sahasranama';
import { lalitaSahasranama, categories, SahasranamaName } from '@/data/lalitaSahasranama';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';

export default function SahasranamaScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [refreshing, setRefreshing] = useState(false);
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const filteredNames = useMemo(() => {
    let filtered = lalitaSahasranama;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(name => name.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(name =>
        name.sanskrit.toLowerCase().includes(searchQuery.toLowerCase()) ||
        name.transliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
        name.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (name.significance && name.significance.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const onRefresh = async () => {
    setRefreshing(true);
    // You can add data refresh logic here
    setTimeout(() => setRefreshing(false), 1000);
  };

  const renderName = ({ item }: { item: SahasranamaName }) => (
    <NameCard name={item} />
  );

  const CategoryFilter = () => (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.categoryContainer}
      contentContainerStyle={styles.categoryContent}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.key}
          onPress={() => setSelectedCategory(category.key)}
          style={[
            styles.categoryButton,
            {
              backgroundColor: selectedCategory === category.key 
                ? colors.tint 
                : 'transparent',
              borderColor: colors.tint,
            }
          ]}
        >
          <ThemedText 
            style={[
              styles.categoryButtonText,
              {
                color: selectedCategory === category.key 
                  ? '#fff' 
                  : colors.tint
              }
            ]}
          >
            {category.label}
          </ThemedText>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.header}>Lalita Sahasranama</ThemedText>
      <ThemedText style={styles.subheader}>
        {filteredNames.length} of {lalitaSahasranama.length} names
      </ThemedText>
      
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search names, meanings..."
      />
      
      <CategoryFilter />
      
      <FlatList
        data={filteredNames}
        renderItem={renderName}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <ThemedText style={styles.emptyText}>
              {searchQuery ? 'No names found matching your search' : 'No names available'}
            </ThemedText>
          </View>
        }
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  categoryContainer: {
    maxHeight: 50,
  },
  categoryContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 8,
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  listContainer: {
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 16,
    opacity: 0.6,
    textAlign: 'center',
  },
});