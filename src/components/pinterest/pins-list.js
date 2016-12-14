import React from 'react';
import Reflux from 'reflux';
import PinsStore from '../../stores/pins-store.js';
import Actions from '../../actions/actions.js';
import Pin from './pin.js';

var PinsList = React.createClass({
   mixins: [
      Reflux.listenTo(PinsStore, 'onChange')
   ],
   getInitialState: function() {
      return {
         pins: []
      }
   },
   componentWillMount: function() {
      Actions.getPins();
   },
   render: function() {
      const style = {
         textAlign: "center",
      };

      if (this.state.pins.length === 0) {
          return (
              <div>
                  <h3>جاري التحميل...</h3>
              </div>
          )
      }

      return (
         <div className="row" style={style}>
            {this.renderPins()}
         </div>
      );
   },
   renderPins: function() {
      return (
         this.state.pins.slice(0, 8).map(function(pin) {
            return (
               <Pin key={pin.id} pins={pin}/>
            );
         })
      );
   },
   onChange: function(events, pins) {
      this.setState({pins: pins});
   }
});

export default PinsList;
