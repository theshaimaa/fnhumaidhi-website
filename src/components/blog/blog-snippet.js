import React, {Component} from 'react';

class BlogSnippet extends Component {
    render() {
        const textStyle = {
            textAlign: 'right',
            fontSize: '18px'
        };

        const imageStyle = {
            width: '100%'
        };

        const divStyle = {
            margin: "10px auto",
            padding: "10px 0"
        };

        const containerStyle = {
            paddingTop: "20px"
        }

        return (
            <div style={containerStyle}>
                <div style={divStyle}>
                    <p style={textStyle}>{this.props.text}</p>
                </div>
                <div style={divStyle}>
                    <img src={this.props.image} role="presentation" style={imageStyle}/>
                </div>
            </div>
        );
    }
};

export default BlogSnippet;
