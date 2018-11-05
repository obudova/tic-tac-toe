import { combineReducers } from 'redux';
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

const reducer = combineReducers({
  gameStatus: gameStatusReducer,
  roundIsFinished: null,
});

export default reducer;