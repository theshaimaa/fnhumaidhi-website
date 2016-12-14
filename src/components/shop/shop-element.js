import React from 'react';

var ShopElement = React.createClass({
   render: function() {
      const buttonOuterDivStyle = {
         paddingTop: "40%",
      }

      const buttonDivStyle = {
         height: "60px",
         width: "100%",
         margin: "auto",
      }

      const buttonStyle = {
         fontSize: "18px",
         width: "80%",
         height: "100%",
      }

      return (
         <div style={buttonOuterDivStyle}>
            <div style={buttonDivStyle}>
               <a target="_blank" href={this.props.element.link} className="btn btn-primary whiteButton" style={buttonStyle}>{this.props.element.title}</a>
            </div>
         </div>
      );
   }
});

export default ShopElement;
