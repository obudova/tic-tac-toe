import { connect } from 'react-redux';
import GameHeader from './GameHeader.component';
import {
  startGame,
  selectNames,
  throwDice
} from "../store/actionCreators";

const mapStateToHeaderProps = (state) => {
  return {
    gameStatus: state.gameStatus
  };
};

const mapDispatchHeaderProps = (dispatch) => (
  {
    onClick: (statusFrom) => {
      switch (statusFrom){
        case 'PRISTINE': {
          dispatch(startGame());
          break;
        }
        case 'GAME_STARTED': {
          dispatch(selectNames());
          break;
        }
        case 'OPONENTS_NAME_SELECTED': {
          dispatch(throwDice())
        }
        default: {

        }
      }
    }
  }
);

const GameHeaderContainer = connect(
  mapStateToHeaderProps,
  mapDispatchHeaderProps
)(GameHeader);

export default GameHeaderContainer;