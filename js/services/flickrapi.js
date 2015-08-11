angular.module('AngularFlickr').factory('FlickrAPI', function($http) {
  var api_key = '25ab953a12c6d2a43a4d449ecccad389'
  return {
    flickrPhotos: function() {
      return $http.get('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=' + api_key + '&user_id=132365033@N08&format=json&nojsoncallback=1').then(function(data){
        return data.data.photos;
      });
    },
    photoData: function(id, secret) {
      return $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=' + api_key + '&photo_id=' + id + '&secret=' + secret + '&format=json&nojsoncallback=1').then(function(data){
        return data.data.photo;
      });
    }
  }
});