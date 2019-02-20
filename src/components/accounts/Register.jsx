import React, { Component } from 'react'

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            correo: null,
            password: null,
            confirm_password: null,
        }
    }

    changeEmail = (e) => {
        this.setState({correo: e.target.value})
    }

    changePassword = (e) => {
        this.setState({password: e.target.value})
    }

    changeConfirmPassword = (e) => {
        this.setState({confirm_password: e.target.value})
    }

    comparePasswords = () => {
        this.state.password === this.state.confirm_password ?
            this.props.loginEmail(this.state.correo, this.state.password)        
        : alert("Las contraseñas no coinciden")
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
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
            <input 
            type="text" 
            placeholder="Introduce tu correo"
            onChange={(e)=>this.changeEmail(e)}
            />

            <input 
            type="password" 
            placeholder="Introduce tu contraseña"
            onChange={(e)=>this.changePassword(e)} 
            />

            <input 
            type="password" 
            placeholder="Confirmar tu contraseña" 
            onChange={(e)=>this.changeConfirmPassword(e)}
            />
            <button onClick={this.comparePasswords}>
                Crear usuario
            </button>
            </div>
            </div>
        )
    }
}
export default Register