import React, {Component} from 'react';
import Snapcode from '../../assets/images/widgets/snapcode.png';

class Widget extends Component {
    constructor() {
        super();
        this.state = {
            newsletter: {
                title: 'لقائمتنا البريديه',
                text: 'لتصلك اخر مستجدات مدونتي الخاصه بالتصميم الداخلي.. و تكون اول من يقراء و يرى اجدد الاضافات تاكد ان تنضم لقائمتنا البريديه',
                button: 'سجل هنا',
                link: 'http://eepurl.com/cq8-KP',
            },
            courses: {
                title: 'الدورات',
                text: 'دوراتي المتنوعه بالتصميم الداخلي  هي احد الوسائل التي استعين بها لتقديم المباديئ  و الاسس الضروريه لكل هاوي او مختص يريد ان يطور من نفسه بجدول زمني قصير..',
                button: 'قريباً',
            },
            snapchat: {
                title: 'سناب جات',
                text: 'تابعوني على سناب جات لتكونوا جزاء من يومي',
            }
        }
    }
    render() {
        const container = {
            backgroundColor: '#F8F8F8',
            direction: 'rtl'
        }

        const row = {}

        const columnNewsletter = {
            padding: '0',
            justifyContent: 'center'
        }

        const columnSnapchat = {
            padding: '0',
            justifyContent: 'center',
        }

        const columnCourses = {
            padding: '0',
            justifyContent: 'center'
        }

        const element = {
            padding: '2rem 2rem'
        }

        const title = {
            lineHeight: '1.5em'
        }

        const text = {
            fontSize: '1.1em',
            lineHeight: '1.5em',
            padding: '0.75em 3.5em'
        }

        const button = {
            height: "55px",
            width: "160px",
            margin: "auto"
        };

        const image = {
            width: '150px',
            padding: '0.5rem'
        }

        return (
            <div style={container}>
                <div className="widgets-row" style={row}>
                    <div className="col-md-4" style={columnCourses}>
                        <div className="courses-widget" style={element}>
                            <h4 style={title}>{this.state.courses.title}</h4>
                            <p style={text}>{this.state.courses.text}</p>
                            <div className="contentButton" style={button}>
                                <button type="button" className="btn btn-outline-secondary blackButton disabled">{this.state.courses.button}</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-snapchat" style={columnSnapchat}>
                        <div className="snapchat-widget" style={element}>
                            <h4 style={title}>{this.state.snapchat.title}</h4>
                            <p style={text}>{this.state.snapchat.text}</p>
                            <img src={Snapcode} role='presentation' style={image}/>
                        </div>
                    </div>
                    <div className="col-md-4" style={columnNewsletter}>
                        <div className="newsletter-widget" style={element}>
                            <h4 style={title}>{this.state.newsletter.title}</h4>
                            <p style={text}>{this.state.newsletter.text}</p>
                            <div className="contentButton" style={button}>
                                <a target="_blank" href={this.state.newsletter.link}><button type="button" className="btn btn-outline-secondary blackButton">{this.state.newsletter.button}</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Widget;
