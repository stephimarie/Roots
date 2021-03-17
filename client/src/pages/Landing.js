import React from 'react'
import Auth from "../components/Auth/Auth"
import {Link} from "react-router-dom"
const Landing = () => {
    return (
        <Auth>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </Auth>
    )
}

export default Landing
