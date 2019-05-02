import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'



export default function Header(props) {
    return(
        <header className='Header'>
            <h1>Lucia's portfolio</h1>
            <div className='Header-links'>
                <Link to={'/'} className='Header-links-item' >Home</Link>
                <Link to={'/projects'} className='Header-links-item'>Projects</Link>
                <Link to={'/contact'} className='Header-links-item'>Contact</Link>
            </div>
        </header>
    );
}