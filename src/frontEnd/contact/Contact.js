import React from 'react';
import './Contact.css';
import Header from '../header/Header.js';

export default function Home(props) {
    return(
        <div>
            <Header/>
            <body className='Contact'>
                <div className='Contact-container'>
                    <h1>
                        My contact page!
                    </h1>
                </div>
            </body>
        </div>
    )
}