const rootURL = 'https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCGrcCEaO32HvEZd634k_07g&maxResults=25&key=AIzaSyCLtK-4sJOCq7mNA6ndx99VX9JFrUabtNI';

module.exports = {
   get: function() {
      return fetch(rootURL)
      .then(function(response) {
         return response.json()
      });
   }
};
