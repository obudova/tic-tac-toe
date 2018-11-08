import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'

export const getCurrentUser = (state) => state.currentUser;

function* toggleUser() {
  const currentUser =  yield select(getCurrentUser);

  // if prev step was cross
  if (currentUser) {

  }

}

function* mySaga() {
  yield takeEvery("TOGGLE_USER", toggleUser);
}

export default mySaga;

