import firebase from 'firebase/app'
import 'firebase/firestore'

let config = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY || 'api-key-not-set',
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN || null,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID || null,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET || null,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID || null,
    appId: process.env.VUE_APP_FIREBASE_APP_ID || null,
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID || null,
};

// Get a Firestore instance
export const db = firebase
    .initializeApp(config)
    .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
// db.settings({ timestampsInSnapshots: true })