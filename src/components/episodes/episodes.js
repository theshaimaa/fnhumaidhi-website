import React, {Component} from 'react';
import EpisodesList from './episodes-list.js';
import Service from '../../utilities/youtube.js';

class Episodes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            id: this.props.id,
            color: this.props.color,
            youtube: []
        }
    };

    componentWillMount() {
        Service.get(this.state.id).then(function(data) {
            this.setState({youtube: data.items});
        }.bind(this));
    };

    render() {
        const containerStyle = {
            padding: "30px 0px",
            backgroundColor: `${this.state.color}`
        };

        return (
            <div dir="rtl" className="container-fluid" style={containerStyle}>
                <EpisodesList {...this.state}/>
            </div>
        );
    }
};

export default Episodes;
