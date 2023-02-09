import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-ec-dc511.firebaseapp.com",
  projectId: "react-ec-dc511",
  storageBucket: "react-ec-dc511.appspot.com",
  messagingSenderId: "762076915111",
  appId: "1:762076915111:web:393a51eccf5df1a8358282",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
