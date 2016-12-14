import React, {Component} from 'react';
import EpisodesElement from './episodes-element.js';

class EpisodesList extends Component {
    render() {
        let elements = this.props.youtube;

        const containerStyle = {
            padding: "30px 20px"
        };

        const rowStyle = {
            backgroundColor: "rgba(0, 0, 0, 0)",
            overflow: 'hidden',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
        };

        const h3Style = {
            padding: "18px",
            fontSize: "2.4em"
        };

        return (
            <div className="container" style={containerStyle}>
                <div className="row">
                    <h3 style={h3Style}>{this.props.title}</h3>
                </div>
                <div className="row" style={rowStyle}>
                    {this.renderBlogElements(elements)}
                </div>
            </div>
        );
    };

    renderBlogElements = (elements) => {

        if (elements.length === 0) {
            return (
                <div>
                    <h3>جاري التحميل...</h3>
                </div>
            )
        }

        return (elements.slice(0, 9).map(function(element, index) {
            return (<EpisodesElement key={index} snippet={element.snippet}/>);
        }));
    };
};

export default EpisodesList;
