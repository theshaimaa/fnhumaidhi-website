import 'whatwg-fetch';

const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyCLtK-4sJOCq7mNA6ndx99VX9JFrUabtNI&maxResults=10&playlistId=';
let service = {
    get: function(url) {
        return fetch(baseURL + url)
        .then(function(response) {
            return response.json();
        });
    }
};

export default service;
