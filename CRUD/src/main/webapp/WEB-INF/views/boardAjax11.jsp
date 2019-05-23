<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<%@ include file="top.jsp"%>

<script type="text/javascript">
	function listAjax(){
		$.ajax({
			
		});
	}
</script>

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

			</tbody>
		</table>
	</div>

</body>
</html>
