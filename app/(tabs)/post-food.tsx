import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';
import app from '../../firebase'; // Importing your existing firebase config

const db = getFirestore(app);

export default function PostFood() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');

  const handlePost = async () => {
    if (!name || !quantity || !location) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      await addDoc(collection(db, "foods"), {
        name,
        quantity,
        location,
        status: "available",
        createdAt: new Date()
      });
      Alert.alert("Success", "Food posted successfully!");
      setName(''); setQuantity(''); setLocation('');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Food Name (e.g., Pasta)" 
        value={name} 
        onChangeText={setName} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Quantity (e.g., 2 servings)" 
        value={quantity} 
        onChangeText={setQuantity} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Pickup Location" 
        value={location} 
        onChangeText={setLocation} 
        style={styles.input} 
      />
      <Button title="Post Food" onPress={handlePost} color="#28a745" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 }
});