import { createSelector } from 'reselect';

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => (collections ? collections[collectionUrlParam] : null)
    // collections.find(
    //   (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    // )
  );

export const selectIscollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

// Determines and returns a boolean value of whether or not our collection is null or not
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
  // collections 의 default값 null !!falsy => false
);
