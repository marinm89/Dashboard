import React from 'react';
import '../App.css';

export default function TotalBox({ icon, name, number, description, today }) {
  return (
    <div className="total-box">
      <div className="name-icon-display">
        <img src={icon} />
        <h2>{name}</h2>
      </div>
      <h3>{number}</h3>
      <span>{description}</span>
      <p>{today}</p>
    </div>
  );
}
