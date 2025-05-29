import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className='logo-div'>
                <h1>MyCloud-VM-Server</h1>
            </div>
            <nav className='nav'>
                <NavLink className={'NavLink'} to='/' ><p>Carpeta</p></NavLink>
                <NavLink className={'NavLink'} to='/documentacion' ><p>Docs</p></NavLink>
            </nav>
            <div className='materia-div'>
                <h2>Arquitectura y Sistemas Operativos</h2>
                <h3>Trabajo Práctico Integrador</h3>
            </div>
        </header>
    )
}

export default Header