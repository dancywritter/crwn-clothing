import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const authUnsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(null));
      }
    });
    return () => {
      authUnsubscribe();
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
        <Route path="/shop" component={ShopPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
