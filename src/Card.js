import React, { useState, useEffect } from 'react';

function ArtCard({ id, onDelete }) {
  const [arts, setArts] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/art-pieces${id}`)
      .then(response => response.json())
      .then(data => setArts(data))
      .catch(error => console.error('Error fetching arts:', error));
  }, [id]);

  function handleDelete() {
    if (onDelete && arts) {
      onDelete(arts.id);
    }
  };

  if (!arts) {
    return <div>Loading...</div>;
  }

  const { name, description, artist, image } = arts;

  return (
    <div className="art-card">
      <div className="art-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="art-card-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>artist: {artist}</p>
        <button onClick={handleDelete}>Delete</button>        
      </div>
    </div>
  );
}

export default ArtCard;

