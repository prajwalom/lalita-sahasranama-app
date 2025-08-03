import { StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/ui';

export default function HomeScreen() {
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          onPress: () => router.replace('/(auth)/login')
        }
      ]
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.welcome}>Welcome to</ThemedText>
      <ThemedText style={styles.title}>Lalita Sashrname</ThemedText>
      <ThemedText style={styles.subtitle}>
        You're successfully logged in!
      </ThemedText>
      
      <Button
        title="Logout"
        variant="outline"
        onPress={handleLogout}
        style={styles.logoutButton}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcome: {
    fontSize: 24,
    marginBottom: 8,
    opacity: 0.7,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
    opacity: 0.7,
  },
  logoutButton: {
    marginTop: 20,
    minWidth: 120,
  },
});