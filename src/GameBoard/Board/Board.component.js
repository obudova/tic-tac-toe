import React from 'react';
import StyledBoard from './Board.styled';
import Cell from './Cell'

const Board = (props) => {
    const cells = props.board.map((cell, index) => (
        <Cell key={index}
              index={index}
              value={cell}
              onClick={(action) => {
            props.onCellClick(action);
        }}/>
    ));

    return (
        <StyledBoard className={'board-container'}>
          <div className={'board'}>
            {cells}
          </div>
        </StyledBoard>
    );
};

export default Board;