import firebase from 'firebase/app';
import'firebase/firestore';
import'firebase/auth';

const config = {
    apiKey: "AIzaSyDvKU9_K8mWog0P-NKJeDsgl4rsZ9Kke-c",
    authDomain: "crwn-db-e40c1.firebaseapp.com",
    databaseURL: "https://crwn-db-e40c1.firebaseio.com",
    projectId: "crwn-db-e40c1",
    storageBucket: "",
    messagingSenderId: "472053704341",
    appId: "1:472053704341:web:91c63a9ccd52a0c11fdd9c",
    measurementId: "G-SJEG038GWN"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
