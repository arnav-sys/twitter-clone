import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6tnjcrvRh22z2T4SmnUNLJGHrShNFIfM",
    authDomain: "twitter-clone-4c124.firebaseapp.com",
    databaseURL: "https://twitter-clone-4c124.firebaseio.com",
    projectId: "twitter-clone-4c124",
    storageBucket: "twitter-clone-4c124.appspot.com",
    messagingSenderId: "597121809093",
    appId: "1:597121809093:web:690c5805a08c36d6928eac",
    measurementId: "G-FE94JP9CLZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;