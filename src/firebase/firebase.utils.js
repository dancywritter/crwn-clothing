import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAgHt0nT2Eu-LnRVIz8n57S6l0-eMiGf78',
  authDomain: 'crwn-db-d55b6.firebaseapp.com',
  databaseURL: 'https://crwn-db-d55b6.firebaseio.com',
  projectId: 'crwn-db-d55b6',
  storageBucket: 'crwn-db-d55b6.appspot.com',
  messagingSenderId: '228582225712',
  appId: '1:228582225712:web:1731534eb603d1b1d2baf5',
  measurementId: 'G-QPW3PL8N3G',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
