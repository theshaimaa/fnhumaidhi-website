import React, { Component } from 'react';

class Live extends Component {
   constructor() {
      super();
      this.state = {
         link: 'https://www.youtube.com/embed/jVVGxxc_R1g?autoplay=1&rel=0',
      }
   }
   render() {

      return (
         <div dir="rtl" className="container-fluid" >
             <div className="row">
                 <div className="col">
                     <div className="embed-responsive embed-responsive-16by9">
                         <iframe class="embed-responsive-item" src="//www.youtube.com/embed/jVVGxxc_R1g?rel=0" allowfullscreen></iframe>
                     </div>
                 </div>
             </div>
         </div>
      );
   }
};

export default Live;
