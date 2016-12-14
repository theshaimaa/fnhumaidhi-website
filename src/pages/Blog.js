import React, {Component} from 'react';
import BlogPage from '../components/blog/blog-page.js';

class Blog extends Component {
    render() {
        const id = this.props.route.id;
        return (
            <div>
                <BlogPage id={id}/>
            </div>
        );
    }
};

export default Blog;
