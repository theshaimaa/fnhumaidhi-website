import React, { Component } from 'react';
import {Link} from 'react-router';

class BlogElement extends Component {
   render() {
      const imageURL = this.props.element.imageURL;
      let id = this.props.element.id;
      let url = `blog-post/${id}`

      const elementStyle = {
         margin: "0px",
         height: "300px",
         width: "100%",
         backgroundColor: "rgba(0, 0, 0, 0.7)",
         backgroundSize: 'cover',
         backgroundPosition: 'center bottom',
         overflow: 'hidden',
         backgroundImage: 'url('+ imageURL + ')',
      };

      const contentContainer = {
         height: "360px",
         width: "320px",
         backgroundColor: "rgba(220, 30, 50, 1)",
         padding: "0px",
         margin: "20px",
         textAlign: "center",
         float: "none",
         display: "inline-block",
         backgroundSize: 'cover',
         overflow: 'hidden'
      };

      const buttonDivStyle = {
         height: "60px",
      };

      return (
         <div className="col-lg-4" style={contentContainer}>
            <div className="contentImage" style={elementStyle}></div>
            <div className="contentButton" style={buttonDivStyle}>
               <Link to={url} className="btn btn-primary whiteButton">{this.props.element.title}</Link>
            </div>
         </div>
      );
   }
};

export default BlogElement;
