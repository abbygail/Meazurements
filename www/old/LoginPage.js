var loginApp = angular.module("loginApp", ['ionic']);

loginApp.run(function($ionicPlatform){
	$ionicPlatform.ready(function(){
		if(window.cordova && window.cordova.plugins.Keyboard){
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar){
			StatusBar.styleDefault();
		}
	});
});

loginApp.controller("loginController", ['$scope',function($scope, $http){
	
	$scope.uName="";
	$scope.pWord="";

	$scope.login=function(form){	
		if(form.$valid){

			window.location.href='/templates/userAccountHome.html';
		}

	}
}]);


loginApp.controller("buttonController", ['$scope', '$location', '$http', function($scope, $http, $location){

	$scope.forgot=function(){	
		window.location.href='/templates/ForgotPassword.html';
	}

	$scope.signUp=function(){	
		window.location.href='/templates/SignUp.html';
	}


}]);