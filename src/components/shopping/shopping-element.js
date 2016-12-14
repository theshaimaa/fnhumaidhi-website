import React, { Component } from 'react';

class ShoppingElement extends Component {
   render() {
      const imageURL = this.props.element.imageURL;

      const elementStyle = {
         margin: "0px",
         height: "300px",
         width: "100%",
         backgroundColor: "#F8F8F8",
         backgroundSize: 'contain',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center center',
         overflow: 'hidden',
         backgroundImage: 'url('+ imageURL + ')',
      };

      const contentContainer = {
         width: '320px',
         backgroundColor: '#ffffff',
         padding: '0px',
         margin: '20px',
         textAlign: 'center',
         display: "inline-block",
         overflow: 'hidden'
      };

      const buttonDivStyle = {
         height: "60px",
         border: '2px solid #373A3C'
      };

      return (
         <div className="col-lg-4" style={contentContainer}>
            <div className="contentButton" style={buttonDivStyle}>
               <p className="whiteButton">{this.props.element.title}</p>
            </div>
            <div className="contentImage" style={elementStyle}></div>
         </div>
      );
   }
};

export default ShoppingElement;
