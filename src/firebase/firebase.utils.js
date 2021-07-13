import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAxK7fzLGJ9tfpATX8bAavOkHD9OydEnmg",
  authDomain: "crwn-db-react-5e151.firebaseapp.com",
  projectId: "crwn-db-react-5e151",
  storageBucket: "crwn-db-react-5e151.appspot.com",
  messagingSenderId: "830208507942",
  appId: "1:830208507942:web:fb9c0e7dda4b90ac89a6e7",
  measurementId: "G-XKK73F2060",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// gives access to the GoogleAuthProvider method from the auth library

provider.setCustomParameters({ prompt: "select_account" });
// this will trigger the google popup whenever we use google auth provider

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
