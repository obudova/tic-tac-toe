import { combineReducers } from 'redux';
function gameStatusReducer(state = 'PRISTINE', action) {
  switch (action.type) {
    case 'START_GAME': {
      return 'GAME_STARTED'
    }
    default: {
      return state;
    }
  }
}

const reducer = combineReducers({
  gameStatus: gameStatusReducer,
  roundIsFinished: null,
});

export default reducer;