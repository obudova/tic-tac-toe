import React from 'react';
import ActionButton from './ActionButton';

const mapBtnTextToState = {
  PRISTINE: 'Click to start',
  GAME_STARTED: 'Click to select name',
  OPONENTS_NAME_SELECTED: 'Click to throw a dice!',
  DICE_THROWED: 'START'
};

const GameHeader = (props) => (
  <ActionButton
    text={mapBtnTextToState[props.gameStatus]}
    callback={() => {props.onClick(props.gameStatus)}}
  />
);
export default GameHeader;