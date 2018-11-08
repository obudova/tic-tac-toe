import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import { findBestMove } from "../ai";
import { changeUser, makeTurn } from "./actionCreators";

export const getCurrentUser = (state) => state.currentUser;
export const getCurrentBoardState = (state) => state.board;

function* toggleUser() {
  const currentUser =  yield select(getCurrentUser);
  const currentBoardGame = yield select(getCurrentBoardState);

  // if prev step was cross
  if (currentUser) {
    const bestMove = findBestMove(currentBoardGame);
    console.log('best move', bestMove);
    yield put(makeTurn({
      user: currentUser ? 1 : 0,
      index: bestMove
    }));
  }
}

function* takeTurn() {
  yield put(changeUser())
}

function* mySaga() {
  yield takeEvery("TOGGLE_USER", toggleUser);
  yield takeEvery("MAKE_TURN", takeTurn);
}

export default mySaga;

