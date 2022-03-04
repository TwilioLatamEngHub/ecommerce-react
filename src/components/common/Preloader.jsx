import React from 'react';
import logoWordmark from '../../images/logo-wordmark.png';

const Preloader = () => (
  <div className="preloader">
    <svg className="logo-symbol" viewBox="0 0 41.25 41.25">
      {/* <circle cx="50" cy="50" r="40" /> */}
      <circle className="fill-red" cx="29.97" cy="14.93" r="6.58" />
    </svg>
    <img alt="Twilio logo wordmark" src={logoWordmark} />
  </div>
);

export default Preloader;
