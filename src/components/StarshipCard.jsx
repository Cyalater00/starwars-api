// src/components/StarshipCard.js
import React from 'react';

function StarshipCard({ name }) {
    return (
      <div className="starship-card">
        <img src={starshipImages[name] || `https://via.placeholder.com/150?text=${name}`} alt={name} />
        <h3>{name}</h3>
      </div>
    );
  }

export default StarshipCard;