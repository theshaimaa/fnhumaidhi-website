import Api from '../utilities/youtube-api.js';
import Reflux from 'reflux';
import Actions from '../actions/actions.js';

module.exports = Reflux.createStore({
   listenables: [Actions],
   getVideos: function() {
      return Api.get()
      .then(function(json) {
         this.videos = json.items;
         this.triggerChange();
      }.bind(this));
   },
   triggerChange: function() {
      this.trigger('change', this.videos);
   }
});
