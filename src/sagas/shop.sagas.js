import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../firebase/firebase.utils';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from '../actions';

import { FETCH_COLLECTIONS_START } from '../actions/actions.type';

//generator fucntions

export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = yield firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    //call is an effect used to invoke a function in Saga
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    //put is similar to dispatch in Redux Thunk, used to dispatch an action
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* onFetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsStartAsync);
}

export function* shopSagas() {
  yield all([call(onFetchCollectionsStart)]);
}
