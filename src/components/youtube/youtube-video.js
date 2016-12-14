import React, { Component } from 'react'

class YouTubeVideo extends Component {
  render() {
    const style = { backgroundImage: 'url("https://dummyimage.com/320x180/333333/333333.jpg")'};
    const thumbnail = this.props.snippet.thumbnails.medium.url;
    const url = 'https://www.youtube.com/watch?v=' + this.props.id.videoId;

    return (
      <a href={url} target="_blank"><img src={thumbnail} style={style} role="presentation"/></a>
    );
  }
};

export default YouTubeVideo;
