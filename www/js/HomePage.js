var homePage = angular.module("homePage", ['ionic','ui.router']);


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
		/*.state('main', {
            url:"/",
           // abstract: true,          
           //template: '<br><br><br><div class="loginButton"><button ng-click="logIn()">Log In </button><div><br><br><button ng-click="signUp()">Sign Up</button-->',
			controller: 'homeController'           
        })
		.state('main.login',{
		url: 'login',
			views:{ 'pageContent' : {
			templateURL: 'LoginPagePartial.html',
			//template: '<br><h1>Welcome</h1>',
			controller: 'homeController'
			}
			}
		})*/
		.state('home', {
			url: '/',
			templateURL: 'homePartial.html',
			controller: 'homeController'
		})
		.state('login', {
			url: '/login',
			templateURL: 'LoginPagePartial.html',
			controller: 'homeController'
		})		
		;

	$urlRouterProvider.otherwise('/');
}]);

homePage.controller('homeController', ['$scope', '$location', '$http', '$state', '$stateParams', function($scope, $http, $location, $state, $stateParams){
	
	$scope.logIn=function(){			
		$state.go('login');
		//window.location.href='templates/LoginPage.html';
	}

	$scope.signUp=function(){
		window.location.href='templates/SignUp.html';
	}
}]);