import React, { Component } from 'react';
import Farah from '../assets/images/about/farah_about.jpg';

class AboutContent extends Component {
   constructor() {
      super();
      this.state = {
         title: 'عن فرح',
         content: 'انا مهندسة تصميم داخلي، تطمح الى تشكيل وعي مجتمعي لكل الامور الفنية والعملية التي تنطق بالتصميم الداخلي. هدفي الاسمى هو نشر الثقافة الجمالية بين جميع فئات المجتمع عن طريق تنفيذ مشاريع ومن خلال المشاركات الاعلامية و اقامة دورات احترافية خاصة لكل هوات التصميم في دول الخليج. اتطلع دائماً الى المساهمة في رفع الرقي الجمالي العمراني من اجل ان يكون هناك وطن اجمل للجميع.',
         subContent: 'فلسفتي المهنية حققتها من خلال ثلاثة اعمال تدور كلها حول التصميم وهي:',
         courses: 'Pieces by Farah, Courses by Farah, Interior Art',
      }
   }

   // componentDidMount() {
   //    const blogRef = firebase.database().ref().child('blog');
   //    blogRef.on('value', snap => {
   //       this.setState({
   //          title: snap.val().title,
   //          content: snap.val().content
   //       })
   //    });
   // }

   render() {
      const containerStyle = {
         backgroundColor: "#f8f8f8",
         padding: "0px",
         zIndex: "1000",
      };

      const rowStyle = {
         margin: "0px",
      };

      const colStyle = {
         padding: "30px",
         marginLeft: "auto",
         marginRight: "auto",
         backgroundColor: "#373A3C",
         float: "none",
      };

      const pStyle = {
         textAlign: "right",
         fontSize: "1.1em",
         lineHeight: "1.7em",
         color: "#ffffff",
         margin: "0",
      };

      const imageStyle = {
         width: "100%",
      };

      return (
         <div>
            <img src={Farah} role="presentation" style={imageStyle}/>
            <div className="container-fluid" style={containerStyle}>
               <div className="container" style={containerStyle}>
                  <div className="row" style={rowStyle}>
                     <div className="col-xs-11 col-md-10 aboutContent" style={colStyle}>
                        <p dir="rtl" style={pStyle}>{this.state.content}<br/><br/>{this.state.subContent}</p>
                        <p dir="ltr" style={pStyle}>{this.state.courses}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
};

export default AboutContent;
