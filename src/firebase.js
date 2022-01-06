import firebase from "firebase/compat/app"
import "firebase//compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const app = firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
})

export const db = firebase.firestore();

export const storage = app.storage()
export const auth = app.auth()
export default app
