import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <Link style={{textDecoration: 'none', color: 'white'}} to='/'>
                    <div className="my_logo">
                        <i className="fab fa-drupal"></i>
                        <div className="title">
                            <h4>JoJoScore.com</h4>
                        </div>
                    </div>  
                </Link>
                <div className="buttons">
                    <i className="fas fa-search"></i>
                    <div className="login">Login</div>
                    <div className="registration">REGISTRATION</div>
                </div>
            </div>

            <div className="games">
                <div className="football">
                    <i className="far fa-futbol"></i>
                    <h4>FOOTBALL</h4>
                </div>
            </div>
        </div> 
    )
}

export default Header
