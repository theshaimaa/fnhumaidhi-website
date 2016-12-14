import React, { Component } from 'react';

class Pin extends Component {
   render() {
      const style = {
         border: "none",
         borderSpacing: "0",
         cornerRadius: "0",
         lineHeight: "0",
         padding: "5px",
         margin: "0px",
         textAlign: "center",
         width: "280px",
         height: "280px",
      };
      const link = this.props.pins.image.original.url
      const pinLink = this.props.pins.url
      return (
         <a href={pinLink}><img className="img-top img-thumbnail" src={link} role="presentation" style={style} /></a>
      );
   }
};

export default Pin;
