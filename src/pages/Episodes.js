import React, {Component} from 'react';
import EpisodesPage from '../components/episodes/episodes.js';
import Divider from '../components/utilities/divider.js';

const episodes = [
    {
        title: 'جولة مع فرح',
        id: 'PLRLJAxcv_nBdOXlD66T6wOq1-mqxzxo3b',
        color: '#FFFFFF'
    }, {
        title: 'اسئلة و اجوبة',
        id: 'PLRLJAxcv_nBefBol_6Sv4vaLKAhc-LxFY',
        color: '#F8F8F8'
    }, {
        title: 'صممها بنفسك',
        id: 'PLRLJAxcv_nBe9UwEIA6oGlLEYZGUlBV1C',
        color: '#FFFFFF'
    }, {
        title: 'معلومات و نصائح',
        id: 'PLRLJAxcv_nBeRhe3dkOcYxlqAZC3aUnl0',
        color: '#F8F8F8'
    }, {
        title: "جديد و حلو",
        id: 'PLRLJAxcv_nBcMnU2f7-zDNbzi2khpMLvj',
        color: '#FFFFFF'
    }, {
        title: "قبل و بعد",
        id: 'PLRLJAxcv_nBenR7hIX5BRK7bKgp8cLap9',
        color: '#F8F8F8'
    }
];

class Episodes extends Component {
    render() {
        const container = {
            paddingTop: '20px',
        }
        const style = {
            paddingTop: '1.8rem',
        }
        return (
            <div>
                <div className="container-fluid">
                    <div className="container" style={container}>
                        <div className="row" style={style}>
                            <h3>تراقبوا حلقاتنا القادمة</h3>
                        </div>
                    </div>
                </div>
                <Divider/> {this.renderEpisodes()}
            </div>
        );
    }

    renderEpisodes() {
        return (episodes.map(function(episode) {
            return (
                <div key={episode.id}>
                    <EpisodesPage {...episode}/>
                </div>
            );
        }));
    }
};

export default Episodes;
