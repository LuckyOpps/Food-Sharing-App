import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from '../../firebase';

const db = getFirestore(app);

export default function FoodList() {
  const [foods, setFoods] = useState([]);

  const fetchFoods = async () => {
    const querySnapshot = await getDocs(collection(db, "foods"));

    let foodArray = [];

    querySnapshot.forEach((doc) => {
      foodArray.push({
        id: doc.id,
        ...doc.data()
      });
    });

    setFoods(foodArray);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20, marginTop: 50 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Available Food 🍱</Text>

      <FlatList
        data={foods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{
            borderWidth: 1,
            padding: 10,
            marginBottom: 10
          }}>
            <Text>🍛 {item.name}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Location: {item.location}</Text>
          </View>
        )}
      />
    </View>
  );
}