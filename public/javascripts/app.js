angular.module('music', [])
.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.test = 'Hello world';
		$scope.songs = [
      		{title:'The Boxer', album:'Greatest Hits', artist:'Simon and Garfunkel', Genre:'Pop', imageURL:'https://upload.wikimedia.org/wikipedia/en/c/c6/Sggreatesthits.jpg', upvotes:7}
    	];
    	$scope.addSong = function() {
      		$scope.comments.push({title:$scope.formTitle, album:$scope.formAlbum, artist:$scope.formArtist, Genre:$scope.formGenre, imageURL:$scope.formURL, upvotes:0});
      		$scope.formTitle='';
          $scope.formAlbum='';
          $scope.formArtist='';
          $scope.formGenre='';
          $scope.formURL='';
    	};
    	$scope.incrementUpvotes = function(song) {
      		song.upvotes += 1;
    	};
	}
]);


