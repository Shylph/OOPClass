// Choose branch based on query string
var query = window.location.search;
if (query) {
	var branch = query.replace("?", "");
} else {
	var branch = "master";
}

// Load readme content
$.ajax({
//	url: "https://rawgit.com/richjenks/teepee/"+branch+"/readme.md",
	url:"http://shylph.github.io/OOPClass/README.md",
	dataType: 'text',
	success: function(data) {
		
		// Convert readme from markdown to html
		var converter = new Markdown.Converter();
/*
		// Show html
		$(".wrapper").html(converter.makeHtml(data));
*/
		// Show html
		$(".wrapper").html(converteEmoticon(converter.makeHtml(data)));

	}
});

function converteEmoticon(html){
	var result = html.replace(":smile:","<img src=\"graphics/emojis/checkered_flag.png\">");
	return result;
}