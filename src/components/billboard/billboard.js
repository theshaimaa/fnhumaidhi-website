import React, { Component } from 'react';
import Background from '../../assets/images/banner/farahOne.jpg';

class Billboard extends Component {
  constructor() {
     super();
     this.state = {
        title: 'تعرف على',
        farah: 'فرح الحميضي',
        button: 'أدخل هنا',
        link: '/about',
     }
  }
  render() {
    const style = {
      background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(10, 10, 10, 0.25)), rgba(0, 0, 0, 0.1) url(${Background}) no-repeat`,
      backgroundPosition: '25% 50%',
      backgroundSize: 'cover',
      width: '100%',
    }

    const title = {
       margin: "0",
       fontSize: "16px",
    };

    const farah = {
       paddingBottom: "5px",
       fontSize: "28px",
       lineHeight: "1.4em",
       marginBottom: "0.8rem",
    };

    const buttonContainer = {
       margin: "auto",
       width: "70%",
       height: "48px",
    };

    const button = {
       fontSize: "16px",
       padding: '12px 0',
       borderShahdow: "none",
       width: "85%",
       height: "100%",
    };

    return (
      <div className="billboard-container" style={style}>
        <div className="billboard-row">
          <div className="billboard-qoute col-xs-10 col-sm-8 col-md-5 col-lg-3">
            <p style={title}>{this.state.title}</p>
            <h5 style={farah}>{this.state.farah}</h5>
            <div style={buttonContainer}><a className="btn btn-primary blackButton" style={button} href={this.state.link}>{this.state.button}</a></div>
          </div>
        </div>
      </div>
    )
  }
};

export default Billboard;
