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
// documentRef obj to perform our CRUD  (set, get, update, delete)
// documentRef returns a documentSnapshot obj
// collectionRef returns a query(collection)Snapshot obj
// collectionRef.add({//value: prop}) 으로 add document

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // .doc or .collections 메소드로 referenceObj 얻기
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const collectionRef = firestore.collection('users');
  // referenceObj의 .get메소드로 snapshot obj 얻기 id. documentRef.get() or collectionRef.get()
  // documentSnapshot obj allow us to check if a document existe using .exist property
  const snapShot = await userRef.get();
  // const collectionSnapshot = await collectionRef.get();
  // console.log({ collection: collectionSnapshot.docs.map((doc) => doc.data()) });
  // we can also get the actual properties on the obj by .data(), return JSON obj of the doc.

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

// We get a querySnapshot object from our collectionReference obj.

// we can check if there are any documents in the collection by calling .empty

// we can get all the documents in the collection by calling .docs
// returns an array of our documents as documentSnapshot objects.

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

// convert it to an object instead of the array
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  // reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
  return transformedCollection.reduce((prev, curr) => {
    prev[curr.title.toLowerCase()] = curr;
    return prev;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
