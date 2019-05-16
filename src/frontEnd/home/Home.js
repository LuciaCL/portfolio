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
                        <p className='home-container-text'>I have always considered myself a proactive and keen-on-learning person. 
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

                        <i class="fab fa-js"/><br/>
                        <i class="fab fa-react"/><br/>
                        <i class="fab fa-node"/><br/>
                        <i class="fab fa-github-square"/><br/>
                        <i class="fab fa-css3-alt"/><br/>

                    </div>
                    
                </div>
                <div className='Education'>
                        <h2 className='title'>Education</h2>
                        <p className='texhome-container-textt'>
                        Kodiri
                            JavaScript, React.JS, GradeJunior JavaScript
                            Dates attended 04-2019 – 05-2019

                            Building a web app with Modern JavaScript ES6+, React.js, and Node.js.
                            ● Creating kodflix(​https://kodflix-lucia.herokuapp.com/​) a web app using react.js, Modern JavaScript ES6+, HTML5, CSS3 and Node.js, mongoDB on the backEnd.
                            ● Working in teams using agile methodologies ( StandUp, Retrospective)
                            ● Learn how to use Git, GitHub, Heroku.
                            ● Training JavaScript and React working on technical challenges.
                            ● Led a seminar to the classmates about React.js
                        </p>
                    </div>
            </body>
        </div>
    )
}