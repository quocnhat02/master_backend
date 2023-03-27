import React from 'react';
import Cell from './Cell';

const Board = () => {
  return (
    <div className='game-board'>
      {Array(9)
        .fill()
        .map((item, index) => (
          <Cell key={index} />
        ))}
    </div>
  );
};

export default Board;
