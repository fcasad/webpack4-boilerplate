import React from 'react';

import emojiImg from '../../images/emoji.png';
import './Home.css';

export default () => (
  <div className="page home-page">
    <h1>Home Page</h1>
    <div className="profile">
      <img src={emojiImg} alt="Thinking emoji" />
      <h3>Farren&#39;s Profile</h3>
    </div>
  </div>
);
