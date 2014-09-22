/**
 * Created by Sunny on 9/2/14.
 */

$(document).ready(function(){

    var $body = $('contents');
    $body.animate({scrollTop:'0'});
    $body.on({
        'mousewheel': function(e) {
            if (e.target.id == 'all') return;
            e.preventDefault();
            e.stopPropagation();
        }
    });
    window.onload = function(){
        $('#loading').css('display','none');
        $('#all').removeClass('hideAll');

        $('contents').off('mousewheel');

        $('#rollback').on('click',function(e){
            e.preventDefault();
            $('contents').animate({scrollTop:'0'},1500);
        });

        $('#explore').on('click',function(){
            $('contents').animate({scrollTop:'500'},1000);
        });

        $(window).scroll(function(){
            var cPos = $(this).scrollTop();
            var charts = $('#charts');
            var interestChart = $('#interestChart');
            var $avatar = $('#avatar');
            console.log("window position: " + cPos);
            var base = 40;
            if(cPos > base){
                $('#aboutmetitle').css('margin-bottom','50px');
                $avatar.fadeIn(1500);
                $avatar.css('margin-bottom','100px');
            }
            base+=320;
            if(cPos > base){
                $avatar.css('margin-bottom','');
                $('#info').fadeIn(1500);
            }
            base += 640;
            if(cPos > base){
                $('#tl1b').fadeIn(500);
                $('#tl1').fadeIn(1000);
            }
            base += 320;
            if(cPos > base){
                $('#tl2b').fadeIn(500);
                $('#tl2').fadeIn(1000);
            }
            base += 140;
            if(cPos > base){
                $('#tl3b').fadeIn(500);
                $('#tl3').fadeIn(1000);
            }
            base += 120;
            if(cPos > base){
                $('#tl4b').fadeIn(500);
                $('#tl4').fadeIn(1000);
            }
            base += 180;
            if(cPos > base){
                $('#tl5b').fadeIn(500);
                $('#tl5').fadeIn(1000);
            }
            base += 310;
            if(cPos > base){
                $('#tl6b').fadeIn(500);
                $('#tl6').fadeIn(1000);
            }
            base += 240;
            if(cPos > base){
                $('#tl7b').fadeIn(500);
                $('#tl7').fadeIn(1000);
            }
            base += 140;
            if(cPos > base){
                $('#tl8b').fadeIn(500);
                $('#tl8').fadeIn(1000);
            }
            base += 610;
            if(cPos > base && charts.data('is-display') === false){
                skillsChart();
//
                charts.data('is-display',true);
            }
            base += 650;
            if(cPos > base){
                $('#pj1').fadeIn(1200).css('margin-bottom', '200px');
                $('#projectTitle').css('margin-bottom', '50px');
            }
            base += 300;
            if(cPos > base){
                $('#pj1').css('margin-bottom', '');
                $('#pj2').fadeIn(1200).css('margin-bottom', '200px');
            }
            base += 220;
            if(cPos > base){
                $('#pj2').css('margin-bottom', '');
                $('#pj3').fadeIn(1200);

            }
            base += 600;
            if(cPos > base && interestChart.data('is-display') === false){
                iChart();
                interestChart.data('is-display',true);
            }
            drawCanvas();

        });

        var skillsChart = function(){
            //    Languages

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

    };

});
