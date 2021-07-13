import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  console.log(children);
  // CustomButton props=children is the text inside the button itself, i.e. "Sign In" as seen on the form-input
  console.log(otherProps);
  //CustomButton props=otherProps is the type, i.e. type="submit" inside the <CustomButton type="submit">

  // in the sign-in.component.jsx file, this is <CustomButton type="submit">Sign In</CustomButton>, so it collreates directly
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
