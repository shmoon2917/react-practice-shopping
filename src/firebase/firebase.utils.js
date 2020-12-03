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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
