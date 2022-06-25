import { useState } from 'react';

import Board from './Board';
import Ships from './Ships';
import './App.css';

// Players
const PLAYER_1 = 0;
const PLAYER_2 = 1;

// Board
const BOARD_SIZE = 10;

// Ships
const SHIPS = [
  {
    name: 'carrier',
    length: 5,
    color: 'red',
  },
  {
    name: 'battleship',
    length: 4,
    color: 'orange',
  },
  {
    name: 'cruiser',
    length: 3,
    color: 'yellow',
  },
  {
    name: 'submarine',
    length: 3,
    color: 'green',
  },
  {
    name: 'destroyer',
    length: 2,
    color: 'blue',
  },
];

function initializeBoard() {
  return new Array(BOARD_SIZE)
    .fill(0)
    .map(() => new Array(BOARD_SIZE).fill(null));
}

function initializeShipLookup() {
  const lookup = {};

  SHIPS.forEach((ship) => {
    lookup[ship.name] = {
      ...ship,
      isPlaced: false,
    };
  });

  return lookup;
}

export default function App() {
  const [activePlayer, setActivePlayer] = useState(PLAYER_1);
  const [boards, setBoards] = useState([initializeBoard(), initializeBoard()]);
  const [shipLookups, setShipLookups] = useState([
    initializeShipLookup(),
    initializeShipLookup(),
  ]);

  const [selectedShip, setSelectedShip] = useState(null);
  const [currentStart, setCurrentStart] = useState(null);
  const [currentEnd, setCurrentEnd] = useState(null);

  const board = boards[activePlayer];
  const shipLookup = shipLookups[activePlayer];

  // function moveShip(direction) {
  //   if (!selectedShip) return;
  //   if (!direction) return;

  //   if (!currentStart) {
  //     currentStart = { row: 0, column: 0 };
  //     return;
  //   }

  //   switch (direction) {
  //     case 'up':
  //       selectedShip.start = {
  //         ...start,
  //         row: start.row - 1,
  //       };
  //       board[start.row];
  //       break;
  //     case 'down':
  //       selectedShip.start = {
  //         ...start,
  //         row: start.row + 1,
  //       };
  //       break;
  //     case 'left':
  //       selectedShip.start = {
  //         ...start,
  //         column: start.column - 1,
  //       };
  //       break;
  //     case 'right':
  //       selectedShip.start = {
  //         ...start,
  //         column: start.column - 1,
  //       };
  //       break;
  //   }
  // }

  return (
    <div style={{ margin: '0 auto', maxWidth: '700px' }}>
      <header>
        <h1>Battleship</h1>
      </header>
      <h2>Player {activePlayer + 1}'s turn</h2>
      <p>
        {selectedShip ? (
          <>Selected ship: {selectedShip.name}</>
        ) : (
          <>No ship selected</>
        )}
      </p>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Ships
          ships={Object.values(shipLookup)}
          setSelectedShip={setSelectedShip}
        />
        <Board board={board} size={BOARD_SIZE} selectedShip={selectedShip} />
      </div>
    </div>
  );
}
