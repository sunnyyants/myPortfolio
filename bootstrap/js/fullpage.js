/**
 * Created by Sunny on 2014/9/28.
 */
$(function(){
    $('#fullPage').fullpage({
        verticalCentered: true,
        resize : true,
        anchors :['Tingshen Yan','About me','Time-line','Technical skills','Projects','Interests','Blog'],
        scrollingSpeed:700,
        easing:'easeInQuart',
        animateAnchor:true,
        sectionSelector:'.section',
        menu: true,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips :['Tingshen Yan','About me','Time-line','Technical skills','Projects','Interests','Blog'],

        afterLoad: function(anchorLink, index){
            //using index
            if(index == '4'){
                loadChart()
            }
            //using anchorLink
            if(anchorLink == 'Interests'){
                iChart();
                drawCanvas();
            }
        }
    });


    var loadChart = function(){
        var options = {
        animationSteps: 120,
        pointLabelFontColor : "#fff",
        pointLabelFontSize : 12,
        pointLabelFontStyle : 'bold'
    };
        var Ldata = {
            labels: ['Java','C/C++','Python','MATLAB','HTML/CSS','JavaScript','SQL','LaTeX'],
            datasets:[
                {
                    labels:'Programming Language',
                    fillColor: "rgba(44,177,0,0.4)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [75, 35, 58, 53, 72, 71, 75, 25]
                },
                {
                    labels:'Base On',
                    fillColor: "rgba(192,224,228,0)",
                    strokeColor: "rgba(220,220,220,0)",
                    pointColor: "rgba(220,220,220,0)",
                    pointStrokeColor: "rgba(220,220,220,0)",
                    pointHighlightFill: "rgba(220,220,220,0)",
                    pointHighlightStroke: "rgba(220,220,220)",
                    data: [100,100,100,100,100,100,100,100]
                }

            ]
        };
        var languageCTX = $('#language').get(0).getContext("2d");
        var languageChart = new Chart(languageCTX).Radar(Ldata,options);

//    Web Development

        var Wdata = {
            labels: ['Hibernate','Strut2.x','JSP','Tomcat','Servlet','REST','XML','Maven'],
            datasets:[
                {
                    labels:'Programming Language',
                    fillColor: "rgba(165,23,177,0.5)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [75, 70, 75, 70, 72, 53, 50, 55]
                },
                {
                    labels:'Base On',
                    fillColor: "rgba(192,224,228,0)",
                    strokeColor: "rgba(220,220,220,0)",
                    pointColor: "rgba(220,220,220,0)",
                    pointStrokeColor: "rgba(220,220,220,0)",
                    pointHighlightFill: "rgba(220,220,220,0)",
                    pointHighlightStroke: "rgba(220,220,220,0)",
                    data: [100,100,100,100,100,100,100,100]
                }

            ]
        };
        var webCTX = $('#web').get(0).getContext("2d");
        var webChart = new Chart(webCTX).Radar(Wdata,options);


//    JavaScripts

        var Jdata = {
            labels: ['Ajax','jQuery','JSON','D3.js','Node.js','Angular.js','Ember.js','Backbone.js'],
            datasets:[
                {
                    labels:'Programming Language',
                    fillColor: "rgba(227,88,101,0.5)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [81, 75, 85, 55, 40, 35, 5, 20]
                },
                {
                    labels:'Base On',
                    fillColor: "rgba(192,224,228,0)",
                    strokeColor: "rgba(220,220,220,0)",
                    pointColor: "rgba(220,220,220,0)",
                    pointStrokeColor: "rgba(220,220,220,0)",
                    pointHighlightFill: "rgba(220,220,220,0)",
                    pointHighlightStroke: "rgba(220,220,220,0)",
                    data: [100,100,100,100,100,100,100,100]
                }
            ]
        };
        var jsCTX = $('#js').get(0).getContext("2d");
        var jsChart = new Chart(jsCTX).Radar(Jdata,options);


//    Technologies and Software
//
//            var Odata = {
//                labels: ['MySQL','MongoDB','Wordpress','Photoshop','Bootstrap','Github','Vim','IntelliJ IDEA','WebStorm','Eclipse'],
//                datasets:[
//                    {
//                        labels:'Programming Language',
//                        fillColor: "rgba(192,224,228,0.5)",
//                        strokeColor: "rgba(220,220,220,1)",
//                        pointColor: "rgba(220,220,220,1)",
//                        pointStrokeColor: "#fff",
//                        pointHighlightFill: "#fff",
//                        pointHighlightStroke: "rgba(220,220,220,1)",
//                        data: [80,65,60,60,70,65,50,78,78,70]
//                    },
//                    {
//                        labels:'Base On',
//                        fillColor: "rgba(192,224,228,0)",
//                        strokeColor: "rgba(220,220,220,0)",
//                        pointColor: "rgba(220,220,220,0)",
//                        pointStrokeColor: "rgba(220,220,220,0)",
//                        pointHighlightFill: "rgba(220,220,220,0)",
//                        pointHighlightStroke: "rgba(220,220,220,0)",
//                        data: [100,100,100,100,100,100,100,100,100,100]
//                    }
//
//                ]
//            };
//            var oCTX = $('#otherTech').get(0).getContext("2d");
//            var oChart = new Chart(oCTX).Radar(Odata,options);
    };

    var iChart = function(){
        //  Interests

        var Idata =  [
            {
                value: 95,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "Cooking"
            },
            {
                value: 80,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Cycling"
            },
            {
                value: 85,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Exploring new things"
            },
            {
                value: 50,
                color: "#3FDFA4",
                highlight: "#93DFA4",
                label: "Photography"
            },
            {
                value: 72,
                color: "#A81966",
                highlight: "#A84691",
                label: "Reading"
            },
            {
                value: 63,
                color: "#4D5360",
                highlight: "#616774",
                label: "Movies"
            }

        ];
        var iCTX = $('#interests').get(0).getContext("2d");
        var iChart = new Chart(iCTX).PolarArea(Idata);
    };

    var drawCanvas = function(){
        var cc = $("#cooking");
        var cctx=cc.get(0).getContext("2d");
        cctx.fillStyle="#F7464A";
        cctx.fillRect(0,0,15,15);

        var cb = $("#cycling");
        var bctx=cb.get(0).getContext("2d");
        bctx.fillStyle="#46BFBD";
        bctx.fillRect(0,0,15,15);

        var ce = $("#exploreNewThing");
        var ectx=ce.get(0).getContext("2d");
        ectx.fillStyle="#FDB45C";
        ectx.fillRect(0,0,15,15);

        var cp = $("#photography");
        var pctx=cp.get(0).getContext("2d");
        pctx.fillStyle="#3FDFA4";
        pctx.fillRect(0,0,15,15);

        var cr = $("#reading");
        var rctx=cr.get(0).getContext("2d");
        rctx.fillStyle="#A81966";
        rctx.fillRect(0,0,15,15);

        var cm = $("#movies");
        var mctx=cm.get(0).getContext("2d");
        mctx.fillStyle="#4D5360";
        mctx.fillRect(0,0,15,15);


    };
});