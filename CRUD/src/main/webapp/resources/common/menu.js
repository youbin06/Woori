var html = "<ul class='nav nav-tabs'>";
	html += "<li role='presentation' class='home'><a href='index.do'>Home</a></li>";
	html += "	<li role='presentation' class='dropdown board'><a class='dropdown-toggle' data-toggle='dropdown' href='#' role='button' aria-expanded='false'>게시판<span class='caret'></span></a>";
	html += "		<ul class='dropdown-menu' role='menu'>";
	html += "			<li><a href='board.do'>게시판 목록</a></li>";
	html += "			<li><a href='boardAjax.html'>게시판 목록 Ajax</a></li>"; 
	html += "		</ul></li>";
	html += "	<li role='presentation' class='calc'><a href='calculator.do'>계산기</a></li>";
	html += "   <li role='presentation' class='html'><a href='html.html'>Html</a></li>";
	html += "</ul>";
document.write(html);

$(document).ready(function(){
	var url = location.href;

	if (url.indexOf("index") > -1) {
		$(".home").addClass("active");

	} else if (url.indexOf("board") > -1) {
		$(".board").addClass("active");

	} else if (url.indexOf("calc") > -1) {
		$(".calc").addClass("active");
		
	} else if (url.indexOf("html") > -1) {
		$(".html").addClass("active");
	}
});



