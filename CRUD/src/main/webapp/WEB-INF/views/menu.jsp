<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!-- Navigation -->
<ul class="nav nav-tabs">
	<li role="presentation" class="home"><a href="index.do">Home</a></li>
	<li role="presentation" class="board">
		<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
			게시판 
		<span class="caret"></span>
		</a>
		<ul class="dropdown-menu" role="menu">
      		<li><a href="board.do">게시판 목록</a></li>
      		<li><a href="boardAjax.html">게시판 목록 Ajax</a></li>
    	</ul>
	</li>
	<li role="presentation" class="calc"><a href="calculator.do">계산기</a>
	<li role='presentation' class='html'><a href='html.html'>Html</a></li>
</ul>

<script>
	var url = document.location.href;

	if (url.indexOf("index") > -1) {
		$(".home").addClass("active");

	} else if (url.indexOf("board") > -1) {
		$(".board").addClass("active");

	} else if (url.indexOf("calc") > -1) {
		$(".calc").addClass("active");
		
	} else if (url.indexOf("html") > -1) {
		$(".html").addClass("active");
	}
</script>