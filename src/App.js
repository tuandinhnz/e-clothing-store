import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavigationBar from './components/Header';
import HomePage from './pages/homepage';
// import HatsPage from './pages/hatspage';
import ShopPage from './pages/shoppage';
import SignInSignUp from './pages/sign-in-sign-up-page/sign-in-sign-up-page';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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
    this.unsubscribefromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // the onSnapShot method allow us to listen to the doc on in the FireStore database for any changes to the data. It always return a latest version of that snapshot. To get the actual data of the snapshot we need to call the data() method
        userRef.onSnapshot((snapshot) =>
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          })
        );
      }
      // If the user logout, set the currentUser state to null again
      this.setState({ currentUser: userAuth });
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
