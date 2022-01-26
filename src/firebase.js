import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCLaw7MsugcixJfkIyHrcueLkO0lZf9hTA",
  authDomain: "linkedin-5505b.firebaseapp.com",
  projectId: "linkedin-5505b",
  storageBucket: "linkedin-5505b.appspot.com",
  messagingSenderId: "897383567235",
  appId: "1:897383567235:web:ff139adfeb5141b982f0b6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };