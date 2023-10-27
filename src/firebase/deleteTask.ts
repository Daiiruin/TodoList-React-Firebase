import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase-config";

export const deleteTask = async (id: string) => {
  try {
    await deleteDoc(doc(db, "tasks", id));
    console.log("Données supprimée avec succès !");
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de l'ajout des données à Firestore :",
      error
    );
  }
};
