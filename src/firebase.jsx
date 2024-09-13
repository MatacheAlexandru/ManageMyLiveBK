import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  deleteUser, // Importă funcția de ștergere a utilizatorului
} from "firebase/auth";
import {
  getFirestore,
  deleteDoc,
  doc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore"; // Dacă folosești Firestore
import { getStorage, ref, listAll, deleteObject } from "firebase/storage"; // Adăugăm Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyD_uvq_19oDJCIpliuz3vucMsiffeJY6Fo",
  authDomain: "managemylife-635d1.firebaseapp.com",
  projectId: "managemylife-635d1",
  storageBucket: "managemylife-635d1.appspot.com",
  messagingSenderId: "122526314825",
  appId: "1:122526314825:web:9b0ed767de9c9162bc2a98",
};

// Inițializarea aplicației Firebase
const app = initializeApp(firebaseConfig);

// Instanțierea Firebase Auth, Firestore și Storage
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Inițializăm Firebase Storage

// Funcția pentru a șterge complet contul și datele utilizatorului
export const deleteUserAccount = async (user) => {
  if (!user || !user.uid) {
    console.error("Nu există utilizator autentificat.");
    return;
  }

  try {
    // Șterge toate documentele utilizatorului din Firestore
    const userDocRef = doc(db, "users", user.uid);
    await deleteDoc(userDocRef);

    // Șterge toate colecțiile asociate utilizatorului (de exemplu, evenimente)
    const userCollections = ["events"];
    for (const collectionName of userCollections) {
      const q = query(
        collection(db, collectionName),
        where("userId", "==", user.uid)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (docSnapshot) => {
        await deleteDoc(docSnapshot.ref);
      });
    }

    // Șterge toate fișierele utilizatorului din Firebase Storage
    const storageRef = ref(storage, `profilePics/${user.uid}`);
    const listResult = await listAll(storageRef);
    for (const itemRef of listResult.items) {
      await deleteObject(itemRef);
    }

    // Șterge utilizatorul din Firebase Authentication
    await deleteUser(user);

    console.log("Contul și datele utilizatorului au fost șterse cu succes.");
  } catch (error) {
    console.error("Eroare la ștergerea contului:", error.message);
    throw new Error("Nu s-a putut șterge contul.");
  }
};

// Exportarea funcțiilor și instanțelor necesare
export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  db,
  storage, // Exportăm Firebase Storage
};
