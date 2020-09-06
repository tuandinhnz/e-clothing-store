import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import NavigationBar from './components/Header';
import HomePage from './pages/homepage';
import HatsPage from './pages/hatspage';
import ShopPage from './pages/shoppage';
import SignInSignUp from './pages/sign-in-sign-up-page/sign-in-sign-up-page';
import { auth } from './firebase/firebase.utils';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  
  html,
  body {
    background-color: white;
    font-family: 'Open Sans', sans-serif;
    font-size: 62.5%;
    font-weight: 400;
    margin: inherit;
    padding: inherit;
    text-rendering: optimizeLegibility;
	  overflow-x: hidden;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null };
  }

  unsubscribefromAuth = null;

  componentDidMount() {
    this.unsubscribefromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribefromAuth();
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <BrowserRouter>
          <NavigationBar currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signin" component={SignInSignUp} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
