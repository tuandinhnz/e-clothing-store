import { createSelector } from 'reselect';
import _ from 'lodash';

//the Object.key method return an array of keys of the state.shopData object and then we map through that list of keys and return an array of value of each key.
export const selectShopData = (state) =>
  Object.keys(state.shopData).map((key) => state.shopData[key]);

export const selectCollection = _.memoize((collectionUrlParam) => {
  return createSelector(
    [selectShopData],
    (collections) => collections[collectionUrlParam]
  );
});
