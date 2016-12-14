import React, { Component } from 'react';

class Divider extends Component {
   render() {
      const style = {
         "backgroundColor": "#f8f8f8",
         "height": "5px",
         "margin": "30px auto",
      }
      return (
         <div style={style}></div>
      );
   }
};

export default Divider;
