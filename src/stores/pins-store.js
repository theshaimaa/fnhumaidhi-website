import Api from '../utilities/api.js';
import Reflux from 'reflux';
import Actions from '../actions/actions.js';

module.exports = Reflux.createStore({
   listenables: [Actions],
   getPins: function() {
      return Api.get()
      .then(function(json) {
         this.pins = json.data;
         this.triggerChange();
      }.bind(this));
   },
   triggerChange: function() {
      this.trigger('change', this.pins);
   }
});
