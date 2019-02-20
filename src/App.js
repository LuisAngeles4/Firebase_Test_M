import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import HeaderComponent from './components/common/Header'
import FooterComponent from './components/common/Footer'
import Home from './components/home/Home'
import Register from './components/accounts/Register'

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

  loginEmail = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user)=>{
        console.log(user)
        alert("Se ha registrado el usuario correctamente")
      })
      .catch((err)=>{
        console.log(err)
        alert("Ha ocurrido un eror al registrar")
      })
  }

  logout = () => {
    firebase.auth().signOut()
      .then(()=>alert("Se ha cerrado la sesión correctamente"))
      .catch(err=>console.log(err))
    this.setState({user: null})
  }

  render() {
    return (
      <Layout>
        <HeaderComponent />
        <div style={{height: "90vh"}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route 
            exact path="/register" 
            render={()=> 
            <Register
              loginGoogle={this.loginGoogle}
              user={this.state.user}
              logout={this.logout}
              loginEmail={this.loginEmail}
            />} 
          />
        </Switch>
        </div>
        <FooterComponent />
      </Layout>
    );
  }
}

export default App;
