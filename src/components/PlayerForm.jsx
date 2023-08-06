import React, { useState } from 'react';

export function PlayerForm() {
  const [playerData, setPlayerData] = useState({
    name: '',
    breed: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-D/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerData),
      });

      if (!response.ok) {
        throw new Error('Failed to add player to the roster.');
      }

      // Clear the form after successful submission
      setPlayerData({
        name: '',
        breed: '',
        status: '',
      });

      // Handle success or display a message to the user
      alert('Player added successfully!');
    } catch (error) {
      console.error('Error adding player:', error);
      alert('Failed to add player. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add New Player</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={playerData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Breed:
          <input type="text" name="breed" value={playerData.breed} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Status:
          <input type="text" name="status" value={playerData.status} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}
