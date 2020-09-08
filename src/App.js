import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import NavigationBar from './components/Header/Header.component';
import HomePage from './pages/homepage/homepage.component';
// import HatsPage from './pages/hatspage';
import ShopPage from './pages/shoppage/shoppage.component.';
import SignInSignUp from './pages/sign-in-sign-up-page/sign-in-sign-up-page';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './actions';

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
  unsubscribefromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribefromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // the onSnapShot method allow us to listen to the doc on in the FireStore database for any changes to the data. It always return a latest version of that snapshot. To get the actual data of the snapshot we need to call the data() method
        userRef.onSnapshot((snapshot) => {
          console.log(snapshot);
          console.log(snapshot.data());
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      // If the user logout, set the currentUser state to null again
      setCurrentUser(userAuth);
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
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route
              exact
              path="/signin"
              // redirect the user back to the homepage after signing in
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
              }
            />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.user.currentUser };
};

export default connect(mapStateToProps, { setCurrentUser })(App);
