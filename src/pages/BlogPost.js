import React, {Component} from 'react';
import Blog from '../components/blog/blog-post.js';
// import BlogList from '../components/blog/blog-list.js';
// import BlogPosts from '../data/blog-posts.js';
// import Divider from '../components/utilities/divider.js'

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.params.id
        }
    }
    render() {
        const id = this.state.id;
        return (
            <div>
                <Blog id={id}/>
                {/* <Divider />
                <BlogList elements={BlogPosts.slice(1,4)} title="اقرأ أكثر" /> */}
            </div>
        );
    }
};

export default BlogPost;
