import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8ueaHlJTl0I8YFTFQq4I1lHt-cnhW5zU",
  authDomain: "tutorialtodolist-d31eb.firebaseapp.com",
  projectId: "tutorialtodolist-d31eb",
  storageBucket: "tutorialtodolist-d31eb.appspot.com",
  messagingSenderId: "264445525330",
  appId: "1:264445525330:web:4af9fde099856d1cc30e8b",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
