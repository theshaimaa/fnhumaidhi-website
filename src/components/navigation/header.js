import React from 'react';
import NavLink from './nav-link.js';
import Snapcode from '../../assets/images/widgets/snapcode.png';

var Header = React.createClass({
    render: function() {

      const navStyle = {
         WebkitBoxShadow: "0 0 0px rgba(0, 0, 0, 0)",
         MozBoxShadow: "0 0 0px rgba(0, 0, 0, 0)",
         boxShadow: "0 0 0px rgba(0, 0, 0, 0)",
         minHeight:"50px",
         background: "rgba(0, 0, 0, 0)",
         borderRadius: '0',
         padding: '8px',
      };

      const navItemStyle = {
         padding: "10px 12px"
      }

      const socialItemStyle = {
         padding: "10px 0",
         display: 'flex',
         flexWrap: 'wrap',
         justifyContent: 'center',
      }

      const hamburgerStyle = {
         marginBottom: '15px',
         borderWidth: '2px',
         borderRadius: '0',
         borderColor: '#e8e8e8',
      }

      const container = {
         padding: '0',
      }

      return (
         <div className="container-fluid" style={container}>
            <nav style={navStyle} className="navbar navbar-light bg-faded">
               <span className="navbar-text float-lg-left">
                  <ul style={socialItemStyle} className="nav navbar-nav">
                     <li className="nav-item">
                        <a className="nav-link" href="https://www.youtube.com/channel/UCGrcCEaO32HvEZd634k_07g" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="https://www.pinterest.com/Fnhumaidhi/" target="_blank"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="https://www.instagram.com/fnhumaidhi/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href={Snapcode} target="_blank"><i className="fa fa-snapchat-ghost" aria-hidden="true"></i></a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="https://twitter.com/fnhumaidhi" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="https://www.facebook.com/fnhumaidhi/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                     </li>
                  </ul>
               </span>
               <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" style={hamburgerStyle}></button>
               <div className="collapse navbar-toggleable-sm" id="navbarResponsive">
                 <span className="navbar-text float-lg-right">
                    <ul style={navItemStyle} className="nav navbar-nav">
                       <li className="nav-item">
                          <NavLink to="/about">عن فرح</NavLink>
                       </li>
                       <li className="nav-item">
                          <NavLink to="/blog">مدونة</NavLink>
                       </li>
                       <li className="nav-item">
                          <NavLink to="/episodes">تصاميم مع فرح</NavLink>
                       </li>
                       <li className="nav-item">
                          <NavLink to="/portfolio">مشاريع فرح</NavLink>
                       </li>
                       <li className="nav-item">
                          <NavLink to="/shopping">تسوق مع فرح</NavLink>
                       </li>
                       {/* <li className="nav-item">
                          <NavLink to="/courses">جدول دوراتنا</NavLink>
                       </li> */}
                    </ul>
                 </span>
               </div>
            </nav>
         </div>
      );
    }
});

export default Header;
