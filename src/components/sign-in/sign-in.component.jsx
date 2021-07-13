import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
    // we have the preventDefault first because its not going anywhere, and we don't want to store any data yet.
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
    // what this will do for both email and password fields:
    // it will set the name as value --> if you type in the 'email' box, it'll register as 'email' and vice versa.
    // for more info, look here https://medium.com/@bretdoucette/understanding-this-setstate-name-value-a5ef7b4ea2b4
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account!</h2>
        <span>Sign in with your email and Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          {/* <label>Email</label> */}
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          {/* <label>Password</label> */}

            <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {' '}
            Sign In With Google
            { ' ' }
          </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
