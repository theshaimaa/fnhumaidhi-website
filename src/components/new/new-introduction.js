import React, {Component} from 'react';
import NewList from './new-list.js';
import NewPosts from '../../data/new-posts.js';

class New extends Component {
    constructor() {
        super();
        this.state = {
            title: 'أحدث الفقرات',
            content: 'مدونتي تهدف لنشر العلم النافع والفوائد المنتقاة وتقديم العديد من الأفكار الإبداعية لكل من يدرس التصميم الداخلي و لكل هاوي للديكور. المسؤلية الاجتماعية من اكبر همومي ...دوري في ان اطلعكم علي امور كثيرة داخل وخارج البيت تساهم بشكل كبير في تحسبن نوع الحياة التي نعيشها كاصحاب بيوت .. و تسليط الضوء على الوعي العام للجمال و الذي لا يقتصر فقط على ما هو داخل البيوت في مدونتي الخاصة العديد من العناوين التي اصب فيها كل أهتماماتي الخاصة التي قد تفيدكم ..وازدوكم بكل ما قد يغيب عنكم. تابعوني و استفيدوا من كل ما اقدمه في مدونتي وهو ما سيسعدني كثيرا.',
            button: 'المزيد',
        }
    };

    render() {
        const divStyle = {
            padding: "30px 0px",
            backgroundColor: "rgba(0, 0, 0, 0)"
        };

        const containerStyle = {
            padding: "30px 20px"
        };

        const h2Style = {
            padding: "20px",
            fontSize: "3em"
        };

        const pStyle = {
            padding: "1rem 2rem",
            fontSize: "1.1em",
            lineHeight: "1.5em"
        };

        const blogButtonDivStyle = {
            height: "60px",
            width: "180px",
            margin: "auto"
        };

        return (
            <div dir="rtl" className="container-fluid" style={divStyle}>
                <div className="container" style={containerStyle}>
                    <div className="row">
                        <h2 style={h2Style}>{this.state.title}</h2>
                        <p style={pStyle}>{this.state.content}</p>
                        <div className="contentButton" style={blogButtonDivStyle}>
                            <a href="/blog">
                                <button type="button" className="btn btn-outline-secondary blackButton">{this.state.button}</button>
                            </a>
                        </div>
                    </div>
                </div>
                <NewList elements={NewPosts.slice(0,3)}/>
            </div>
        );
    }
};

export default New;
