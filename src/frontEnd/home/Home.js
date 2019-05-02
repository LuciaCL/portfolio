import React from 'react';
import './Home.css';
import Header from '../header/Header.js'

export default function Home(props) {
    return(
        <div>
            <Header/>
            <body className='Home'>
                <div className='Home-container'>
                    <h1>
                        <p>Hello world!! My name is Lucia!</p>
                        <p>This is my Home Page</p>
                    </h1>
                </div>
            </body>
        </div>
    )
}