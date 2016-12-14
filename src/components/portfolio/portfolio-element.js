import React, {Component} from 'react';

class PortfolioElement extends Component {
    render() {
        const mainContainerStyle = {
            margin: "10px auto",
            direction: 'rtl'
        };

        const containerStyle = {
            width: "95%",
            direction: 'rtl'
        };

        const row = {
            direction: 'rtl',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        };

        const nameRowStyle = {
            padding: "30px 0"
        };

        const contentRowStyle = {
            padding: "20px",
            margin: "10px",
            textAlign: "right"
        };

        const h3Style = {
            padding: "18px",
            fontSize: "2.4em"
        };

        const h4Style = {
            fontSize: "1.2em"
        };

        const pStyle = {
            fontSize: "1.1em"
        };

        const columnStyle = {
            backgroundColor: '#f8f8f8',
            padding: '20px',
            margin: '20px auto'
        };

        const imagesColumnStyle = {
            padding: '10px'
        };

        const imagesContentRowStyle = {
            margin: "auto 10px"
        };

        const mainImageStyle = {
            width: "100%"
        };

        return (
            <div className="container-fluid" style={mainContainerStyle}>
                <div className="row" style={nameRowStyle}>
                    <h3 style={h3Style}>{this.props.content.name}</h3>
                </div>
                <div className="container" style={containerStyle}>
                    <div dir="rtl" className="row" style={row}>
                        <div className="col-md-6" style={columnStyle}>
                            <div className="row" style={contentRowStyle}>
                                <h4 style={h4Style}>السنة: {this.props.content.year}</h4>
                                <h4 style={h4Style}>الموقع: {this.props.content.location}</h4>
                                <h4 style={h4Style}>نوع: {this.props.content.type}</h4>
                                <br/>
                                <h4 style={h4Style}>
                                    {this.props.content.title}:</h4>
                                <p style={pStyle}>
                                    {this.props.content.p1}</p>
                                <p style={pStyle}>
                                    {this.props.content.p2}</p>
                            </div>
                        </div>
                        <div className="col-md-6" style={imagesColumnStyle}>
                            <div className="row" style={imagesContentRowStyle}>
                                <div className="col-md-12" style={imagesColumnStyle}>
                                    <img src={this.props.content.images.one} style={mainImageStyle} role="presentation"/>
                                </div>
                            </div>
                            <div className="row" style={imagesContentRowStyle}>
                                <div className="col-md-4" style={imagesColumnStyle}>
                                    <img src={this.props.content.images.two} style={mainImageStyle} role="presentation"/>
                                </div>
                                <div className="col-md-4" style={imagesColumnStyle}>
                                    <img src={this.props.content.images.three} style={mainImageStyle} role="presentation"/>
                                </div>
                                <div className="col-md-4" style={imagesColumnStyle}>
                                    <img src={this.props.content.images.four} style={mainImageStyle} role="presentation"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default PortfolioElement;
