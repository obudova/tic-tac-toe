import { connect } from 'react-redux';
import GameHeader from './GameHeader.component';
import {startGame} from "../store/actionCreators";

const mapStateToHeaderProps = (state) => {
  return {
    gameStatus: state.gameStatus
  };
};

const mapDispatchHeaderProps = (dispatch) => (
  {
    onClick: (statusFrom) => {
      console.log(statusFrom);
      switch (statusFrom){
        case 'PRISTINE': {
          dispatch(startGame());
          break;
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