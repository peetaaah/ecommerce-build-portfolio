import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

// the 'style' in the MenuItem is super useful, because the imageUrl can be dynamically generated, especially if the original prop passed is a randomly generated image

// note the className for the 'size' and menu-item!

// match.url is the CURRENT url the site is on (i.e. homepage, or localhost/), and the linkUrl is the page to link to, i.e 'hats'

// it basicall appends the url from the match.url with linkUrl

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

// withRouter(menuItem) is a higher order component.
