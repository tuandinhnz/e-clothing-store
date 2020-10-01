import React, { useEffect, lazy, Suspense } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import SHOP_DATA_FIREBASE from './assets/data/shop.data_forfirebase';

import Header from './components/Header/Header.component';
import Spinner from './components/Spinner/Spinner.component';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.component';
// import HomePage from './pages/HomePage/HomePage.component';
// import ShopPage from './pages/ShopPage/ShopPage.component';
// import CheckoutPage from './pages/CheckoutPage/CheckoutPage.component';
// import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage.component';

import { selectCurrentUser } from './selectors/user.selectors';
import { checkUserSession } from './actions';
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
    font-family: 'Open Sans Condensed', 'Lato';
    font-size: 100%;
    font-weight: 400;
    margin: inherit;
    padding: 20px 40px;
    text-rendering: optimizeLegibility;
	  overflow-x: hidden;

    @media screen and (max-width: 800px) {
      padding: 10px;
      
    }
  }
`;

const HomePage = lazy(() => import('./pages/HomePage/HomePage.component'));
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage.component'));
const CheckoutPage = lazy(() =>
  import('./pages/CheckoutPage/CheckoutPage.component')
);
const SignInSignUpPage = lazy(() =>
  import('./pages/SignInSignUpPage/SignInSignUpPage.component')
);

const App = ({ checkUserSession, currentUser }) => {
  // unsubscribefromAuth = null;

  useEffect(() => {
    checkUserSession();
    // const { setCurrentUser } = this.props;
    // this.unsubscribefromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   console.log(userAuth);
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     // the onSnapShot method allow us to listen to the doc on in the FireStore database for any changes to the data. It always return a latest version of that snapshot. To get the actual data of the snapshot we need to call the data() method
    //     userRef.onSnapshot((snapshot) => {
    //       console.log(snapshot);
    //       console.log(snapshot.data());
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data(),
    //       });
    //     });
    //   }
    // If the user logout, set the currentUser state to null again
    // setCurrentUser(userAuth);
    // addCollectionAndDocuments(
    //   'collections',
    //   SHOP_DATA_FIREBASE.map(({ id, title, items }) => ({ id, title, items }))
    // );
    // console.log(
    //   SHOP_DATA_FIREBASE.map(({ id, title, items }) => ({ id, title, items }))
    // );
    // });
    // }

    // componentWillUnmount() {
    //   this.unsubscribefromAuth();
  }, [checkUserSession]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        {/* The ErrorBoundary component used to catch any errors that happens during rendering process because the Suspense won't be able to handle the errors */}
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            {/* Suspense allow us to lazy load an async component. Suspense always has the attribute fallback */}
            <Route exact path="/" component={HomePage} />

            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/signin"
              // redirect the user back to the homepage after successfully signed in
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
              }
            />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectShopDataForOverview,
});

export default connect(mapStateToProps, { checkUserSession })(App);
