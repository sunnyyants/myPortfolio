/**
 * Created by Sunny on 9/18/14.
 */
$(function(){
    var resize = function(){
        $('#technologies').empty();
        var margin = {top: 20, right: 40, bottom: 30, left: 40},
            width = $(window).width() - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .3);

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
            x.domain(data.map(function (d) {
                return d.technology;
            }));
            y.domain([0, d3.max(data, function (d) {
                return d.proficiency;
            })]);

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 2)
                .attr("dy", ".72em")
                .style("text-anchor", "end")
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
            d.frequency = +d.frequency;
            return d;
        }
    };
    resize();
    $(window).on('rezize',resize);
});