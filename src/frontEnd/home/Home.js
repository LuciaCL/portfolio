import React from 'react';
import './Home.css';
import imgHomePage from './IMG_6411_2.JPG'

export default function Home(props) {
    return(
        <div>
            <body className='Home'>
                <div className='containerImage'>
                    <div className='text'>
                        <p className='textImage'>{`{Hello World! I'm Lucia Couce Lamas}`}</p>
                        <p className='textImage2'> I'm a software developer </p>
                    </div>
                    <img className='imgHomePage' alt='Home page' src={imgHomePage}/>
                </div>
                <div className='Home-container'>
                        <p>Hello world!! My name is Lucia!</p>
                        <p>This is my Home Page</p>
                </div>
            </body>
        </div>
    )
}