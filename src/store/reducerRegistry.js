import { combineReducers } from 'redux';

const EMPTY = -1;
const PLAYER = 0;
const OPPONENT = 1;

const emptyBoard = () => (
  Array(9).fill(EMPTY)
);

const initialBoardState = emptyBoard();

function gameStatusReducer(state = 'PRISTINE', action) {
  switch (action.type) {
    case 'START_GAME': {
      return 'GAME_STARTED'
    }
    case 'SELECT_NAMES': {
      return 'OPONENTS_NAME_SELECTED'
    }
    case 'THROW_DICE': {
      return 'DICE_THROWED'
    }
    default: {
      return state;
    }
  }
}

function boardStatusReducer(state = initialBoardState, action) {
  switch (action.type) {
    case 'MAKE_TURN': {
      return state.map((item, index) => {
        if (index === action.index) {
          return action.user
        } else {
          return item;
        }
      });
    }
    default: {
      return state;
    }
  }
}

function currentUserReducer(state = 0, action) {
  switch (action.type) {
    case 'TOGGLE_USER': {
      return state ? 0 : 1;
    }
    default: {
      return state;
    }
  }
}

const reducer = combineReducers({
  gameStatus: gameStatusReducer,
  roundIsFinished: null,
  board: boardStatusReducer,
  currentUser: currentUserReducer
});

export default reducer;