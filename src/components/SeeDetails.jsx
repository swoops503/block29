import React, { useEffect, useState } from 'react';

export function SeeDetails({ playerId }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-D/players');
        const data = await response.json();
        setPlayers(data.data.players);
      } catch (error) {
        console.error('Error fetching players: ', error);
      }
    };

    fetchPlayers();
  }, []);

  const player = players.find((p) => p.id === playerId);

  if (!player) {
    return <div>No player data found.</div>;
  }

  // Assuming you have certain properties in the player object like 'name', 'age', etc.
  return (
    <div className="details">
      <h2>{player.name}</h2>
      <br />
      <img src={player.imageUrl} alt={player.name} />
      <br />
      <p>{player.breed} - {player.status}</p>
    </div>
  );
}
