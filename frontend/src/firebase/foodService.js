import { addDoc, collection } from "firebase/firestore";
import { db } from "./config";

export const addFood = async () => {
  await addDoc(collection(db, "foodPosts"), {
    foodName: "Test Food",
    quantity: "5 plates",
    status: "available",
    createdAt: new Date()
  });

  console.log("Food added!");
};