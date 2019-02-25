import React from 'react'
import { Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'

const { Header } = Layout
const { Item } = Menu
const HeaderComponent = (props) => (
    <Header style={{backgroundColor: "#61B7C4"}}>
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        style={{lineHeight: "64px", backgroundColor: "#61B7C4"}}
        >
            <Item key="home"><NavLink to="/">Inicio</NavLink></Item>
            {props.user ?
                <Item key="logout" onClick={props.logout}>Cerrar Sesión</Item>
            :
                <Item key="login"><NavLink to="/login">Iniciar sesión</NavLink></Item>
            }
            {
                !props.user ?
                <Item key="register"><NavLink to="/register">Regístrate</NavLink></Item>
                : null
            }
            
        </Menu>
    </Header>
)

export default HeaderComponent
