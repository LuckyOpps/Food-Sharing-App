import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Login from '../(auth)/login';
import Register from '../(auth)/register';

export default function Index() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.toggleContainer}>
        <TouchableOpacity 
          style={[styles.toggleButton, isLogin && styles.activeTab]} 
          onPress={() => setIsLogin(true)}
        >
          <ThemedText style={isLogin ? styles.activeText : styles.inactiveText}>Login</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.toggleButton, !isLogin && styles.activeTab]} 
          onPress={() => setIsLogin(false)}
        >
          <ThemedText style={!isLogin ? styles.activeText : styles.inactiveText}>Register</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={{ flex: 1 }}>
        {isLogin ? <Login /> : <Register />}
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
    backgroundColor: '#f0f0f0', // You can use useThemeColor hook for this
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
  }
});