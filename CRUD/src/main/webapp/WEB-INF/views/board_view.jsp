<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
<%@ include file="top.jsp" %>

<title>Home</title>
</head>
<body>

	<%@ include file="menu.jsp" %>
	
	<div class="container"> 
		<h3>게시글 상세</h3>
		
		<table>
			<tr>
				<th style="width: 100px">번호</th>
				<td>${dto.board_num }</td>
			</tr>
			
			<tr style="height: 20px">
				<td colspan="2"></td>
			</tr>
			
			<tr>
				<th>제목</th>
				<td>${dto.board_title }</td>
			</tr>
			
			<tr style="height: 20px">
				<td colspan="2"></td>
			</tr>
			
			<tr>
				<th>작성자</th>
				<td>${dto.board_id }</td>
			</tr>
			
			<tr style="height: 20px">
				<td colspan="2"></td>
			</tr>
			
			<tr>
				<th>내용</th>
			</tr>
			
			<tr>
				<td>${dto.board_content }</td>
			</tr>
			
			<tr style="height: 20px">
				<td colspan="2"></td>
			</tr>
		</table>
		
		<a href="board_update.do?board_num=${dto.board_num }"><button type="button" class="btn btn-info">수정</button></a>
		<a href="board_delete.do?board_num=${dto.board_num }"><button type="button" class="btn btn-danger">삭제</button></a>
		<a href="board.do"><button type="button" class="btn btn-primary">목록</button></a>
	
	</div>
	
</body>
</html>
