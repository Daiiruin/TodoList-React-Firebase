import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase-config";

interface Task {
  id: string;
  name?: string;
}

export const fetchCurrentTasks = async () => {
  const q = query(collection(db, "tasks"), where("finished", "==", false));

  try {
    const tasks: Task[] = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });
    console.log(tasks);
    return tasks;
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération des données :",
      error
    );
    throw error;
  }
};
