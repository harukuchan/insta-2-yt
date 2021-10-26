// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBar_KXcCFns_55rVCs3z8m6XtJAjjfl60",
  authDomain: "insta-2-yt-2bb93.firebaseapp.com",
  projectId: "insta-2-yt-2bb93",
  storageBucket: "insta-2-yt-2bb93.appspot.com",
  messagingSenderId: "746256947290",
  appId: "1:746256947290:web:3a37bae9acd2d855e26063",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
