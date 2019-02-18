import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/accounts/Login'
import firebase from 'firebase'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }
      else {
        console.log("No estas logeado")
      }
    })
  }

  loginGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(user=>console.log(user))
      .catch(err=>console.log(err))
  }

  logout = () => {
    firebase.auth().signOut()
      .then(()=>alert("Se ha cerrado la sesión correctamente"))
      .catch(err=>console.log(err))
    this.setState({user: null})
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route 
            exact path="/login" 
            render={()=> 
            <Login 
              loginGoogle={this.loginGoogle}
              user={this.state.user}
              logout={this.logout}
            />} 
          />
        </Switch>
      </div>
    );
  }
}

export default App;
