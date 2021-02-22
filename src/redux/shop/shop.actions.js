import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import ShopActionTypes from './shop.types';

// Thunks are is a action creator that returns a function that gets the dispatch
// Thunks async handling, multiple action
// very similar to mapDispatchToProps

// We're going to write a function that returns a function that gets dispatch

export const fetchCollectionStart = () => ({
  // Writing a function that returns an action === javascript object
  // Thunk doesn't care about action objects.
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFail = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAIL,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  // return function gets a dispatch (multiple actions)
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    // now Thunk received dispatch to my reducer the normal objects
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFail(error.message)));
  };
};
