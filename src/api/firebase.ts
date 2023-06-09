import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: `${import.meta.env.VITE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${import.meta.env.VITE_DATABASE_NAME}.firebasedatabase.app`,
  projectId: `${import.meta.env.VITE_PROJECT_ID}`,
  storageBucket: `${import.meta.env.VITE_PROJECT_ID}.appspot.com`,
  messagingSenderId: `${import.meta.env.VITE_SENDER_ID}`,
  appId: `${import.meta.env.VITE_APP_ID}`,
}

const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)
