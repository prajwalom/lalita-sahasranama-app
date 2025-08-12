import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Play, Pause, SkipForward, SkipBack, Settings } from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';
import { verseGroups } from '@/data/sahasranama';
import LoadingScreen from '@/components/LoadingScreen';

export default function AutoScrollTab() {
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(3);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const flatListRef = useRef<FlatList>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const speedOptions = [2, 3, 4, 5];
  const playbackOptions = [0.5, 1, 1.5, 2];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % verseGroups.length;
          flatListRef.current?.scrollToIndex({
            index: nextIndex,
            animated: true,
          });
          return nextIndex;
        });
      }, (scrollSpeed * 1000) / playbackSpeed);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, scrollSpeed, playbackSpeed]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const skipNext = () => {
    const nextIndex = (currentIndex + 1) % verseGroups.length;
    setCurrentIndex(nextIndex);
    flatListRef.current?.scrollToIndex({
      index: nextIndex,
      animated: true,
    });
  };

  const skipPrevious = () => {
    const prevIndex = currentIndex === 0 ? verseGroups.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    flatListRef.current?.scrollToIndex({
      index: prevIndex,
      animated: true,
    });
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  const renderVerseGroup = ({ item }: { item: typeof verseGroups[0] }) => (
    <View style={[styles.verseGroupContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <View style={styles.groupHeader}>
        <Text style={[styles.groupNumber, { color: colors.primary }]}>
          श्लोक {item.groupNumber}
        </Text>
        <Text style={[styles.groupNumberEn, { color: colors.secondary }]}>
          Verse {item.groupNumber}
        </Text>
      </View>

      <View style={[styles.sanskritContainer, { backgroundColor: colors.background }]}>
        <Text style={[styles.groupSanskrit, { color: colors.text }]}>
          {item.groupSanskrit}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, { color: colors.text }]}>
              स्वचालित पाठ
            </Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              Auto-scroll Recitation
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.settingsButton, { backgroundColor: colors.surface }]}
            onPress={() => setShowSettings(!showSettings)}
          >
            <Settings size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>

        {showSettings && (
          <View style={[styles.settingsPanel, { backgroundColor: colors.surface }]}>
            <Text style={[styles.settingsTitle, { color: colors.text }]}>
              Recitation Settings
            </Text>
            
            <Text style={[styles.settingsSubtitle, { color: colors.textSecondary }]}>
              Verse Duration (seconds)
            </Text>
            <View style={styles.speedOptions}>
              {speedOptions.map((speed) => (
                <TouchableOpacity
                  key={speed}
                  style={[
                    styles.speedOption,
                    { 
                      backgroundColor: scrollSpeed === speed ? colors.primary : colors.background,
                      borderColor: colors.border,
                    }
                  ]}
                  onPress={() => setScrollSpeed(speed)}
                >
                  <Text style={[
                    styles.speedText,
                    { color: scrollSpeed === speed ? colors.background : colors.text }
                  ]}>
                    {speed}s
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={[styles.settingsSubtitle, { color: colors.textSecondary, marginTop: 16 }]}>
              Playback Speed
            </Text>
            <View style={styles.speedOptions}>
              {playbackOptions.map((speed) => (
                <TouchableOpacity
                  key={speed}
                  style={[
                    styles.speedOption,
                    { 
                      backgroundColor: playbackSpeed === speed ? colors.secondary : colors.background,
                      borderColor: colors.border,
                    }
                  ]}
                  onPress={() => setPlaybackSpeed(speed)}
                >
                  <Text style={[
                    styles.speedText,
                    { color: playbackSpeed === speed ? colors.background : colors.text }
                  ]}>
                    {speed}x
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        <FlatList
          ref={flatListRef}
          data={verseGroups}
          renderItem={renderVerseGroup}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          getItemLayout={(data, index) => ({
            length: 400,
            offset: 400 * index,
            index,
          })}
        />

        <View style={[styles.controls, { backgroundColor: colors.surface }]}>
          <TouchableOpacity
            style={[styles.controlButton, { backgroundColor: colors.background }]}
            onPress={skipPrevious}
          >
            <SkipBack size={24} color={colors.primary} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.playButton, { backgroundColor: colors.primary }]}
            onPress={togglePlayPause}
          >
            {isPlaying ? (
              <Pause size={32} color={colors.background} />
            ) : (
              <Play size={32} color={colors.background} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.controlButton, { backgroundColor: colors.background }]}
            onPress={skipNext}
          >
            <SkipForward size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.progressInfo}>
          <Text style={[styles.progressText, { color: colors.textSecondary }]}>
            Verse {currentIndex + 1} of {verseGroups.length}
          </Text>
          <Text style={[styles.speedInfo, { color: colors.textSecondary }]}>
            {scrollSpeed}s per verse • {playbackSpeed}x speed
          </Text>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  titleContainer: {
    flex: 1,
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
  settingsButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  settingsPanel: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  settingsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  settingsSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 12,
    textAlign: 'center',
  },
  speedOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  speedOption: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    minWidth: 60,
    alignItems: 'center',
  },
  speedText: {
    fontSize: 14,
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: 200,
  },
  verseGroupContainer: {
    margin: 16,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  groupHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  groupNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  groupNumberEn: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 2,
  },
  sanskritContainer: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  groupSanskrit: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 28,
  },
  controls: {
    position: 'absolute',
    bottom: 100,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  controlButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  playButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  progressInfo: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
  },
  speedInfo: {
    fontSize: 12,
    marginTop: 4,
  },
});