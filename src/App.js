import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from '../src/components/header/header.component';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user)
      // this is an open subscription.
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    // we want to close the subscription between our react app and firebase when we unmount/close our react app to prevent
    // memory leaks.
  }

  render() {
  return (
    <div>
      <Header  currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUp} />

      </Switch>
    </div>
  )
  }
}

export default App;
