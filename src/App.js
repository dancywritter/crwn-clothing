import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const authUnsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return () => {
      authUnsubscribe();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/signin" component={SignInAndSignUpPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
