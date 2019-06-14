import React from 'react';
import './Projects.css';
import carru from '../imgs/carru.png';
import kodflix from '../imgs/kodflix.png';

export default function Home(props) {
    return(
        <div className="section projects" id="projects">
        <div className="row">
          <h2 className="title">Projects</h2>
          <div className="card-container">
            <div className="card">
              <div className="card-image">
                <a
                  href="https://carru.herokuapp.com/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={carru} alt="CarrU" />
                </a>
              </div>
              <div className="card-text">
                <h4>CarrU</h4>
                <p> Share your car and help save the planet!</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <a
                  href="https://kodflix-lucia.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kodflix} alt="Kodflix" />
                </a>
              </div>
              <div className="card-text">
                <h4>Kodflix</h4>
                <p>A project simulating Netflix</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}