var App = angular.module('portfolio', ['ngRoute', 'ngMaterial', 'ngMessages']);

// delayed class function for animations
function delayedClass(targetClass, newClass, classTimer){
	setTimeout(function(){
       $(targetClass).addClass(newClass);
   }, classTimer);
}

// animate my menu-links
delayedClass(".home-link", "bringIn", 1500);
delayedClass(".about-link", "bringIn", 1550);
delayedClass(".work-link", "bringIn", 1600);
delayedClass(".contact-link", "bringIn", 1650);


// set up my routes
App.config( function ($routeProvider, $locationProvider) {
	
	$routeProvider

	// which Controller to use and what tab to set as active
	.when('/', {
		templateUrl:'pages/home.html',
		controller: 'homeController',
		activetab: 'home'
	})
	.when('/about', {
		templateUrl:'pages/about.html',
		controller: 'aboutController',
		activetab: 'about'
	})
	.when('/work', {
		templateUrl:'pages/work.html',
		controller: 'workController',
		activetab: 'work'
	})
	.when('/contact', {
		templateUrl:'pages/contact.html',
		controller: 'contactController',
		activetab: 'contact'
	})
	.when('/thank-you', {
		templateUrl:'pages/thank-you.html',
		controller: 'thanksController',
		activetab: 'contact'
	})
	.otherwise({
		templateUrl: 'pages/404.html',
		controller: 'thanksController',
		activetab: 'contact'
	})
})
// ========================================================== //
// == didn't split controllers to seperate files because of how small the project is  == //
// ========================================================== //

// top nav controller
App.controller('topNav', ['$scope', '$route',  function($scope, $route){
	$scope.$route = $route;
	$scope.currentNavItem = $route;
}]);

// home controller
App.controller('homeController', ['$scope', function($scope){
	// set my videos as an array to allow for  mutliple random selection of video background
	var vidBackPath = ["videos/13.mp4"]
	// randomly select a video
	var randomVid = Math.floor(Math.random() * vidBackPath.length);
	// get the path of the random video
	var randomVid = vidBackPath[randomVid];
	// bind the video url to the source on the home page
	$scope.vidBack = randomVid;


	$scope.pageClass = 'home-page';
	// fade out the the background color to make video behind it visible
	delayedClass(".video-overlay", "bringIn", 2000);
	// fade in home page text
	delayedClass(".hidden-text", "bringIn", 3000);
}]);

// about page controller
App.controller('aboutController', ['$scope',  function($scope){
	$scope.pageClass = 'about-page';
	// animate the tech icons 
	delayedClass(".tech-icon", "animate", 1500);
}]);

// work page controller
App.controller('workController', ['$scope', '$http',  function($scope, $http){
	$scope.pageClass = 'work-page';

	// fade in screenshots
	delayedClass(".still", "animate", 1000);
	// grab my json file with all my individual project data
	$http.post('work.json').success(function(data){
		$scope.projects = data;
	})
}]);

// contact page controller
App.controller('contactController', ['$scope', function($scope){
	$scope.pageClass = 'contact-page';

	// allow MATERIAL to use it's built in hints tool for forms
	$scope.showHints = true;
    	$scope.user = {
	      email: '',
	      firstName: '',
	      lastName: '',
	      message: '',
	      phone: ''
    	};
}]);

// thank you (form redirect) page controller
App.controller('thanksController', ['$scope',  function($scope){
	$scope.pageClass = 'contact-page';
}]);

// set up my directives for the work page repeating template
App.directive('projectPosters', function(){
	return {
		templateUrl: 'directives/project-poster.html',
	}
})