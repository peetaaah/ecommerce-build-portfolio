import React from 'react';

import './menu-item.styles.scss';

// the 'style' in the MenuItem is super useful, because the imageUrl can be dynamically generated, especially if the original prop passed is a randomly generated image

// note the className for the 'size' and menu-item!
const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
