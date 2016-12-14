const rootURL = 'https://api.pinterest.com/v1/me/pins/?access_token=AVh728Sk-grdeZWjv2FpK0bumDeFFIiwH_L6Hk9DYMOZ7aArrAAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cmetadata%2Cimage%2Cboard%2Ccolor%2Coriginal_link%2Cattribution%2Ccounts%2Ccreator%2Ccreated_at&limit1';

module.exports = {
   get: function() {
      return fetch(rootURL)
      .then(function(response) {
         return response.json()
      });
   }
};
