/**
 * Created by Sunny on 9/18/14.
 */
$(function(){
    var margin = {top: 20, right: 20, bottom: 80, left: 40},
        width = $(window).width() * 0.8 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .2);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10, "%");

    var svg = d3.select("#technologies").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("technologies.tsv", type, function (error, data) {
        globalData = data;
        x.domain(data.map(function (d) {
            return d.technology;
        }));
        y.domain([0, d3.max(data, function (d) {
            return d.proficiency;
        })]);

        console.log(xAxis);
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .attr("y", 6)
            .attr("x", 9)
            .attr("dy", ".35em")
            .attr("transform", "rotate(60)")
            .style("text-anchor", "start");

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("x", 12)
            .attr("dy", ".72em")
            .style("text-anchor", "start")
            .text("Proficiency");

        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) {
                return x(d.technology);
            })
            .attr("width", x.rangeBand())
            .attr("y", function (d) {
                return y(d.proficiency);
            })
            .attr("height", function (d) {
                return height - y(d.proficiency);
            });
    });

    function type(d) {
        d.proficiency = +d.proficiency;
        return d;
    }
    var resize = function(){
        var width = $(window).width() * 0.8 - margin.left - margin.right;

        x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .2);

        svg.select('.x.axis')
            .attr("transform", "translate(" + 0 + ", " + height + ")")
            .call(xAxis)
            .selectAll("text")
            .attr("y", 6)
            .attr("x", 9)
            .attr("dy", ".35em")
            .attr("transform", "rotate(60)")
            .style("text-anchor", "start");


        x.domain(globalData.map(function(d){
            return d.technology;
        }));

        d3.select('svg').attr('width', width + margin.left + margin.right)

        svg.selectAll('rect')
            .attr("x", function (d) {
                return x(d.technology);
            })
            .attr("width", x.rangeBand())

    };
    d3.select(window).on('resize',resize);
});