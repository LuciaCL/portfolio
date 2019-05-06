import React, {Component} from 'react';
import  {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './home/Home.js';
import NotFound from './NotFound';
import Projects from './projects/Projects.js';
import Contact from './contact/Contact.js';
import Header from './header/Header.js'

class App extends Component {
  render() {
    return (
        <Router basename='/'>
          <div className='App'>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/not-found' component={NotFound}/>
                <Route exact path='/projects' component={Projects}/>
                <Route exact path='/contact' component={Contact}/>
              </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
