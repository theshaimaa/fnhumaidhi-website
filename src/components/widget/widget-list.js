import React, {Component} from 'react';

class WidgetElement extends Component {
    render() {
        return (
            <div className="col-md-4" style={columnOne}>
              <div className="newsletter-widget" style={element}>
                <h4 style={title}>{this.state.newsletter.title}</h4>
                <p style={text}>{this.state.newsletter.text}</p>
                <div className="contentButton" style={button}>
                  <button type="button" className="btn btn-outline-secondary blackButton">{this.state.newsletter.button}</button>
                </div>
              </div>
            </div>
        )
    }
};

export default WidgetList;
