import React, { Component } from 'react';
import Background from '../../assets/images/banner/banner.jpg';

class Billboard extends Component {
  constructor() {
     super();
     this.state = {
        title: 'لقائمتنا البريديه',
        text: 'سجل الان لتصلك اخر اخبارنا... و احصل على فرصه لدخول السحب على جوائز قيمه',
        button: 'سجل هنا',
        link: 'http://eepurl.com/cq8-KP',
     }
  }
  render() {
    const style = {
    //   background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(10, 10, 10, 0.25)), rgba(0, 0, 0, 0.1) url(${Background}) no-repeat`,
      background: `url(${Background}) no-repeat`,
      backgroundPosition: 'center top',
      backgroundSize: 'contain',
      width: '100%',
    }

    const title = {
       margin: "0",
       paddingBottom: "10px",
       fontSize: "26px",
    };

    const text = {
       paddingBottom: "5px",
       fontSize: "16px",
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
            <h5 style={title}>{this.state.title}</h5>
            <p style={text}>{this.state.text}</p>
            <div style={buttonContainer}><a className="btn btn-primary blackButton" style={button} href={this.state.link}>{this.state.button}</a></div>
          </div>
        </div>
      </div>
    )
  }
};

export default Billboard;
