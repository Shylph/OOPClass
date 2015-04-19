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
	var emoticonList = html.match(/:\s:/g);
	var result;
	for(var i=0;i<remoticonList.length;i++){
		result = html.replace(":"+emoticonList[i]+":/g","<img src=\"graphics/emojis/"+emoticonList[i]+".png\">");
	}
	return result;
}