const firebase = require('firebase/app')
require('firebase/storage')

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
}

// Initialize Firebase
if (firebase.default.apps.length === 0) {
  firebase.default.initializeApp(firebaseConfig)
}

const firestore = firebase.default.firestore
const storage = firebase.default.storage

module.exports = {
  firebase,
  firestore,
  storage
}
