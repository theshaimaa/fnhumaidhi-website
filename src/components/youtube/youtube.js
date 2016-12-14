import React, {Component} from 'react';
import YoutubeList from './youtube-list.js';

class Youtube extends Component {
   constructor() {
      super();
      this.state = {
         title: 'يوتيوب'
      }
   }
   render() {
      const containerStyle = {
         backgroundColor: "rgba(0, 0, 0, 0.03)",
         paddingTop: "30px",
         paddingBottom: "0px",
      };

      const h2Style = {
         padding: "20px",
         fontSize: "3em"
      };

      const rowStyle = {
         paddingTop: "30px",
         paddingBottom: "30px",
      };

      const videoRowStyle = {
         direction: "ltr",
         overflow: 'hidden',
         height: '183px',
      };

      return (
         <div dir="rtl" className="container-fluid" style={containerStyle} >
            <div className="row" style={rowStyle}>
               <h2 style={h2Style}>{this.state.title}</h2>
            </div>
            <div className="row" style={videoRowStyle}>
               <YoutubeList />
            </div>
         </div>
      );
   }
};

export default Youtube;
