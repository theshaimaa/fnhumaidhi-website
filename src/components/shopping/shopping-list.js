import React, { Component } from 'react';
import ShoppingElement from './shopping-element.js';

class ShoppingList extends Component {
   render() {
      let elements = this.props.content.elements;
      const containerStyle = {
         padding: "30px 30px",
      };

      const rowStyle = {
         backgroundColor: "rgba(0, 0, 0, 0)",
         overflow: 'hidden',
         display: 'flex',
         flexWrap: 'wrap',
         justifyContent: 'center',
      };

      const h3Style = {
         padding: "18px",
         fontSize: "2.4em"
      };

      const pStyle = {
         padding: "12px",
         fontSize: "1.2em",
         textAlign: "center"
      };

      const imageStyle = {
         width: "98%",
         padding: "10px 0",
      };

      return (
         <div className="container" style={containerStyle} >
            <div className="row">
               <h3 style={h3Style}>{this.props.content.title}</h3>
               <p style={pStyle}>{this.props.content.text}</p>
            </div>
            <div className="container">
              <div className="row">
                <img src={this.props.content.image} role="presentation" style={imageStyle}/>
              </div>
            </div>
            <div className="row" style={rowStyle}>
               {this.renderBlogElements(elements)}
            </div>
         </div>
      );
   };
   renderBlogElements(elements) {
      return (
         elements.map(function(element, index) {
            return (
               <ShoppingElement key={index} element={element}/>
            );
         })
      );
   };
};

export default ShoppingList;
