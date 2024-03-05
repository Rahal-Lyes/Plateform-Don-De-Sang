
import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCq6QeoD4PXUz8PQHG7Evy3xlVlHa5SpZs",
    authDomain: "ecommercevue-cd4e1.firebaseapp.com",
    projectId: "ecommercevue-cd4e1",
    storageBucket: "ecommercevue-cd4e1.appspot.com",
    messagingSenderId: "267226794832",
    appId: "1:267226794832:web:bef3a5cee8f1f9ebe37a55",
    measurementId: "G-FJYLZ63JGJ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;