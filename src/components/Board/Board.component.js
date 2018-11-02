import React from 'react';
import StyledBoard from './Board.styled';

const Board = () => {
    const arr = new Array(9).fill(false);
    const cells = arr.map((cell, index) => (
        <div className={'cell'} key={index}/>
    ));

    return (
        <StyledBoard className={'board'}>
            {cells}
        </StyledBoard>
    );
};

export default Board;