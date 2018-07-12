import React, { Component } from 'react';
import './App.css';
import ResumeHeader from './components/Header/ResumeHeader';
import ResumeFooter from './components/Footer/ResumeFooter';
import ResumeCenter from './components/Center/ResumeCenter';

class App extends Component {
  render() {
    return (
        <div>
          <ResumeHeader/>
            <ResumeCenter/>
          <ResumeFooter/>     
        </div>  
    );
  }
}

export default App;
