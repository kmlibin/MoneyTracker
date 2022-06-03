import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCsO6I8i4S_HJdDXeSnZKbgKGApNwBgq_I",
  authDomain: "mymoney-56249.firebaseapp.com",
  projectId: "mymoney-56249",
  storageBucket: "mymoney-56249.appspot.com",
  messagingSenderId: "498243022396",
  appId: "1:498243022396:web:8b570cad8327646e045d39"
};

//init firebase

firebase.initializeApp(firebaseConfig)

//init services

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp

const timestamp = firebase.firestore.Timestamp


export { projectFirestore, projectAuth, timestamp }