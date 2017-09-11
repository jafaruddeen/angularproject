var app = angular.module('webApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {templateUrl:'partials/home.html', controller:'PageCtrl'})
	.when('/home', {templateUrl:'partials/home.html', controller:'PageCtrl'})
	.when('/about', {templateUrl:'partials/about.html', controller:'PageCtrl'})
	.when('/faq', {templateUrl:'partials/faq.html', controller:'PageCtrl'})
	.when('/blog', {templateUrl:'partials/blog.html', controller:'BlogCtrl'})
	.when('/blog-post', {templateUrl:'partials/blog_item.html', controller:'BlogCtrl'})
	.otherwise('/404', {templateUrl:'partials/404.html', controller:'PageCtrl'});	
}])
.controller('PageCtrl', function($scope){
	$scope.alertPop = function() {
        $('.blackbg').show();
    };
	$scope.hideAll = function(){
		$('.blackbg').hide();
	};
	
	$('.carousel').carousel({
	  interval: 2000
	});
	
	$('#accordion').collapse({
	  toggle: false
	});
	
	$scope.nav = {
		navItems:['home','about','faq','blog', 'blog-post'],
		selectedIndex:0,
		navClick:function($index){
			$scope.nav.selectedIndex = $index;	
		}
		
	}
})

.filter('removeSpacesThenLowercase', function () {
        return function (text) {
			var str = text.replace(/-/g, ' ');
			return str.toLowerCase();
        };
})

.controller('BlogCtrl', function(){});