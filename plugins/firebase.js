const firebase = require('firebase')

const firebaseConfig = {
  apiKey: 'AIzaSyCcwTrJe7i6wWmuj45jC43dq4ozdczEun0',
  authDomain: 'portfolio-site-1d580.firebaseapp.com',
  databaseURL: 'https://portfolio-site-1d580.firebaseio.com',
  projectId: 'portfolio-site-1d580',
  storageBucket: 'portfolio-site-1d580.appspot.com',
  messagingSenderId: '554132539705',
  appId: '1:554132539705:web:9025d014d305b0cc'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()
const storage = firebase.storage()

module.exports = {
  firebase,
  firestore,
  storage
}
