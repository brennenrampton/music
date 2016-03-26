angular.module('music', [])
  .controller('MainCtrl', [
    '$scope', '$http',
    function($scope, $http) {
      $scope.test = 'Hello world';
      $scope.songs = [{
        title: 'The Boxer',
        album: 'Greatest Hits',
        artist: 'Simon and Garfunkel',
        genre: 'Pop',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/c/c6/Sggreatesthits.jpg',
        upvotes: 7
      }];
      $scope.create = function(song) {
        return $http.post('/songs', song).success(function(data) {
          $scope.songs.push(data);
        });
      };
      $scope.addSong = function() {
        if ($scope.formContent === '') {
          return;
        }
        $scope.create({
          title: $scope.formTitle,
          album: $scope.formAlbum,
          artist: $scope.formArtist,
          genre: $scope.formGenre,
          imageURL: $scope.formURL,
          upvotes: 0
        });
        $scope.formTitle = '';
        $scope.formAlbum = '';
        $scope.formArtist = '';
        $scope.formGenre = '';
        $scope.formURL = '';
      };
      $scope.incrementUpvotes = function(song) {
        song.upvotes += 1;
      };
      $scope.getAll = function() {
        return $http.get('/songs').success(function(data) {
          angular.copy(data, $scope.songs);
        });
      };
  }]);