import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom'


export default function Header() {
    return(
        <header>
            <ul className='Header'>
                <li><NavLink to={'/'} className='Header-links-item'>Home</NavLink></li>
                <li><NavLink to={'/projects'} className='Header-links-item'>Projects</NavLink></li>
                <li><NavLink to={'/contact'} className='Header-links-item'>Contact</NavLink></li>
            </ul>
        </header>
    );
}