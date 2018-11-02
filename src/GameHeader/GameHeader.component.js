import React from 'react';
import ActionButton from './ActionButton';

const mapBtnTextToState = {
  PRISTINE: 'Click to start',
  GAME_STARTED: 'Click to select name'
};

const GameHeader = (props) => (
  <ActionButton
    text={mapBtnTextToState[props.gameStatus]}
    callback={() => {props.onClick(props.gameStatus)}}
  />
);
export default GameHeader;