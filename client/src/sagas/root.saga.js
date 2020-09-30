import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop.sagas';
import { userSagas } from './user.sagas';
import { cartSagas } from './cart.sagas';

export default function* rootSaga() {
  //yield all allow all sagas run concurrently
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
