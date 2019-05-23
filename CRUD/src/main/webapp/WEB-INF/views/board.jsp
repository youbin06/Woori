<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<%@ include file="top.jsp"%>

<title>Home</title>
</head>
<body>

	<%@ include file="menu.jsp"%>

	<div class="container">
		<h3>게시판</h3>

		<table class="table table-striped">
			<colgroup>
				<col width="10%">
				<col width="50%">
				<col width="20%">
				<col width="20%">
			</colgroup>
			<thead>
				<tr>
					<th style="font-weight: bold;">번호</th>
					<th style="font-weight: bold;">제목</th>
					<th style="font-weight: bold;">작성자</th>
					<th style="font-weight: bold;">날짜</th>
				</tr>
			</thead>

			<tbody>
				<c:forEach var="board" items="${boardList}">
					<tr>
						<td>${board.board_num }</td>
						<td><a href="board_view.do?board_num=${board.board_num }">${board.board_title }</a></td>
						<td>${board.board_id }</td>
						<td>${board.board_date }</td>
					</tr>
				</c:forEach>
			</tbody>

		</table>

		<a href="board_write.do"><button type="button"
				class="btn btn-success">글쓰기</button></a>

	</div>

</body>
</html>
