import React, { Component } from 'react';
import Header from './components/navigation/header.js';
import SubHeader from './components/navigation/sub-header.js';
import Footer from './components/navigation/footer.js';
import Popup from './components/modal/modal.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Popup />
          <Header />
          <SubHeader />
          { this.props.children }
          <Footer />
      </div>
    );
  }
};

export default App;
