import React, {useEffect, useState} from 'react';

function ArtCard({ onDelete }) {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/art-pieces")
      .then(response => response.json())
      .then(data => setArts(data))
      .catch(error => console.error('Error fetching arts:', error));
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:3001/art-pieces/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete art piece');
      }
      onDelete(id);
    })
    .catch(error => {
      console.error('Error deleting art piece:', error);
    });
  }
  if (!arts.length) {
    return <div>Loading...</div>;
  }
  return (
    <div className="art-card-container">
      {arts.map(art => (
        <div key={art.id} className="art-card">
          <div className="art-card-image">
            <img src={art.link} alt={art.name} />
          </div>
          <div className="art-card-details">
            <h2>{art.name}</h2>
            <p>{art.description}</p>
            <p>Artist: {art.artist}</p>
            <button onClick={() => handleDelete(art.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArtCard;
