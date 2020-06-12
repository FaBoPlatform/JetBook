window.onload = function() {
    var tag = document.getElementsByTagName('img');
    console.log(tag.length)
    for (var i = 0; i < tag.length; i++) {
        console.log(tag.length)
        if(tag[i].alt == "YOUTUBE") {
        	var src = tag[i].src;
        	src = src.match(".+/(.+?)$")[1];
        	tag[i].outerHTML 
        	var out = "";
        	out += "<div class=\"youtube\">";
        	out += "<iframe width=\"853\" height=\"480\" ";
        	out += "src=\"https://www.youtube.com/embed/";
        	out += src;
        	out += "\" ";
        	out += "frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
        	out += "</div>"
        	tag[i].outerHTML = out;
        }
    }
}