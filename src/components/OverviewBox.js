import React, { useState } from 'react';
import '../App.css';
import facebookLogo from '../images/icon-facebook.svg';
import twitterLogo from '../images/icon-twitter.svg';
import instagramLogo from '../images/icon-instagram.svg';
import ytLogo from '../images/icon-youtube.svg';

export default function OverviewBox({ icon, name, totalNumber, percent }) {
  return (
      <div className="small-card">
          <div className="name-icon">
              <h2>{name}</h2>
              <img src={icon} />
          </div>
            <h3>{totalNumber}</h3>
          <span>{percent}</span>
      </div>
  );
}
