<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<%@ include file="top.jsp"%>

<script type="text/javascript">
	console.log("1");
	var display;
	var flag;
	var num1;
	var num2;
	
	$(document).ready(function() {
		console.log("2");
		
		
		$("#calcTable tr td").on("click", function() {
			var $this = $(this);
			$this.css("background-color", "#8e8e8e");
			(function(t){
				setTimeout(function() {
					t.css("background-color", "#ffffff")
				}, 100);
			})($this);
			
		});
	});
	

	function number(n) {
		display = $('#display');
		display.append(n);
		flag = 0;
	}

	function dp(dp) {
		if (flag == 0) {
			display = $('#display');
			display.append(dp);
			flag = 1;
		} else {
			return;
		}
	}

	function operator(op) {
		if (flag == 0) {
			display = $('#display');
			display.append(op);
			flag = 1;

		} else {
			return;
		}
	}

	function result() {
		display = $("#display").text();
		$("#display").text(eval(display));
	}

	function del() {
		display = $('#display')
				.text(
						$('#display').text().substr(0,
								$('#display').text().length - 1));
		flag = 0;
		if (display.text() == "") {
			flag = 1;
		}
	}

	console.log("3");
</script>

<title>Insert title here</title>
</head>
<body>

	<%@ include file="menu.jsp"%>

	<div class="container">
		<h3>계산기!</h3>
		<table border="1" style="width: 500px" id="calcTable">
			<colgroup>
				<col width="25%">
				<col width="25%">
				<col width="25%">
				<col width="25%">
			</colgroup>
			<tr>
				<td colspan="4" style="height: 25px; text-align: right" id="display"></td>
			</tr>
			<tr>
				<td onclick="number(7)">7</td>
				<td onclick="number(8)">8</td>
				<td onclick="number(9)">9</td>
				<td onclick="operator('*')">X</td>
			</tr>
			<tr>
				<td onclick="number(4)">4</td>
				<td onclick="number(5)">5</td>
				<td onclick="number(6)">6</td>
				<td onclick="operator('-')">-</td>
			</tr>
			<tr>
				<td onclick="number(1)">1</td>
				<td onclick="number(2)">2</td>
				<td onclick="number(3)">3</td>
				<td onclick="operator('+')">+</td>
			</tr>
			<tr>
				<td onclick="del()">Del</td>
				<td onclick="number(0)">0</td>
				<td onclick="dp('.')">.</td>
				<td onclick="result()">=</td>
			</tr>
		</table>

	</div>

</body>
</html>