import React, {Component} from 'react';

class BlogSnippet extends Component {
    render() {
        const textStyle = {
            textAlign: 'right',
            fontSize: '18px',
            margin: '0',
        };

        const imageStyle = {
            width: '100%'
        };

        const divStyle = {
            margin: "10px auto",
            padding: "10px 0"
        };

        const mediaDivStyle = {
            margin: "10px auto",
            padding: "20px 0"
        };

        const containerStyle = {
            padding: "0px"
        }

        const contentContainer = {
            width: '320px',
            backgroundColor: 'transparent',
            padding: '0px',
            margin: '20px',
            textAlign: 'center',
            display: "inline-block",
            backgroundSize: 'cover',
            overflow: 'hidden'
        };

        const embed = {
            backgroundSize: 'contain',
            backgroundPosition: 'center center'
        }

        const text = this.props.text
        const image = this.props.image
        const video = this.props.video

        return (
            <div style={containerStyle}>
                <div style={divStyle}>
                    <p style={textStyle}>{text}</p>
                </div>
                {image
                    ? (<div style={mediaDivStyle}>
                        <img src={this.props.image} role="presentation" style={imageStyle}/>
                    </div>)
                    :
                    null
                }

                {video
                    ? (<div style={mediaDivStyle}>
                        <div className="embed-responsive embed-responsive-16by9" style={embed}>
                            <iframe className="embed-responsive-item" src={video} allowFullScreen/>
                        </div>
                    </div>)
                    :
                    null
                }
            </div>
        );
    }
};

export default BlogSnippet;
