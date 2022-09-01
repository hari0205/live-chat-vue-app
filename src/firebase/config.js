import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

require('dotenv').config()
const firebaseConfig = {
  apiKey: "process.env.apiKey",
  authDomain: "process.env.authDomain",
  databaseURL: "process.env.dbURL",
  projectId: "process.env.projectId",
  storageBucket: "process.env.bucket",
  messagingSenderId: "process.env.messagingSenderId",
  appId: "process.env.appId",
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
