import { useState } from 'react';
import './App.css';

export default function Square({ row, column, selectedShip }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        console.log('mouse enter ' + row + ' ' + column);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        console.log('mouse leave ' + row + ' ' + column);
        setIsHovered(false);
      }}
      style={{
        width: '20px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: `${
          isHovered && selectedShip && !selectedShip.isPlaced
            ? selectedShip.color
            : 'white'
        }`,
      }}
    ></div>
  );
}
