import { createSelector } from 'reselect';
import _ from 'lodash';

export const selectShopData = (state) => state.shopData;

export const selectCollections = createSelector(
  [selectShopData],
  (shop) => shop.collections
);

//the Object.key method return an array of keys of the state.shopData object and then we map through that list of keys and return an array of value of each key.
export const selectShopDataForOverview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = _.memoize((collectionUrlParam) => {
  return createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
});

export const selectIsCollectionFetching = createSelector(
  [selectShopData],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShopData],
  (shop) => !!shop.collections
);
