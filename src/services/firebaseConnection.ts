
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCaCGvpCT8capmaUI3vjzGNrsuK5WTmH_A",
  authDomain: "mylinks-1b234.firebaseapp.com",
  projectId: "mylinks-1b234",
  storageBucket: "mylinks-1b234.appspot.com",
  messagingSenderId: "549291475197",
  appId: "1:549291475197:web:4b424b5f9fb8f5852ebe94"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db };