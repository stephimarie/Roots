import React from 'react'
import Auth from "../components/Auth/Auth"
import {Link} from "react-router-dom"


const Landing = () => {
    return (
        <div style={{marginTop:"40px"}}>
            <h5 style={{marginBottom: "40px", fontFamily:"'Akaya Telivigala', cursive"}}><strong>Sign-up for Roots Today!</strong></h5>
        <Auth>
            <Link className="log-Reg" to="/login"><strong>Login</strong></Link>
            <Link className="log-Reg" to="/register"><strong>Register</strong></Link>
        </Auth>
        </div>

    )
}

export default Landing
