import React from 'react';
import './Home.css';
import imgHomePage from './IMG_6411_2.JPG'
import imgMe from './me.JPG';
import Summary from '../pages/Summary.js';

export default function Home(props) {
    return (
        <body className='Home'>
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

                    <i class="fab fa-js" />
                    <i class="fab fa-react" />
                    <i class="fab fa-node" /><br />
                    <i class="fab fa-github-square" />
                    <i class="fab fa-css3-alt" /><br />

                </div>

            </div>
            <div className='Education'>
                <h2 className='title'>Education</h2>
                <p className='home-container-text-edu'>
                    Kodiri
                        JavaScript, React.JS, GradeJunior JavaScript
                        Dates attended 04-2019 – 05-2019

                        Building a web app with Modern JavaScript ES6+, React.js, and Node.js.<br/>
                        ● Creating kodflix(​https://kodflix-lucia.herokuapp.com/​) a web app using react.js, 
                            Modern JavaScript ES6+, HTML5, CSS3 and Node.js, mongoDB on the backEnd.<br/>
                        ● Working in teams using agile methodologies ( StandUp, Retrospective)<br/>
                        ● Learn how to use Git, GitHub, Heroku.<br/>
                        ● Training JavaScript and React working on technical challenges.<br/>
                        ● Led a seminar to the classmates about React.js
                    </p>
            </div>
        </body>
    )
}