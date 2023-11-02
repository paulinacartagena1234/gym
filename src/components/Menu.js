import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <>
            <h1 className=''>Bienvenido a SUPER BODY</h1>
            <h2><Link to="/Register">Registro</Link></h2>
        </>
    )
}

export default Menu
