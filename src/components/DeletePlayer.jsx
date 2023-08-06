import React from 'react';

export function DeletePlayer({ playerId, onDelete }) {
  const handleDelete = () => {
    // Call the onDelete function passed as a prop with the playerId
    onDelete(playerId);
  };

  return (
    <button onClick={handleDelete}>Delete Player</button>
  );
}
