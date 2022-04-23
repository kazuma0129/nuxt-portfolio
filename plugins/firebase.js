const firebase = require('firebase/app')

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
}

if (firebase.getApps().length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const firestore = require('firebase/firestore')
const storage = require('firebase/storage')

module.exports = {
  firebase,
  firestore,
  storage
}
