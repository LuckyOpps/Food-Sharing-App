import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';
import Login from '../(auth)/login';
import Register from '../(auth)/register';

export default function Index() {
  const [isLogin, setIsLogin] = useState(true);

  // Fetch theme-dependent colors
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const tintColor = useThemeColor({}, 'tint');
  const iconColor = useThemeColor({}, 'icon');

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={[styles.toggleContainer, { backgroundColor: iconColor + '20' }]}>
        <TouchableOpacity 
          style={[
            styles.toggleButton, 
            isLogin && [styles.activeTab, { backgroundColor: backgroundColor }]
          ]} 
          onPress={() => setIsLogin(true)}
        >
          <ThemedText style={[
            styles.tabText,
            isLogin ? { color: tintColor, fontWeight: '700' } : { color: textColor, opacity: 0.6 }
          ]}>
            Login
          </ThemedText>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[
            styles.toggleButton, 
            !isLogin && [styles.activeTab, { backgroundColor: backgroundColor }]
          ]} 
          onPress={() => setIsLogin(false)}
        >
          <ThemedText style={[
            styles.tabText,
            !isLogin ? { color: tintColor, fontWeight: '700' } : { color: textColor, opacity: 0.6 }
          ]}>
            Register
          </ThemedText>
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
    borderRadius: 16,
    padding: 6,
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
  tabText: {
    fontSize: 16,
    letterSpacing: 0.5,
  }
});