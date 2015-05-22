'use strict';
angular.module('quoraClone', [])
	.controller('MainCtrl', [$scope, function ($scope) {
			$scope.posts = [
				'post 1',
				'post 2'];
		}]);