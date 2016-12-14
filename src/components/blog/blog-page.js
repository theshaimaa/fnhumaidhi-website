import React, { Component } from 'react';
import BlogList from './blog-list.js';
import BlogPosts from '../../data/blog-posts.js';

class BlogPage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         title: 'الفقرات'
      }
   };
   render() {
      const divStyle = {
         padding: "30px 0px",
         backgroundColor: "rgba(0, 0, 0, 0)"
      };

      return (
         <div dir="rtl" className="container-fluid" style={divStyle} >
            <BlogList elements={BlogPosts} title={this.state.title} />
         </div>
      );
   }
};

export default BlogPage;
