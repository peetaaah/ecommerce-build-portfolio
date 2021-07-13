import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/logo/crown.svg";
// note! its a special syntax, and ReactComponent tells CRA that you want a React component to render an SVG, rather than its filename.
// you can find more here: https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        <b>SHOP</b>
      </Link>
      <Link className="option" to="/contact">
        <b>CONTACT</b>
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
