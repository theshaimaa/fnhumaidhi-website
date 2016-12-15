import React, {Component} from 'react';
import YoutubeOnHover from '../../assets/images/youtube/youtube-onhover.svg';
import Youtube from '../../assets/images/youtube/youtube.svg';

class EpisodesElement extends Component {
    constructor() {
        super();
        this.state = {
            overlay: `${Youtube}`,
        }
    }
    render() {
        const imageURL = this.props.snippet.thumbnails.standard.url;
        const videoLink = `https://www.youtube.com/watch?v=${this.props.snippet.resourceId.videoId}`;
        let text = this.props.snippet.description.substring(0, 200);

        if (text.length !== 0) {
            text += "..."
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

        const textContainerStyle = {
            backgroundColor: "transparent",
            margin: "10px auto",
            padding: "10px 0"
        };

        const textStyle = {
            textAlign: 'right'
        };

        const embed = {
            backgroundImage: 'url(' + imageURL + ')',
            backgroundSize: 'contain',
            backgroundPosition: 'center center'
        }

        return (
            <div className="col-lg-4" style={contentContainer}>
                <div className="embed-responsive embed-responsive-4by3" style={embed}>
                    {/* <iframe className="embed-responsive-item" src={videoURL} allowFullScreen/> */}
                    <a href={videoLink} target="blank"><img className="embed-responsive-item" src={this.state.overlay} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)} role="presentation"/></a>
                </div>
                <div dir="rtl" style={textContainerStyle}>
                    <p style={textStyle}>{text}</p>
                </div>
            </div>
        );
    }

    onMouseOver() {
        this.setState({overlay: `${YoutubeOnHover}`});
    }

    onMouseOut() {
        this.setState({overlay: `${Youtube}`});
    }
};

export default EpisodesElement;
