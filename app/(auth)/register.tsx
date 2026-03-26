import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase';

const auth = getAuth(app);

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("Registered Successfully 🎉"))
      .catch((error) => alert(error.message));
  };

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: 'white'
    }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Register</Text>

      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}