import React from 'react';
import './App.css';

import { Route } from 'react-router-dom'

import Homepage from './pages/homepage.component'
import ShopPage from './pages/shop/shop.component'

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <Route exact path='/' component={Homepage} ></Route>
      <Route path='/shop' component={ShopPage} ></Route>
    </div>
  );
}

export default App;
