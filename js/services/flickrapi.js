angular.module('AngularFlickr').factory('FlickrAPI', function($http, $q) {
  var api_key = '25ab953a12c6d2a43a4d449ecccad389';
  return {
    flickrPhotos: function() {
      var defer = $q.defer();
      return $http.get('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=' + api_key + '&user_id=132365033@N08&format=json&nojsoncallback=1').then(function(data){
        if (data.data.photos){
          defer.resolve(data.data.photos);
        } else {
          defer.reject('Error getting photos!')
        }
        return defer.promise
      });
    },
    photoData: function(id, secret) {
      var defer = $q.defer();
      return $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=' + api_key + '&photo_id=' + id + '&secret=' + secret + '&format=json&nojsoncallback=1').then(function(data){
        if (data.data.photo){
          defer.resolve(data.data.photo);
        } else {
          defer.reject('Error with photo data');
        }
        return defer.promise
      });
    }
  }
});