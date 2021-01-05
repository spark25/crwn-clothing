import React from 'react';
import './App.css';

import { Route } from 'react-router-dom'

import Homepage from './pages/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'
import Header from './components/header/header.component'

import { auth, createUserProfileDoc } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Route exact path='/' component={Homepage} ></Route>
        <Route path='/shop' component={ShopPage} ></Route>
        <Route path='/signin' component={SignInSignUpPage} ></Route>
      </div>
    )
  }

}

export default App;
