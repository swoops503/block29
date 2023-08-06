import React, { useEffect, useState } from 'react';

export function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-D/players');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Check if players array exists in the data object
        if (data && data.data && data.data.players && Array.isArray(data.data.players)) {
          setPlayers(data.data.players);
        } else {
          setError('Invalid data format: players array not found in data');
        }

        setLoading(false);
      } catch (error) {
        setError('Error fetching players: ' + error.message);
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

return (
    <div>
      <h2>Player List</h2>
      <div className="player-container">
        {players.map((player) => (
          <div key={player.id} className="player-item">
            <strong>{player.name}</strong>
            <br />
            <img src={player.imageUrl} alt={player.name} style={{ width: '200px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
