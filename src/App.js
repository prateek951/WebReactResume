import React, { Component } from 'react';
import './App.css';
import ResumeHeader from './components/Header/ResumeHeader';
import ResumeFooter from './components/Footer/ResumeFooter';
import { Route, Switch } from 'react-router-dom';
import ResumeCenter from './components/Center/ResumeCenter';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';

class App extends Component {
  render() {
    return (
        <div>
          <ResumeHeader/>
            <Switch>
              <Route path="/" exact component={ResumeCenter}/>
              <Route path="/contact" exact component={Contact}/>
              <Route path="/exp" exact component={Experience}/>
              <Route path="/edu" exact component={Education}/>
              <Route path="/skills" exact component={Skills}/>
              <Route path="/projects" exact component={Projects}/>
            </Switch>
          <ResumeFooter/>     
        </div>  
    );
  }
}

export default App;
