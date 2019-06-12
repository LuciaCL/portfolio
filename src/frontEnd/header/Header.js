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
                <li><NavLink to={'/'} >Home</NavLink></li>
                <li><NavLink onClick={() => scrollElement("#projects")} to={'/projects'} >Projects</NavLink></li>
                <li><NavLink to={'/contact'} >Contact</NavLink></li>
            </ul>
        </header>
    );
}