var userAccountHome =angular.module("userAccountHome", ['ionic']);


userAccountHome.run(function($ionicPlatform){
	$ionicPlatform.ready(function(){
		if(window.cordova && window.cordova.plugins.Keyboard){
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar){
			StatusBar.styleDefault();
		}
	});
});



userAccountHome.factory('CounterFactory',[function(){

	var service = {};
	var c = {
		counters: [{name: "Starting Counter", count: 0}]		
	};

	service.getCounters = function(){
		return c.counters;
	}

	service.addNewCounter = function(newName){
		c.counters.push({name: newName, count: 0});
	}

	service.deleteCounter = function($index){
		c.counters.splice($index,1);
	}

	service.moveCounter=function(counter, fromIndex, toIndex) {
			c.counters.splice(fromIndex,1);
			c.counters.splice(toIndex,0,counter);
	}

	service.addToCounter = function(counter){

		counter.count += 1;		
	}

	service.subtractFromCounter = function(counter){

		counter.count -= 1;		
	}

	return service;
}])

userAccountHome.controller("counterController", ['$scope', 'CounterFactory', function($scope, CounterFactory){
		
	$scope.counterModel={

		showDelete: false,
		showMove: false,

		counters:CounterFactory.getCounters()
	};

	$scope.deleteCounter=function($index){
			CounterFactory.deleteCounter($index)			
	}

	$scope.moveCounter=function(counter, fromIndex, toIndex) {
			CounterFactory.moveCounter(counter, fromIndex, toIndex);
	}

	$scope.addToCounter = function(counter){
		CounterFactory.addToCounter(counter)			
	}

	$scope.subtractFromCounter = function(counter){

		CounterFactory.subtractFromCounter(counter);		
	}

	$scope.addCounter = function(newName){		
		CounterFactory.addNewCounter(newName);		
	}

}]);
