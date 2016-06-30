var homePage = angular.module("homePage", ['ionic', 'ui.router']);


homePage.run(function($ionicPlatform){
	$ionicPlatform.ready(function(){
		if(window.cordova && window.cordova.plugins.Keyboard){
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar){
			StatusBar.styleDefault();
		}
	});
});

homePage.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider		
		.state('home', {
			url: "/home",
			templateUrl: "LoginPagePartial.html",			
			controller: "homeController"
		})		
		.state('signUp', {
			url: "/signUp",
			templateUrl: "signUp.html",		
			controller: "homeController"
		})	
		.state('login', {
			url: "/login",
			templateUrl: "LoginPagePartial.html",
			controller: "homeController"
		})	
		.state('forgot', {
			url: "/forgotPassword",
			templateUrl: "forgot.html",
			controller: "homeController"
		})		
		;

	$urlRouterProvider.otherwise("/home");
}])


homePage.controller('homeController', ['$scope', '$location', '$http', '$state', '$stateParams', function($scope, $http, $location, $state, $stateParams){
	
	$scope.logIn=function(){					
		$state.go('login');			
	}
	$scope.signUp=function(){
		$state.go('signUp');		
	}
	$scope.forgot=function(){					
		$state.go('forgot');	
	}
	$scope.goToAccount=function(){
		window.location.href='templates/userAccountHome.html';
	}
}])
