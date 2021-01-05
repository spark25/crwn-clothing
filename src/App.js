import React from 'react';
import './App.css';

import { Route } from 'react-router-dom'

import Homepage from './pages/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'
import Header from './components/header/header.component'

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={Homepage} ></Route>
      <Route path='/shop' component={ShopPage} ></Route>
      <Route path='/signin' component={SignInSignUpPage} ></Route>
    </div>
  );
}

export default App;
