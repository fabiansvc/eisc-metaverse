import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

const usersRef = collection(db, "users");

const createUser = async (userData) => {
  const userRef = await addDoc(usersRef, userData);
  return userRef;
};

const getUser = async (userEmail) => {
  const userSnapshot = await getDocs(query(usersRef, where("email", "==", userEmail)));
  return userSnapshot;
};

const editUser = async (userEmail, newUserData) => {
  try {
    const userDocRef = doc(usersRef, userEmail);
    const userSnapshot = await getUser(userEmail)

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      const updatedUserData = { ...userData, newUserData };
      console.error("Values updated succefully");
      return await updateDoc(userDocRef, updatedUserData);
    } else {  
      console.error("User not found");
      return userSnapshot
    }
  } catch (error) {
    console.error("Error to update avtar's values", error);
  }
};

export { createUser, getUser, editUser };
