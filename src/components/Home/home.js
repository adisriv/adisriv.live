import React from 'react';
import Typing from 'react-typing-animation';
// import Testing from '../Testing/testing';
import './style.scss';


const Home = (props) => {
  return (
    <div className="intro">
      <div className="name">
        <div className="intro-1">Hi, my name is...</div>
        <Typing speed={75}>
          <div className="intro-2">Aditya Srivastava.</div>
          <div className="intro-3">I enjoy coding simple solutions to complex problems.</div>
          <div className="intro-4">I am an aspiring software engineer, who is currently looking for new graduate
            opportunities. Currently a senior at Dartmouth College, double majoring in Computer Science and
            Economics.
          </div>
        </Typing>
      </div>
    </div>
  );
};

export default Home;
