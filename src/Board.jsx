import { useState } from 'react';

import Square from './Square';
import './App.css';

export default function Board({ board, size, selectedShip }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplate: `repeat(${size}, 1fr) / repeat(${size}, 1fr)`,
        gap: '5px',
      }}
    >
      {board.map((row, i) => (
        <>
          {row.map((column, j) => (
            <Square
              key={`${i},${j}`}
              row={i}
              column={j}
              selectedShip={selectedShip}
            />
          ))}
        </>
      ))}
    </div>
  );
}
