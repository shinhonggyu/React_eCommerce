import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
