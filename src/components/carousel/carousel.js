import React, { Component } from 'react';
import Placeholder from '../../assets/images/banner/placeHolderCarousel.jpg';
import BannerOne from '../../assets/images/banner/farahOne.jpg';
import Caption from './caption.js';

class  Carousel extends Component {
   constructor() {
      super();
      this.state = {
         title: 'تعرف على',
         content: 'فرح الحميضي',
         button: 'أدخل هنا',
         link: '#',
         placeholder: {Placeholder},
         titleTwo: 'قريباً',
         contentTwo: 'جدول الدورات التدريبية للعام ',
      }
   }

   render() {
      const style = {
         maxWidth: "none",
      }

      const rightArrowStyle = {
        marginLeft: '-10px',
      }

      return (
         <div className="slide-wrapper">
            <div id="homepage-feature" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                     <img className="carousel-image" src={BannerOne} style={style} alt="First Slide"/>
                     <Caption key="12345" title={this.state.title} content={this.state.content} button={this.state.button} link={this.state.link}/>
                  </div>
                  <div className="carousel-item">
                     <img className="carousel-image" style={style} src="http://lorempixel.com/1800/800/abstract" alt="Second Slide"/>
                     <Caption key="122945" title={this.state.titleTwo} content={this.state.contentTwo} button={this.state.button} link={this.state.link}/>
                  </div>
               </div>
               <a className="left carousel-control" href="#homepage-feature" data-slide="prev">
                  <span className="fa fa-angle-left"></span>
               </a>
               <a className="right carousel-control" href="#homepage-feature" data-slide="next">
                  <span className="fa fa-angle-right" style={rightArrowStyle}></span>
               </a>
            </div>
         </div>
      );
   }
};

export default Carousel;
