import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAn9D8fAEpmrLqZ2xdm4rry2R9hzfYX7EI",
    authDomain: "crown-db-54467.firebaseapp.com",
    projectId: "crown-db-54467",
    storageBucket: "crown-db-54467.appspot.com",
    messagingSenderId: "246371389686",
    appId: "1:246371389686:web:681d9c59fa7a5db4589cd7",
    measurementId: "${config.measurementId}"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;