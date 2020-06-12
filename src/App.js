import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import EasterEgg from './components/EasterEgg/easterEgg';
import NavBar from './components/NavBar/navBar';
import './style.scss';

const App = (props) => {
  return (
    <Router basename={window.location.pathname || ''}>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route component={EasterEgg} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
