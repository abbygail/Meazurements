var forgotApp = angular.module("forgotApp", ['ionic']);

forgotApp.run(function($ionicPlatform){
	$ionicPlatform.ready(function(){
		if(window.cordova && window.cordova.plugins.Keyboard){
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar){
			StatusBar.styleDefault();
		}
	});
});


forgotApp.controller("loginController", ['$scope',function($scope, $http)
{
	$scope.uName="";
	$scope.pWord="";

	$scope.login=function(){

		window.location.href='/templates/userAccountHome.html';
	}
}]);
