import React from 'react';

var Caption = React.createClass({
   render: function() {
      const titleStyle = {
         margin: "0",
         fontSize: "16px",
      };

      const contentStyle = {
         paddingBottom: "5px",
         fontSize: "28px",
         lineHeight: "1.4em",
         marginBottom: "0.8rem",
      };

      const buttonContainerStyle = {
         margin: "auto",
         width: "70%",
         height: "48px",
      };

      const buttonStyle = {
         fontSize: "16px",
         lineHeight: "1.0em",
         borderShahdow: "none",
         width: "85%",
         height: "100%",
      };

      return (
         <div className="carousel-caption">
            <p style={titleStyle}>{this.props.title}</p>
            <h5 style={contentStyle}>{this.props.content}</h5>
            <div style={buttonContainerStyle}><button className="btn btn-primary blackButton" style={buttonStyle} href={this.props.link}>{this.props.button}</button></div>
         </div>
      );
   }
});

export default Caption;
