import React, {Component} from 'react';
import Billboard from '../components/billboard/billboard.js';
import Shop from '../components/shop/shop.js';
import New from '../components/new/new-introduction.js';
import Pinterest from '../components/pinterest/pinterest.js';
import Youtube from '../components/youtube/youtube.js';

class Home extends Component {
    render() {
        return (
            <div>
                <Billboard />
                <New/>
                <Shop/>
                <Pinterest/>
                <Youtube/>
            </div>
        );
    }
};

export default Home;
