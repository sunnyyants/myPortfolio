/**
 * Created by Sunny on 9/20/14.
 */
(function(){
    var app = angular.module('myPortfolio',[]);

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
            template:'<div class="col-md-3 col-sm-3 col-xs-3 center-block " ng-repeat="socalMedia in socalMedias">' +
                '<a ng-href="{{socalMedia.href}}" ng-attr-id="{{socalMedia.id}}"><img ng-src="{{socalMedia.src}}" ng-class="center-block"/></a>' +
                '</div>'
        }
    })

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
    }])

    app.directive("mySkillSet", function(){
        return{
            restrict:'E',
            template: '<div class="col-md-4" ng-repeat="skill in skills">' +
                '<canvas ng-attr-id="{{skill.id}}" width="{{skill.width}}" height="{{skill.height}}" class="center-block"></canvas>' +
                '<h3 class="text-center">{{skill.title}}</h3></div>'
        }
    })

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
    })
})();