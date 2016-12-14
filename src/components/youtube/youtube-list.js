import React from 'react';
import Reflux from 'reflux';
import YoutubeStore from '../../stores/youtube-store.js';
import Actions from '../../actions/actions.js';
import Video from './youtube-video.js';

var Flickity = require('react-flickity-component')(React);
var flickityOptions = {
    initialIndex: 10,
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    autoPlay: true,
    resize: true,
}

var YoutubeList = React.createClass({
    mixins: [Reflux.listenTo(YoutubeStore, 'onChange')],
    getInitialState: function() {
        return {videos: [], cells: []}
    },

    componentDidMount: function() {
        Actions.getVideos();
    },

    render: function() {
        this.renderCell();
        let cells = this.state.cells;

        const cardStyle = {
            marginBottom: "1px"
        };

        if (this.state.cells.length === 0) {
            return (
                <div>
                    <h3>جاري التحميل...</h3>
                </div>
            )
        }

        return (
            <Flickity className={'carousel'} elementType={'div'} options={flickityOptions}>
                <div className="card" style={cardStyle}>
                    {cells[0]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[1]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[2]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[3]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[4]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[5]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[6]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[7]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[8]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[9]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[10]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[11]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[12]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[13]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[14]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[15]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[16]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[17]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[18]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[19]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[20]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[21]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[22]}
                </div>
                <div className="card" style={cardStyle}>
                    {cells[23]}
                </div>
            </Flickity>
        );
    },

    renderCell: function() {
        let cells = this.state.cells
        this.state.videos.map(video => cells.push(<Video key={video.id.videoId} {...video}/>));
    },

    onChange: function(events, videos) {
        this.setState({videos: videos});
    }
});

export default YoutubeList;
