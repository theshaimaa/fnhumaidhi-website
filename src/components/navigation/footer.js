import React from 'react';
import IkeaLogo from '../../assets/images/ikeaLogo.svg';

var Footer = React.createClass({
    render: function() {

      const footerStyle = {
         WebkitBoxShadow: "0 0 0px rgba(0, 0, 0, 0)",
         MozBoxShadow: "0 0 0px rgba(0, 0, 0, 0)",
         boxShadow: "0 0 0px rgba(0, 0, 0, 0)",
         minHeight:"60px",
         width: "100%",
         lineHeight: "60px",
         position: "absolute",
         background: "#373A3C",
         borderRadius: 0,
      };

      const footerFontStyle = {
         fontSize: "11px",
         color: "rgba(160, 160, 160, 1)",
      }

      return (
         <footer style={footerStyle} className="footer">
            <div className="container-fluid">
               <span style={footerFontStyle} >&copy; 2016 Farah Alhumaidhi | Sponsored by <img role="presentation" src={IkeaLogo}/></span>
            </div>
         </footer>
      );
    }
});

module.exports = Footer;
