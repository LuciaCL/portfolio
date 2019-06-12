import React from 'react';
import './Home.css';
import imgHomePage from '../imgs/IMG_6411_2.JPG'
import imgMe from '../imgs/me.JPG';
import Summary from '../pages/Summary.js';
import Education from '../pages/Education.js';
import Projects from '../projects/Projects.js';

export default function Home(props) {
    return (
        <div className='Home'>
            <div className='containerImage'>
                <div className='text'>
                    <p className='textImage'>{`{Lucia Couce Lamas}`} 
                        <img className='imgMe' alt='me' src={imgMe} />
                    </p>
                    <p className='textImage2'> Software developer </p>
                </div>

                <img className='imgHomePage' alt='Home page' src={imgHomePage} />

            </div>
            <div className='Home-container'>

                <Summary />

                <div className='skills'>

                    <h2 className='title'>Skills</h2>

                    <i className="fab fa-js" />
                    <i className="fab fa-react" />
                    <i className="fab fa-node" /><br />
                    <i className="fab fa-github-square" />
                    <i className="fab fa-css3-alt" /><br />

                </div>

            </div>
            <Education/>
            <Projects/>
        </div>
    )
}