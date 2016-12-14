import React, { Component } from 'react';
import PinsList from './pins-list.js';

class Pinterest extends Component {
   constructor() {
      super();
      this.state = {
         title: 'بينتيريست'
      }
   }
   render() {
      const divStyle = {
         padding: "30px 20px",
         backgroundColor: "rgba(0, 0, 0, 0)"
      };

      const containerStyle = {
         padding: "30px 0px",
      }

      const h2Style = {
         padding: "20px",
         fontSize: "3em"
      };

      const rowStyle = {
         backgroundColor: "rgba(0, 0, 0, 0)",
         overflow: 'hidden',
         paddingTop: "30px",
         paddingBottom: "30px",
      }

      return (
         <div dir="rtl" className="container-fluid" style={divStyle} >
            <div className="container" style={containerStyle} >
               <div className="row">
                  <h2 style={h2Style}>{this.state.title}</h2>
               </div>
               <div className="row" style={rowStyle}>
                  <PinsList />
               </div>
            </div>
         </div>
      );
   }
};

export default Pinterest;
