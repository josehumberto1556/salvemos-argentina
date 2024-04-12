import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getFirestore } from 'firebase/firestore'

import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBj0iROdhCQpjpCB7uaAyAjXrBOS6PAmHY",
  authDomain: "salvemos-argentina-427ab.firebaseapp.com",
  projectId: "salvemos-argentina-427ab",
  storageBucket: "salvemos-argentina-427ab.appspot.com",
  messagingSenderId: "339606404016",
  appId: "1:339606404016:web:69c4e1ae907b1160ca3475",
  measurementId: "G-Y2XEMZLQQS"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const analytics = getAnalytics(app);

export const db = getFirestore(app)


