import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/images/logo.svg';

var SubHeader = React.createClass({
    render: function() {
      return (
         <div className="App-header">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
         </div>
      );
    }
});

export default SubHeader;
