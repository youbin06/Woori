<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript">
	function check() {
		if (f.board_title.value == "") {
			alert('제목을 입력해 주세요.');
			return;
		}
		if (f.board_id.value == "") {
			alert('작성자를 입력해 주세요.');
			return;
		}
		if (f.board_content.value == "") {
			alert('내용을 입력해 주세요.');
			return;
		} else {
			document.f.submit();
		}
	}
</script>