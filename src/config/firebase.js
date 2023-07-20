import { initializeApp } from "firebase/app"
//import { getAnalytics } from "firebase/analytics"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDCUnY10AAyMWDXYwx4KqCulLctgM9Wgso",
  authDomain: "shop-41eb9.firebaseapp.com",
  projectId: "shop-41eb9",
  storageBucket: "shop-41eb9.appspot.com",
  messagingSenderId: "713297042485",
  appId: "1:713297042485:web:f2872c3d340b7f8aa3e57c",
  measurementId: "G-F0VJ0K1MJC"
};

const app = initializeApp(firebaseConfig)
//const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)