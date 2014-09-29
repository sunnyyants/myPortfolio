/**
 * Created by Sunny on 2014/9/28.
 */

(function(){
    var app = angular.module('onePageApp',[]);



    app.controller('SocalMediaController',['$scope',function($scope){
        $scope.socalMedias = [
            {
                href:'http://www.linkedin.com/in/sunnyyants',
                src:'bootstrap/images/icons/linkedin.png',
                id:null
            },
            {
                href:'mailto:yan.t@husky.neu.edu',
                src:'bootstrap/images/icons/gmail.png',
                id:"email"
            },
            {
                href:'http://www.github.com/sunnyyants',
                src:'bootstrap/images/icons/github.png',
                id:null
            },
            {
                href:'http://instagram.com/sunnyants',
                src:'bootstrap/images/icons/instagram.png',
                id:null
            }
        ]
    }]);

    app.directive('mySocalMedia',function(){
        return {
            restrict:'EA',
            template:'<div class="col-md-3 col-sm-3 col-xs-3" ng-repeat="socalMedia in socalMedias">' +
                '<a ng-href="{{socalMedia.href}}" ng-attr-id="{{socalMedia.id}}"><img ng-src="{{socalMedia.src}}" class="center-block"/></a>' +
                '</div>'
        }
    });

    app.controller('aboutMeController',['$scope',function($scope){
        $scope.images = [
            {
                id:0,
                imgClass:'item active',
                buttonClass:'active',
                src:'bootstrap/images/IMG_20130615_180218.jpg'
            },{
                id:1,
                imgClass:'item',
                buttonClass:'',
                src:'bootstrap/images/Screenshot_2014-09-21-00-58-52.png'
            },{
                id:2,
                imgClass:'item',
                buttonClass:'',
                src:'bootstrap/images/IMG_20140308_105224.jpg'
            },{
                id:3,
                imgClass:'item',
                buttonClass:'',
                src:'bootstrap/images/IMG_20140827_173253.jpg'
            },{
                id:4,
                imgClass:'item',
                buttonClass:'',
                src:'bootstrap/images/IMG_20140614_223157.jpg'
            }
        ];

        $scope.introductions = [
            "Hi there, my name is Tingshen Yan, I am a fresh Master of Science in Electrical Computer Engineering from Northeastern University, Boston, Massachusetts.",
            "Currently I am working as a web developer volunteer at the Sankofa Center, a non-profit organizations in Silicon Vally. Designing and building multiple interactive retail maps in their current site.",
            "I am very interested in web development especially the front end part, and I am actively seeking a full-time position in web development area."
        ]
    }]);

    app.directive('myGallery',function(){
        return{
            restrict:'E',
            template:'<ol class="carousel-indicators">' +
                '<li data-target="#carousel-example-generic" ng-repeat="image in images" data-slide-to="{{image.id}}" class="{{image.buttonClass}}"></li></ol>' +
                '<div class="carousel-inner">' +
                '<div ng-repeat="image in images" class="{{image.imgClass}}">' +
                '<img ng-src="{{image.src}}" class="img-circle img-responsive center-block"/></div></div>  '
        }
    });

    app.directive('myInfos',function(){
        return{
            restrict:'E',
            template:'<div class="col-md-4" ng-repeat="info in introductions"><p>{{info}}</p></div>'
        }
    });

    app.controller('SkillsetController',['$scope',function($scope){
        $scope.skills = [{
            id:"language",
            width:300,
            height:300,
            title:'Languages'
        },{
            id:"web",
            width:300,
            height:300,
            title:'Web Development'
        },{
            id:"js",
            width:300,
            height:300,
            title:'Javascripts'
        }]
    }]);

    app.directive("mySkillSet", function(){
        return{
            restrict:'E',
            template: '<div class="col-md-4" ng-repeat="skill in skills">' +
                '<canvas ng-attr-id="{{skill.id}}" width="{{skill.width}}" height="{{skill.height}}" class="center-block"></canvas>' +
                '<h3 class="text-center">{{skill.title}}</h3></div>'
        }
    });

    app.controller('myProjectController',['$scope',function($scope){
        $scope.projects = [{
            pid:'pj1',
            pjImgId:'pjp1',
            header:'Delicious',
            description:'Designed and implemented a restaurant online ordering application using MySQL, Hibernate, Struts2, JSPs and Twitter Bootstrap.'
        },{
            pid:'pj2',
            pjImgId:'pjp2',
            header:'Multi-Label Problems',
            description:'Investigated the the Ada-boost algorithm and built a classifier using Matlab. Tried to solve the multi-label classification problems using the Ada-boost classifier and analysed its quality.'
        },{
            pid:'pj3',
            pjImgId:'pjp3',
            header:'Blackjack',
            description:'Implemented a Python blackjack game. Used the Pygame framework and MySQL database.'
        }
        ]
    }]);

    app.directive('myProjects',function(){
        return{
            restrict:'E',
            template:'<div class="col-md-6 center-block" ng-repeat="project in projects" ng-attr-id="{{project.pid}}">' +
                '<div class="col-md-4 img-circle center-block" ng-attr-id="{{project.pjImgId}}"></div>' +
                '<div class="col-md-8 center-block"><h2 class="page-header">{{project.header}}!</h2>' +
                '<p class="text-center">{{project.description}}</p></div></div>'
        }
    });

    app.controller('myInterestsController',['$scope',function($scope){
        $scope.legends = [
            {
                id:'cooking',
                width:15,
                height:15,
                title:'Cooking'
            },{
                id:'cycling',
                width:15,
                height:15,
                title:'Cycling'
            },{
                id:'exploreNewThing',
                width:15,
                height:15,
                title:'Explore new things'
            },{
                id:'photography',
                width:15,
                height:15,
                title:'Photography'
            },{
                id:'reading',
                width:15,
                height:15,
                title:'Reading'
            },{
                id:'movies',
                width:15,
                height:15,
                title:'Movies'
            }
        ];

        $scope.interestsInfos = [
            {
                icon:"glyphicon glyphicon-search",
                text:"I love exploring new things, like latest technologies, new places, and books."
            },
            {
                icon:"glyphicon glyphicon-road",
                text:"I like sports, especially cycling and badminton."
            },
            {
                icon:"glyphicon glyphicon-cutlery",
                text:"I am passionate about cooking delicious foods, and I have my own recipes!"
            }
        ]
    }]);

    app.directive('myInterestsLegends',function(){
        return{
            restrict:'E',
            template:'<div class="col-md-2 " ng-repeat="legend in legends">' +
                '<canvas ng-attr-id="{{legend.id}}" width="{{legend.width}}" height="{{legend.height}}" class="center-block"></canvas>' +
                '<p>{{legend.title}}</p></div>'
        }
    });

    app.directive('myInterestsInfo',function(){
        return {
            restrict:'E',
            template:'<div class="col-md-4" ng-repeat="info in interestsInfos">' +
                '<i class="{{info.icon}}"></i>' +
                '<p>{{info.text}}</p></div>'
        }
    });

})();
