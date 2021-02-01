import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('rfilKsKUsiJyKCCyca4m')
  .collection('cartItems')
  .doc('mA1pUPKdrJ3FNhmAw6hQ');
firestore.doc('/users/mA1pUPKdrJ3FNhmAw6hQ/cartItems/mA1pUPKdrJ3FNhmAw6hQ');
firestore.collection('/users/mA1pUPKdrJ3FNhmAw6hQ/cartItems');
