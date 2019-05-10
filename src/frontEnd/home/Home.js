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
                    <div className='summary'>
                        <h2 className='title'>Summary</h2>
                        <p className='summary-text'>I have always considered myself a proactive and keen-on-learning person. 
                            <br/>I believe in hard work as well as enjoy what I do, trying to do things the best and more efficient way possible.
                           <br/> I have three years of professional experience as a software developer in banking environment. 
                            I've worked in a variety of tasks, with very tight deadlines. 
                            I had to deal with heterogeneous technologies daily, 
                            switching between them quickly while keeping productivity intact.
                            Nowadays, I want to take a step further in my career. 
                            I joined Kodiri Bootcamp to start learning new technologies and keep myself relevant.
                            I hope to find a job that allows me to continue this new career path.
                        </p>
                    </div>
                    <div className='skills'>
                        <h2 className='title'>Skills</h2>
                    </div>
                </div>
            </body>
        </div>
    )
}