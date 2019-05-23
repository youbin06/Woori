<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
<%@ include file="top.jsp" %>

<%@ include file="checkBlink.jsp" %>
	
	<title>Home</title>
</head>
<body>

	<%@ include file="menu.jsp" %>
	
	<div class="container">
	
	<h3>게시글 작성</h3>
		<form method="post" action="board_write.do" name="f">
		  
		  <div class="form-group">
		    <label>제목</label>
		    <input type="text" class="form-control" id="board_title" name="board_title" placeholder="제목을 입력하세요.">
		  </div>
		  
		  <div class="form-group">
		    <label>작성자</label>
		    <input type="text" class="form-control" id="board_id" name="board_id" placeholder="작성자를 입력하세요.">
		  </div>
		  
		  <div class="form-group">
		    <label>내용</label>
		   	<textarea class="form-control" rows="10" id="board_content" name="board_content" maxlength="2048" placeholder="내용을 입력하세요."></textarea>
		  </div>
		  
		  <button type="button" class="btn btn-info" onclick="check();">작성</button> <a href="board.do"><button type="button" class="btn btn-primary">목록</button></a>
		</form>
	</div>
	
	
</body>
</html>
