import React from 'react';
import './Navbar.css';
import Troll from '../../images/TrollFace.png'

export default function Navbar(){
    return(
        <div className='--navbar-navbar-container'>
            <div className="--navbar-logo-container">
                <img className='--navbar-logo' src={Troll} />
                <p className='--navbar-logo-title'>Meme Generator</p>
            </div>
            <div className='--navbar-desc-container'>
                <p className='--navbar-desc'>React Course - Project 3</p>
            </div>
        </div>
    )
}