import { useState } from 'react';
import { View, Button } from 'react-native';

import Login from '../(auth)/login';
import Register from '../(auth)/register';

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