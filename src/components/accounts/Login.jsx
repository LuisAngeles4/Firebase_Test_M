import React, { Component } from 'react'
import { Input, Button, Icon, Row, Col } from 'antd'

class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            correo: null,
            password: null
        }
    }

    changeEmail = (e) => {
        this.setState({correo: e.target.value})
    }

    changePassword = (e) => {
        this.setState({password: e.target.value})
    }

    render(){
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <p>Inicia sesión</p>
                    </Col>
                </Row>

                <Row>
                    <Col span={12} offset={6}>
                        <Input
                            placeholder="Correo electrónico"
                            prefix={<Icon type="user"/>}
                            value={this.state.correo}
                            onChange={(e)=>this.changeEmail(e)}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col span={12} offset={6}>
                        <Input.Password
                            placeholder="Contraseña"
                            onChange={(e)=>this.changePassword(e)}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                    <Button 
                style={{backgroundColor: "#61B7C4", color: "#fff"}}
                shape="round" 
                icon="user-add" 
                size="small"
                onClick={(e)=>this.props.iniciar(e, this.state.correo, this.state.password)}
                >
                    Iniciar sesión
            </Button>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Login
