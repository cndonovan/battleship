import './App.css';

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
export default function Ships({ ships, setSelectedShip }) {
  return (
    <div style={{ display: 'grid', gap: '10px' }}>
      {ships
        .filter((ship) => !ship.isPlaced)
        .map((ship) => {
          return (
            <button
              key={ship.name}
              style={{
                textAlign: 'left',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
              }}
              onClick={() => {
                setSelectedShip(ship);
              }}
            >
              <p
                style={{ fontSize: '10px', marginTop: 0, marginBottom: '5px' }}
              >
                {capitalize(ship.name)}
              </p>
              <div
                style={{
                  width: `${ship.length * 20}px`,
                  height: '20px',
                  backgroundColor: ship.color,
                }}
              ></div>
            </button>
          );
        })}
    </div>
  );
}
