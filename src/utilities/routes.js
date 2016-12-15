import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '../App';
import Home from '../pages/Home.js';
import About from '../pages/About.js';
import Blog from '../pages/Blog.js';
import Episodes from '../pages/Episodes.js';
import Portfolio from '../pages/Portfolio.js';
import Shopping from '../pages/Shopping.js';
import Courses from '../pages/Courses.js';
import BlogPost from '../pages/BlogPost.js';

const Routes = (props) => (
   <Router {...props} history={browserHistory}>
      <Route component={App}>
         <Route path="/" component={Home} />
         <Route path="about" component={About} />
         <Route path="blog" component={Blog} />
         <Route path="episodes" component={Episodes} />
         <Route path="portfolio" component={Portfolio} />
         <Route path="shopping" component={Shopping} />
         <Route path="courses" component={Courses} />
         <Route path="blog-post/:id" component={BlogPost} />
      </Route>
   </Router>
);

export default Routes;
