import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <Link className="header__container" to='/'>
                    <div className="my_logo">
                        <i className="fab fa-drupal"></i>
                        <div className="title">
                            <h4>JoJoScore.com</h4>
                            <p>FIRST TO DELIVER YOUR SCORES</p>
                        </div>
                    </div>
                </Link>
                
                <div className="buttons">
                    <div className="mode"><i className="fas fa-moon"></i><i className="active fas fa-sun"></i></div>
                    <i className="fas fa-search"></i>
                    <i className="fas fa-cog"></i>
                    <div className="login">Login</div>
                    <div className="registration">REGISTRATION</div>
                </div>
            </div>

            <div className="games">
                <div className="football">
                    <i className="far fa-futbol"></i>
                    <h4>FOOTBALL</h4>
                    <span className="count"></span>
                </div>
            </div>
        </div> 
    )
}

export default Header
