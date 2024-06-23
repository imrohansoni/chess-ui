import King from './pieces/king';
import Knight from './pieces/knight';
import Rook from './pieces/rook';
import Bishop from './pieces/bishop';
import Queen from './pieces/queen';
import { useState } from 'react';

const row = [1, 2, 3, 4, 5, 6, 7, 8];
const column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


const Square = ({ id, color, children }) => {
  return (
    <div className={`square ${color}`} data-id={id}>
      {children}
    </div>
  );
};

const positions = [
  {
    piece: 'knight',
    color: 'black',
    position: 'a1',
  },
  {
    piece: 'king',
    color: 'black',
    position: 'a2',
  },
  {
    piece: 'queen',
    color: 'white',
    position: 'a3',
  },
];



const findPiecePosition = position => {
  const piecePosition = positions.find(pos => pos.position === position);
  if(piecePosition){

  }
};

const Board = () => {
  const squares = [];
  const [position, setPosition] = useState();

  row.forEach((num, i) => {
    column.forEach((col, j) => {
      const isBlack = (i + j) % 2 === 1;
      squares.push({
        color: isBlack ? 'black' : 'white',
        id: `${num}${col}`,
      });
    });
  });

  return (
    <div className='chess-board'>
      <div className='cols'>
        {column.map(c => {
          return <div className='square-number'>{c}</div>;
        })}
      </div>

      <div className='board-container'>
        <div className='rows'>
          {row.map(c => {
            return <div className='square-number'>{c}</div>;
          })}
        </div>
        <div className='chess-squares'>
          {squares.map(square => {
            return (
              <Square id={square.id} color={square.color}>
                <Bishop
                  theme={{
                    primary: '#ffffff',
                    secondary: '#34364C',
                  }}
                />
              </Square>
            );
          })}
        </div>
        <div className='rows'>
          {row.map(c => {
            return <div className='square-number'>{c}</div>;
          })}
        </div>
      </div>

      <div className='cols'>
        {column.map(c => {
          return <div className='square-number'>{c}</div>;
        })}
      </div>
    </div>
  );
};

export default Board;
