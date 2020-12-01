import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBC-pYXSGorSIUREq06fGVae9LXamAdzZg",
  authDomain: "corwn-shopping.firebaseapp.com",
  databaseURL: "https://corwn-shopping.firebaseio.com",
  projectId: "corwn-shopping",
  storageBucket: "corwn-shopping.appspot.com",
  messagingSenderId: "297090779872",
  appId: "1:297090779872:web:f6b1cc5524fba50df91e85",
  measurementId: "G-FWBXCRRZFS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
