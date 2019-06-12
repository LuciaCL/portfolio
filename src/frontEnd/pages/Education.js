import React from 'react';

class Summary extends React.Component {
    render() {
        return (
            <div className='Education'>
                <h2 className='title'>Education</h2>
                <h3>Kodiri 04-2019 05-2019</h3>
                <h4>JavaScript, React.JS, GradeJunior JavaScript</h4>
                <p className='education-text'>
                        Building a web app with Modern JavaScript ES6+, React.js, and Node.js.<br />
                    ● Creating <a href='https://kodflix-lucia.herokuapp.com'>kodflix</a> a web app using react.js,
                            Modern JavaScript ES6+, HTML5, CSS3 and Node.js, mongoDB on the backEnd.<br />
                    ● Working in teams using agile methodologies ( StandUp, Retrospective)<br />
                    ● Learn how to use Git, GitHub, Heroku.<br />
                    ● Training JavaScript and React working on technical challenges.<br />
                    ● Led a seminar to the classmates about
                        <a href='https://www.youtube.com/watch?v=wwtQzWjrB9Y&t=153s'> React Fragments</a>
                </p>
            </div>
        )
    }
}

export default Summary;