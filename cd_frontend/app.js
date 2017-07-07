var CDig = angular.module('coursedig', [
                                        'ui.router'  
                                       ]);

//Init global settings and run the app
CDig.run(['$rootScope','$state',function($rootScope,$state) {
 	 //for accessing state from views 
 	 $rootScope.$state = $state;
}]);


