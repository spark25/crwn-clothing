import React from 'react';
import './App.css';

import { Route } from 'react-router-dom'

import Homepage from './pages/homepage.component'


function Hats(props) {
  console.log(props);
  return(
    <div>Hats</div>
  )
}

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <Route exact path='/' component={Homepage} ></Route>
      <Route exact path='/shop/hats' component={Hats} ></Route>
    </div>
  );
}

export default App;
