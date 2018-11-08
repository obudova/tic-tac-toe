import { connect } from 'react-redux';
import {
  makeTurn,
  changeUser
} from "../store/actionCreators";
import Board  from './Board'

const mapStateToBoardProps = (state) => {
  return {
    board: state.board,
    currentUser: state.currentUser
  };
};

const mapDispatchBoardProps = (dispatch) => (
  {
    dispatch: dispatch
  }
);

const mergeBoardProps = (stateProps, dispatchProps) => (
  {
    ...stateProps,
    ...dispatchProps,
    onCellClick: (action) => {
      dispatchProps.dispatch(makeTurn({
        user: stateProps.currentUser,
        index: action.index
      }));
      dispatchProps.dispatch(changeUser());
    },
  }
);

const GameBoardContainer = connect(
  mapStateToBoardProps,
  mapDispatchBoardProps,
  mergeBoardProps
)(Board);

export default GameBoardContainer;

