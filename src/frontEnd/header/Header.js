import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom'

function scrollElement(id) {
    document.querySelector(id).scrollIntoView({
        behavior: "smooth"
    });
}

export default function Header() {
    return (
        <header>
            <ul className='Header'>
                <li><NavLink onClick={() => scrollElement("#home")} to={'/home'} >Home</NavLink></li>
                <li><NavLink onClick={() => scrollElement("#projects")} to={'/projects'} >Projects</NavLink></li>
                <li><NavLink onClick={() => scrollElement("#contact")} to={'/contact'} >Contact</NavLink></li>
            </ul>
        </header>
    );
}