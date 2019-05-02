import React from 'react';
import './Projects.css';
import Header from '../header/Header.js';

export default function Home(props) {
    return(
        <div>
            <Header/>
            <body className='Projects'>
                <div className='Projects-container'>
                    <h1>
                        My projects page!
                    </h1>
                </div>
            </body>
        </div>
    )
}