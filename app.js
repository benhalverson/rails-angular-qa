'use strict';
angular.module('quoraClone', [])
	.controller('MainCtrl', [
			'$scope',
			function ($scope){
		$scope.posts = [
				{title: 'post 1', upvotes: 5},
				{title: 'post 2', upvotes: 2},
				{title: 'post 3', upvotes: 6},
				{title: 'post 4', upvotes: 10},
				{title: 'post 5', upvotes: 4}
			];
		$scope.addPost = function(){
			if(!$scope.title || $scope.title === ''){
				return;
			}
			$scope.posts.push({title: $scope.title, upvotes: 0});
			$scope.title = '';
		};
		$scope.incrementUpvotes = function (post) {
			post.upvotes += 1;
		};
		$scope.decrementDownvotes = function (post) {
			post.upvotes -= 1;
		}
		}]);