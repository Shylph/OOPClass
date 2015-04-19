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
	var result = html;
	var emoticonList = html.match(/:[A-Za-z0-9+]*:/g);
	if(emoticonList!=null){
		for(var i=0;i<emoticonList.length;i++){
			result = html.replace(emoticonList[i],"<img src=\"graphics/emojis/"+emoticonList[i].slice(1,emoticonList[i].length-1)+".png\" class=emoticon>");
		}
	}
	return result;
}