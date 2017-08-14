import React, {Component} from 'react';
import * as firebase from 'firebase';
import BlogSnippet from './blog-snippet.js';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        const id = props.id;
        this.state = {
            id: `${id}`,
            blog: [],
        }
    }
    componentDidMount() {
        const id = this.state.id;
        const blogRef = firebase.database().ref().child(`blog/${id}`);
        blogRef.on('value', snap => {
            this.setState({
               blog: snap.val(),
            })
        });
    }

    render() {
        const containerStyle = {
            padding: "15px 0"
        };

        const postContainerStyle = {
            width: "90%"
        };

        const postTitleStyle = {
            margin: "10px auto",
            padding: "10px 0",
            textAlign: 'center'
        };

        const postDateStyle = {
            textAlign: 'left',
            margin: "10px auto",
            padding: "10px 0",
            fontSize: "14px",
            color: "#a8a8a8"
        };
        return (
            <div dir="rtl" className="container" style={containerStyle}>
                <div className="container" style={postContainerStyle}>
                    <h2 style={postTitleStyle}>{this.state.blog.title}</h2>
                    <p style={postDateStyle}>{this.state.blog.date}</p>
                    {this.renderSnippets()}
                </div>
            </div>
        );
    }
    renderSnippets() {
        if (!this.state.blog.post) {
            return (
                <div>
                    <h3>جاري التحميل...</h3>
                </div>
            )
        }

        let post = [];
        this.state.blog.post.forEach(function(key, value) {
            post.push(key);
        });

        return (post.map(function(snippet) {
            return (
                <div>
                    <BlogSnippet key={snippet.id} {...snippet}/>
                </div>
            );
        }));
    }
};

export default BlogPost;
