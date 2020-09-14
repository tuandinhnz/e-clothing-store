import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/Header/Header.component';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.component';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage.component';
import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments,
} from './firebase/firebase.utils';
import { setCurrentUser } from './actions';
import { selectCurrentUser } from './selectors/user.selectors';
// import { selectShopDataForOverview } from './selectors/shopData.selectors';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  
  html,
  body {
    background-color: white;
    font-family: 'Lato', sans-serif;
    font-size: 100%;
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
      // addCollectionAndDocuments(
      //   'collections',
      //   collectionsArray.map(({ title, items }) => ({ title, items }))
      // );
    });
  }

  componentWillUnmount() {
    this.unsubscribefromAuth();
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            // redirect the user back to the homepage after successfully signed in
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectShopDataForOverview,
});

export default connect(mapStateToProps, { setCurrentUser })(App);
