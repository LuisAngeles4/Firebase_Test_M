import React, { Component } from 'react'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            correo: null,
            password: null
        }
    }

    render(){
        return (
            <div>
            {this.props.user ?
            <div>
                <p>Nombre: {this.props.user.displayName}</p>
                <p>Correo: {this.props.user.email}</p>
                <img 
                style={{width: "100px"}}
                src={this.props.user.photoURL} 
                alt={this.props.user.displayName} />
                <button onClick={this.props.logout}>Cerrar sesión</button>
            </div>    
            : <button onClick={this.props.loginGoogle}>Inicia sesión con Google</button>
            }
            </div>
        )
    }
}
export default Login