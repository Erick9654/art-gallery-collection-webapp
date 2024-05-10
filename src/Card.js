import React, { useEffect, useState } from 'react';
import './Card.css'

function ArtCard({ onDelete }) {
  const [arts, setArts] = useState([]);
  const [newDescription, setNewDescription] = useState([]);

  useEffect(() => {
    fetch("https://json-server-template-dej7.onrender.com/art-pieces")
      .then(response => response.json())
      .then(data => setArts(data))
      .catch(error => console.error('Error fetching arts:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://json-server-template-dej7.onrender.com/art-pieces/${id}`, {
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
  };

  const handleUpdateDescription = (id, newDescription) => {
    fetch(`https://json-server-template-dej7.onrender.com/art-pieces/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ description: newDescription })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update description');
        }
        fetch("https://json-server-template-dej7.onrender.com/art-pieces")
          .then(response => response.json())
          .then(data => setArts(data))
          .then(() => {
            setNewDescription("");
          })
          .catch(error => console.error('Error fetching arts:', error));
      })
      .catch(error => {
        console.error('Error updating description:', error);
      });
    };

  if (!arts.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="art-card-container" >
      {arts.map(art => (
        <div key={art.id} className="art-card">
          <div className="art-card-image">
            <img src={art.link} alt={art.name} />
          </div>
          <div className="art-card-details">
            <h2>{art.name}</h2>
            <p>{art.description}</p>
            <h4>Artist: {art.artist}</h4>
            <div>
              <input
                type="text"
                placeholder="New Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <button onClick={() => handleUpdateDescription(art.id, newDescription)}>
                Update 
              </button>
            </div>
            <button onClick={() => handleDelete(art.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArtCard;