import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Login from '../(auth)/login';
import Register from '../(auth)/register';
import FoodList from './foodList';

export default function Index() {
  const [screen, setScreen] = useState('login');

  return (
    <ThemedView style={styles.container}>

      {/* Toggle Buttons */}
      <ThemedView style={styles.toggleContainer}>

        {/* Login */}
        <TouchableOpacity 
          style={[styles.toggleButton, screen === 'login' && styles.activeTab]} 
          onPress={() => setScreen('login')}
        >
          <ThemedText style={screen === 'login' ? styles.activeText : styles.inactiveText}>
            Login
          </ThemedText>
        </TouchableOpacity>

        {/* Register */}
        <TouchableOpacity 
          style={[styles.toggleButton, screen === 'register' && styles.activeTab]} 
          onPress={() => setScreen('register')}
        >
          <ThemedText style={screen === 'register' ? styles.activeText : styles.inactiveText}>
            Register
          </ThemedText>
        </TouchableOpacity>

        {/* Food List */}
        <TouchableOpacity 
          style={[styles.toggleButton, screen === 'list' && styles.activeTab]} 
          onPress={() => setScreen('list')}
        >
          <ThemedText style={screen === 'list' ? styles.activeText : styles.inactiveText}>
            Food
          </ThemedText>
        </TouchableOpacity>

      </ThemedView>

      {/* Screens */}
      <ThemedView style={{ flex: 1 }}>
        {screen === 'login' && <Login />}
        {screen === 'register' && <Register />}
        {screen === 'list' && <FoodList />}
      </ThemedView>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    padding: 4,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  activeText: {
    fontWeight: '600',
  },
  inactiveText: {
    opacity: 0.6,
  },
});