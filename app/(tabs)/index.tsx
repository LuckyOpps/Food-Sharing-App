import { useState } from 'react';
import { View, Button } from 'react-native';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Login from '../(auth)/login';
import Register from '../(auth)/register';
import FoodList from './foodList';

export default function Index() {
  const [isLogin, setIsLogin] = useState(true);

  return (

    <View style={{ flex: 1 }}>
      
      {/* Toggle Buttons */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 50 }}>
        <Button title="Login" onPress={() => setIsLogin(true)} />
        <Button title="Register" onPress={() => setIsLogin(false)} />
      </View>

      {/* Show Screen */}
      <View style={{ flex: 1 }}>
        {isLogin ? <Login /> : <Register />}
      </View>

    </View>
  );
}
{
  (  <ThemedView style={styles.container}>
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
    backgroundColor: '#f0f0f0', // You can use useThemeColor hook for this
    padding: 4,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
  },
  activeTab: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  activeText: {
    fontWeight: '600',
  },
  inactiveText: {
    opacity: 0.6,
  }
});