import React, { useEffect, useState } from 'react';
import { SeeDetails } from './SeeDetails';
import { DeletePlayer } from './DeletePlayer';

export function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-D/players');
        const data = await response.json();
        setPlayers(data.data.players);
      } catch (error) {
        setError('Error fetching players: ' + error.message);
      }
    };

    fetchPlayers();
  }, []);

  const handleSeeDetails = (playerId) => {
    setSelectedPlayerId(playerId);
  };

  const handleDeletePlayer = async (playerId) => {
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-D/players/${playerId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete player.');
      }

      // Update the player list by removing the deleted player
      setPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== playerId));

      alert('Player deleted successfully!');
    } catch (error) {
      console.error('Error deleting player:', error);
      alert('Failed to delete player. Please try again.');
    }
  };

  return (
    <div>
      <h2>Player List</h2>
      <div className="player-container">
        {players.map((player) => (
          <div key={player.id} className="player-item">
            <strong>{player.name}</strong>
            <br />
            <img src={player.imageUrl} alt={player.name} style={{ width: '200px' }} />
            <br />
            <button onClick={() => handleSeeDetails(player.id)}>See Details</button>
            <DeletePlayer playerId={player.id} onDelete={handleDeletePlayer} />
          </div>
        ))}
      </div>
      {selectedPlayerId && <SeeDetails playerId={selectedPlayerId} />}
    </div>
  );
}
