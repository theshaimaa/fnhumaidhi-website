import React from 'react';
import ShopList from './shop-list.js';
import Lamp from '../../assets/images/shop/lamps.jpg';
import Household from '../../assets/images/shop/household.jpg';
import Furniture from '../../assets/images/shop/furniture.jpg';

const elements = [
    {
        title: 'إضاءة',
        imageURL: `${Lamp}`,
        link: 'http://piecesbyfarah.com/mobi/pieces#Lighting',
    }, {
        title: 'الاكسسوارات المنزلية',
        imageURL: `${Household}`,
        link: 'http://piecesbyfarah.com/mobi/pieces#Dantelle',
    }, {
        title: 'أثاث',
        imageURL: `${Furniture}`,
        link: 'http://piecesbyfarah.com/mobi/pieces#Furniture',
    }
];

var Shop = React.createClass({
    render: function() {

        const containerStyle = {
            padding: "60px 20px"
        };

        const hStyle = {
            padding: "20px",
            fontSize: "3em"
        };

        const pStyle = {
            padding: "10px",
            fontSize: "1.1em",
            lineHeight: "1.5em"
        };

        const rowStyle = {
            backgroundColor: "rgba(0, 0, 0, 0)",
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }

        return (
            <div dir="rtl" style={containerStyle} className="container">
                <div className="row">
                    <h2 style={hStyle}>تسوق هنا</h2>
                    <p style={pStyle}>بيسيز باي فرح هو خط انتاج لاثاث و اكسسوارات منزليه خاص بي مصمم بالكامل ويتم انتاجه بكل فخر في الكويت. قطع يحتاجها كل بيت، مصممه بشكل حديث من غير ان تفقد وظيفتها.</p>
                </div>
                <div className="row" style={rowStyle}>
                    {this.renderShopElements()}
                </div>
            </div>
        );
    },
    renderShopElements: function() {
        return (elements.map(function(element, index) {
            return (<ShopList key={index} element={element}/>);
        }));
    }
});

export default Shop;
