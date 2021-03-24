import React from 'react'
import Auth from "../components/Auth/Auth"
import {Link} from "react-router-dom"
import Slogan from "../components/Slogan/slogan"


const Landing = () => {
    return (
        <div>
        <nav className="nav-wrapper">
        <img style={{marginLeft:"10px"}}
          id="logo"
          src="https://img.icons8.com/ios/100/000000/tms-tree.png"
          alt="roots logo"
        />
        </nav>
            <Slogan />
            <h5 style={{marginBottom: "40px", fontFamily:"'Akaya Telivigala', cursive", color:"black"}}><strong>Sign-up for Roots Today!</strong></h5>
        <Auth>
            <Link className="log-Reg" to="/login"><strong>Login</strong></Link>
            <Link className="log-Reg" to="/register"><strong>Register</strong></Link>
        </Auth>
        </div>

    )
}

export default Landing
