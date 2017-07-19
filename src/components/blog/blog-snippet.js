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
        };

        const embed = {
            backgroundSize: 'contain',
            backgroundPosition: 'center center'
        };

        return (
            <div style={containerStyle}>
                <div style={divStyle}>
                    { Array.isArray(this.props.text)
                        ? this.props.text.map(function(item) {
                            return <p style={textStyle}>{item}</p>
                        })
                        : <p style={textStyle}>{this.props.text}</p>
                    }

                </div>
                {this.props.image
                    ? (<div style={mediaDivStyle}>
                        <img src={this.props.image} role="presentation" style={imageStyle}/>
                    </div>)
                    : null
                }

                {this.props.video
                    ? (<div style={mediaDivStyle}>
                        <div className="embed-responsive embed-responsive-16by9" style={embed}>
                            <iframe className="embed-responsive-item" src={this.props.video} allowFullScreen/>
                        </div>
                    </div>)
                    : null
                }
            </div>
        );
    }
}

export default BlogSnippet;
