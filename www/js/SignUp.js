var signUpApp = angular.module("signUpApp", ['ionic']);

signUpApp.run(function($ionicPlatform){
	$ionicPlatform.ready(function(){
		if(window.cordova && window.cordova.plugins.Keyboard){
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar){
			StatusBar.styleDefault();
		}
	});
});

signUpApp.controller("signUpController", ['$scope', '$location', '$http', function($scope, $http, $location){
	

	$scope.signUpInfo={};  

	$scope.signUp = function(){
		
	}

}]);

signUpApp.controller("buttonController", ['$scope', '$location', '$http', function($scope, $http, $location){
  
	$scope.logIn=function(){	
		window.location.href='/templates/LoginPage.html';
	}


}]);