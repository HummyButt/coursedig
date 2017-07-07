
//Setup Rounting For All Pages...
CDig.config(['$stateProvider','$urlRouterProvider','$locationProvider','TITLES',function($stateProvider,$urlRouterProvider,$locationProvider,TITLES) {

	//Redirect to base url, in case of incorrect url hit
	$urlRouterProvider.otherwise('/');
       
    $stateProvider.
    state('/',{
        url: '/',
        templateUrl: 'views/landing.html',
        data: {pageTitle: TITLES.LANDING_PAGE}

    })
    .state('test',{
        url : '/test',
        template : '<h1>Hello world</h1>',
        data: {pageTitle: TITLES.SIGNUP_PAGE}
    });

	// Html 5 mode it enabled to remove # tag from URL,works on HTML 5  supported browsers
    $locationProvider.html5Mode({ enabled: true });    
    
    console.log($stateProvider);
      
}]);