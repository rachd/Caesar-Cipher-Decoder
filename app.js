var app = angular.module("caesar", []);

app.controller("CaesarController", ['$scope', function($scope) {
	$scope.options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ,17 ,18, 19, 20, 21, 22, 23, 24, 25];
	$scope.decode = function() {
		$scope.decodedMessage = "";
		for (var i = 0; i < $scope.encodedMessage.length; i++) {
			if ($scope.encodedMessage[i].charCodeAt() >= 65 && $scope.encodedMessage[i].charCodeAt() <= 90) {
				//capital letters
				$scope.decodedMessage += String.fromCharCode(((($scope.encodedMessage[i].charCodeAt() + $scope.switchValue) - 65) % 26) + 65);
			} else if ($scope.encodedMessage[i].charCodeAt() >= 97 && $scope.encodedMessage[i].charCodeAt() <= 122) {
				//lowercase letters
				$scope.decodedMessage += String.fromCharCode(((($scope.encodedMessage[i].charCodeAt() + $scope.switchValue) - 97) % 26) + 97);
			} else {
				//all other characters
				$scope.decodedMessage += $scope.encodedMessage[i];
			}
		}
	};

}]);
