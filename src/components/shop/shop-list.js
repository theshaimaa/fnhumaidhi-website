import React from 'react';
import ShopElement from './shop-element.js';

var ShopList = React.createClass({
   render: function() {
      const imageURL = this.props.element.imageURL;
      const elementStyle = {
         display: "inline-block",
         height: "310px",
         width: "310px",
         margin: "20px",
         padding: "0px",
         float: "none",
         backgroundColor: "rgba(0, 0, 0, 0.7)",
         backgroundSize: 'cover',
         backgroundPosition: 'bottom center',
         overflow: 'hidden',
         backgroundImage: 'url('+ imageURL + ')'
      };

      return (
         <div className="col-xs-12 col-md-3" style={elementStyle}>
            <ShopElement element={this.props.element} />
         </div>
      );
   }
});

export default ShopList;
