function 3()
{ 
var width = 1024;
var height = 768;
var ctrl = d3.select(".body").append("svg").attr("width", width).attr("height", height);
d3.csv("https://helenyhh.github.io/practice2/total.csv", 
	function(data)
	{
		var ln = data.length;
		console.log(data);
		var miny = d3.min(data,function(d){return d.sum;});
		console.log(miny);
		var lines = d3.line().x(function(d,i){return i*(width/ln);})
		.y(function(d){return height-d.sum*(height/400-miny)});
		ctrl.append("path").data([data]).attr("d", lines).attr("stroke", "red").attr("fill", "none");
	}
	);
}