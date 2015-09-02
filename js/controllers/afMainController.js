angular.module('AngularFlickr').controller('AfMainController', function(FlickrAPI, $scope, $filter){
  $scope.photos = [];
  var orderBy = $filter('orderBy');
  FlickrAPI.flickrPhotos()
  .then(function(data){
    var photos = data.photo;
    for (var i = 0; i < photos.length; i++) {
      var photo = photos[i];
      FlickrAPI.photoData(photo.id, photo.secret).then(function(data){
        data.timeInMS = Date.parse(data.dates.taken);
        $scope.photos.push(data);
      },
      function(error){
        $scope.error = "Error receving photo data";
      });
    }
  },
  function(error){
    $scope.error = "Error receving photos";
  });
  $scope.order = function(predicate, reverse) {
    $scope.photos = orderBy($scope.photos, predicate, reverse);
  };
});