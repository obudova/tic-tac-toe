import React from 'react';
import StyledCell from './Cell.styled';

const Cell = (props) => (
  <StyledCell
    circle={props.value === 1}
    cross={props.value === 0}
    onClick={
      () => {
        if (props.value < 0) {
          props.onClick({
            index: props.index
          });
        }
    }}
  >
  </StyledCell>
);

export default Cell;