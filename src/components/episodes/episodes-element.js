import React, {Component} from 'react';

class EpisodesElement extends Component {
    render() {
        const imageURL = this.props.snippet.thumbnails.standard.url;
        const videoURL = `https://www.youtube.com/embed/${this.props.snippet.resourceId.videoId}`
        const text = this.props.snippet.title;

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

        const textContainerStyle = {
            backgroundColor: "transparent",
            margin: "10px auto",
            padding: "10px 0"
        };

        const textStyle = {
            textAlign: 'center'
        };

        const embed = {
            backgroundImage: 'url(' + imageURL + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
        }

        return (
            <div className="col-lg-4" style={contentContainer}>
                <div className="embed-responsive embed-responsive-4by3" style={embed}>
                    <iframe className="embed-responsive-item" src={videoURL} allowFullScreen/>
                </div>
                <div dir="rtl" style={textContainerStyle}>
                    <p style={textStyle}>{text}</p>
                </div>
            </div>
        );
    }
};

export default EpisodesElement;
