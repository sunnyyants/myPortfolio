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
            "Currently I am working as a web developer volunteer at the Sankofa Center, which is one of the non-profit organizations in Silicon Vally. My responsibilities are designing and building an interactive retail partners' distribution map in their current site.",
            "I am very interested in web development and I am actively seeking a full-time position in web development area."
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
            template:'<div class="col-md-10 col-md-offset-1" ng-repeat="project in projects" ng-attr-id="{{project.pid}}">' +
                '<div class="col-md-4 img-circle center-block" ng-attr-id="{{project.pjImgId}}"></div>' +
                '<div class="col-md-9"><h2 class="page-header">{{project.header}}!</h2>' +
                '<p>{{project.description}}</p></div></div>'
        }
    });

    app.controller('myTimeLineController',['$scope',function($scope){
        $scope.events=[
            {
                tlId:'tl1',
                tlbId:'tl1b',
                tlClass:"timeline-inverted",
                icon:"glyphicon-globe",
                badgeClass:"info",
                title:'Web Developer Volunteer at The Sankofa Center',
                timeAndPlace:'July 14, 2014 in Sunnyvale, CA',
                isList:true,
                contents:[
                    "Implemented a web crawler using Python Scrapy and fetch retail partners' information from the old website, and finally transformed data into JSON.",
                    "Designed an interactive and responsive partners' distribution map used D3.js, AJAX, and an open source customizable SVG map visualizations Javascript file called DataMaps.",
                    "Built a CDN for websites through Google App Engine, and used Photoshop to optimize photos."
                ]
            },
            {
                tlId:'tl2',
                tlbId:'tl2b',
                tlClass:"timeline-inverted",
                icon:"glyphicon-bookmark",
                badgeClass:"success",
                title:'Graduated from Northeastern University',
                timeAndPlace:'May 2, 2014 in Boston, MA',
                isList:false,
                contents:"GPA: 3.50 / 4.00"
            },
            {
                tlId:'tl3',
                tlbId:'tl3b',
                tlClass:"",
                icon:"glyphicon-pencil",
                badgeClass:"danger",
                title:'Study in Northeastern University',
                timeAndPlace:'September 6, 2012 in Boston, MA',
                isList:false,
                contents:"Pursing Master of Science degree at Electrical Computer Engineering"
            },
            {
                tlId:'tl4',
                tlbId:'tl4b',
                tlClass:"timeline-inverted",
                icon:"glyphicon-bookmark",
                badgeClass:"success",
                title:'Graduated from Zhuhai College of Jilin University',
                timeAndPlace:'July 6, 2012 in Zhuhai, China',
                isList:true,
                contents:[
                    "GPA: 3.76 / 4.00",
                    "3 times scholarship",
                    "Top rewards graduate"
                ]
            },
            {
                tlId:'tl5',
                tlbId:'tl5b',
                tlClass:"",
                icon:"glyphicon-wrench",
                badgeClass:"info",
                title:"Associate Engineer at Women and Children's Hospital",
                timeAndPlace:'January 3, 2012 in Guangzhou, China (3 months)',
                isList:true,
                contents:[
                    "Maintained connections between databases and devices.",
                    "Tested the network switches and built up the WLAN and LAN connections.",
                    "Fixed computer malfunctions, including hard disks recovery, OS installation."
                ]
            },
            {
                tlId:'tl6',
                tlbId:'tl6b',
                tlClass:"",
                icon:"glyphicon-edit",
                badgeClass:"info",
                title:'Teaching Assistant at Zhuhai College of Jilin University',
                timeAndPlace:'February 2, 2011 in Zhuhai, China (5 months)',
                isList:true,
                contents:[
                    "Teaching Assistant at Zhuhai College of Jilin University",
                    "Prepared and maintained laboratory facilities before and after class.",
                    "Guided the students to identify the difference of electrical components in lab."
                ]
            },
            {
                tlId:'tl7',
                tlbId:'tl7b',
                tlClass:"timeline-inverted",
                icon:"glyphicon-pencil",
                badgeClass:"danger",
                title:'Study in Zhuhai College of Jilin University',
                timeAndPlace:'September 1, 2008 in Zhuhai, China',
                isList:false,
                contents:"Pursing Bachelor degree of Science at Electrical Engineering"
            },
            {
                tlId:'tl8',
                tlbId:'tl8b',
                tlClass:"",
                icon:"glyphicon-user",
                badgeClass:"",
                title:'Born',
                timeAndPlace:'April 20, 1990 in Canton, China',
                isList:false,
                contents:"Hello world!"
            }
        ]
    }]);

    app.directive('myTimeLine',function(){
        return{
            restrict:'A',
            template:'<li ng-repeat="event in events" class="{{event.tlClass}}" >' +
                '<div class="timeline-badge {{event.badgeClass}}" ng-attr-id="{{event.tlbId}}"><i class="glyphicon {{event.icon}}"></i></div>' +
                '<div class="timeline-panel" ng-attr-id="{{event.tlId}}" >' +
                '<div class="timeline-heading"><h4 class="timeline-title">{{event.title}}</h4>' +
                '<p><small><i class="glyphicon glyphicon-time"></i>{{event.timeAndPlace}}</small></p></div>' +
                '<div class="timeline-contents"><p ng-if="!event.isList">{{event.contents}}</p><ul ng-if="event.isList">' +
                '<li ng-repeat="content in event.contents">{{content}}</li></ul></div></div></li>'
        }
    })
})();
