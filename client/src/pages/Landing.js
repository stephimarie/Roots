import React from 'react'
import Auth from "../components/Auth/Auth"
import {Link} from "react-router-dom"


const Landing = () => {
    return (
        
        <Auth>
            <Link className="log-Reg" to="/login">Login</Link>
            <Link className="log-Reg" to="/register">Register</Link>
        </Auth>

    )
}

export default Landing
