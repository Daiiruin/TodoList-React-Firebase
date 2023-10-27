import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const updateTask = async (id: string, task: string) => {
  try {
    await setDoc(doc(db, "tasks", id), {
      finished: true,
      task: task,
    });
    console.log("Données mis à jour avec succès !");
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de l'ajout des données à Firestore :",
      error
    );
  }
};
