import React, { Component } from 'react';
import BlogElement from './blog-element.js';

class BlogList extends Component {
   render() {
      let elements = this.props.elements;
      const containerStyle = {
         padding: "30px 20px",
      };

      const rowStyle = {
         backgroundColor: "rgba(0, 0, 0, 0)",
         overflow: 'hidden',
         margin: '20px auto',
      };

      const h3Style = {
         padding: "18px",
         fontSize: "2.4em"
      };

      return (
         <div className="container" style={containerStyle} >
            <div className="row">
               <h3 style={h3Style}>{this.props.title}</h3>
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
               <BlogElement key={index} element={element}/>
            );
         })
      );
   };
};

export default BlogList;
