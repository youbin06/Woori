$(document).ready(function() {
	boardList();
	
	//글쓰기 버튼 클릭시 글쓰기 폼
	$("#btn_writeForm").on("click", function(){
		$("#board_title").val("");
		$("#board_id").val("");
		$("#board_content").val("");
		$('#writeForm').toggle();
	});
	
	//글작성버튼 
	$("#btn_write").on("click", function(){
		boardWrite();
	});
	
	//글 상세보기 닫기 버튼
	$("#btn_close").on("click", function(){
		$("#viewForm").hide();
	});
	
});

// 게시판 목록 불러오기
function boardList() {
	$.ajax({
		url : './boardListAjax',
		dataType : 'json',
		method : 'POST',
		contentType : "application/json; charset=UTF-8",
		success : function(data) {
			console.log(data);
			var listHtml = '';
			$.each(data, function(index, item) {
				listHtml += '<tr>';
				listHtml += '<td>' + item.board_num + '</td>';
				listHtml += '<td><a href="javascript:;" onclick="boardView('+item.board_num+')">' + item.board_title + '</a></td>';
				listHtml += '<td>' + item.board_id + '</td>';
				listHtml += '<td>' + item.board_date + '<button type="button" class="btn btn-danger" onclick="boardDel('+item.board_num+')">삭제</button></td>';
				listHtml += '</tr>';
				
			});
			$("#boardList").html(listHtml);

		},
		error : function(request, status, error) {
			alert("code:" + request.status + "\n" + "message:"
					+ request.responseText + "\n" + "error:" + error);
		}

	});
}

//게시물 삭제
function boardDel(board_num){
	console.log(board_num);
	var data = {}
	data.board_num = board_num;
	console.log(data);
	$.ajax({
		url : './boardDelAjax',
		dateType : 'text',
		method : 'POST',
		data : JSON.stringify(data),
		contentType : "application/json; charset=UTF-8",
		success : function(data){
			console.log(data);
			if(data == '1'){
				boardList();
				alert('완료');
			}else{
				return;
			}
		},
		error : function(request, status, error) {
			alert("code:" + request.status + "\n" + "message:"
					+ request.responseText + "\n" + "error:" + error);
		}
	});
}

//글쓰기 
function boardWrite(){
	//$("#board_title").text();
	if($("#board_title").val() == ""){
		alert("제목을 입력해 주세요.");
		return;
	}if($("#board_id").val() == ""){
		alert("작성자를 입력해 주세요.");
		return;
	}if($("#board_content").val() == ""){
		alert("내용을 입력해 주세요.");
		return;
	}else{
		var data = {};
		data.board_title = $("#board_title").val();
		data.board_id = $("#board_id").val();
		data.board_content = $("#board_content").val();
		
		$.ajax({
			url : './boardWriteAjax',
			dataType : 'text',
			method : 'POST',
			data : JSON.stringify(data),
			contentType : "application/json; charset=UTF-8",
			success : function(data){
				if(data == "success"){
					$('#writeForm').hide();
					boardList();
				}else{
					return;
				}
			},
			error : function(request, status, error) {
				alert("code:" + request.status + "\n" + "message:"
						+ request.responseText + "\n" + "error:" + error);
			}
		});
	}
		
}


//글 상세보기
function boardView(board_num){
	console.log(board_num);
	var data = {}
	data.board_num = board_num;
	$.ajax({
		url : './boardViewAjax',
		dateType : 'text',
		method : 'POST',
		data : JSON.stringify(data),
		contentType : "application/json; charset=UTF-8",
		success : function(data){
			$("#viewNum").text(data.board_num);
			$("#viewTitle").text(data.board_title);
			$("#viewID").text(data.board_id);
			$("#viewContent").text(data.board_content);
			$("#viewForm").show();
		},
		error : function(request, status, error) {
			alert("code:" + request.status + "\n" + "message:"
					+ request.responseText + "\n" + "error:" + error);
		}
	});
	
}
