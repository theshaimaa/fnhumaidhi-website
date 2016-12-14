import React, {Component} from 'react';
// import * as firebase from 'firebase';
import Billboard from '../components/billboard/billboard.js';
import Widget from '../components/widget/widget.js';
import Shop from '../components/shop/shop.js';
import Blog from '../components/blog/blog-introduction.js';
import Pinterest from '../components/pinterest/pinterest.js';
import Youtube from '../components/youtube/youtube.js';

class Home extends Component {
    render() {
        return (
            <div>
                <Billboard/>
                <Widget/>
                <Shop/>
                <Blog/>
                <Pinterest/>
                <Youtube/>
            </div>
        );
    }
};

export default Home;
