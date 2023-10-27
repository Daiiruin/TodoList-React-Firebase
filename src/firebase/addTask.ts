import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase-config";

export const addTask = async (task: string) => {
  try {
    await addDoc(collection(db, "tasks"), {
      task: task,
      finished: false,
    });
    console.log("Données ajoutées avec succès !");
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de l'ajout des données à Firestore :",
      error
    );
  }
};
