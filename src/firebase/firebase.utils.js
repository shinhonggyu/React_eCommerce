import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDQgiWxWjdgqS0KgDNHIb23ci8uD8QRCdI',
  authDomain: 'crwn-db-9b5b2.firebaseapp.com',
  databaseURL: 'https://crwn-db-9b5b2-default-rtdb.firebaseio.com/',
  projectId: 'crwn-db-9b5b2',
  storageBucket: 'crwn-db-9b5b2.appspot.com',
  messagingSenderId: '336168496898',
  appId: '1:336168496898:web:d3b747e184b16cff869c1b',
  measurementId: 'G-65BJCPGSY8',
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
