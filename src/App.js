import React, { Component } from 'react';
// import * as firebase from 'firebase';
import Header from './components/navigation/header.js';
import SubHeader from './components/navigation/sub-header.js';
import Footer from './components/navigation/footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <SubHeader />
         { this.props.children }
         <Footer />
      </div>
    );
  }
};

export default App;
