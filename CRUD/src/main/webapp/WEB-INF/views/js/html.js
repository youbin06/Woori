$(document).ready(function (){
	
	//event 등록
	page.event();
});
//page 객체 생성
var page = {
	
	menuCase : "web",
	activeUrl : 'https://dapi.kakao.com/v2/search/web',
	url : {
		
			"web":"https://dapi.kakao.com/v2/search/web",
			"vclip":"https://dapi.kakao.com/v2/search/vclip",
			"image":"https://dapi.kakao.com/v2/search/image"
		
			},
	page : 1,
	is_end : true,
	
	//이벤트
	event : function(){
		//검색 돋보기 버튼
		$("#searchIcon").on("click", function(){
			$("#searchContent").html("");
			if(page.blinkCheck()){
				page.searchAjax();
			}
		});
		
		//더보기 클릭
		$("#btnMoreClick").on("click", function(){
			if(page.blinkCheck()){
				page.searchAjax();
			}
		});
		
		//메뉴 클릭
		
		$(".menu").on("click", function(){
			page.menuClick($(this));
		});
		
	},
	
	
	//Ajax 검색
	searchAjax : function(){
		var searchWord = $("#searchWord").val();
		
		$.ajax({
			
			url : page.activeUrl,
			data : {
				query : searchWord,
				page : page.page
			},
			headers: { 'Authorization': 'KakaoAK 4d2620cecc30038a3968c0b2138c1d89'}, 
			type: 'GET',
			success : function(data) {
				console.log(data);
				page.is_end = data.meta.is_end;
				if(!page.is_end){
					page.page++;
					$(".btnMore").show();
				}else{
					$(".btnMore").hide();
				}
				
				switch(page.menuCase){
					case "web" :
						page.webContentSearch(data);
						break;
					case "vclip" :
						page.vclipSearch(data);
						break;
					case "image" :
						page.image.Search(data);
						break;
				}
				
			},
			error:function(data){
				console.log("error");
			}
		});
	},
	
	//검색어가 없을 시 alert 표시
	blinkCheck : function(){
		var searchWord = $("#searchWord").val();
		if(searchWord == ""){
			alert('검색어를 입력해 주세요.');
			return false;
		}else{
			return true;
		}
	},
	
	// 웹문서 검색 결과
	webContentSearch : function(data){
		var html = '';
		$.each(data.documents, function(index, item){
			html += '<div class="document">';
			html += '<a href="'+item.url+'" target="_blank" class="documentTitle">'+item.title+'</a>';
			html += '<br>';
			html += '<a href="'+item.url+'" target="_blank">'+item.url+'</a>';
			html += '<br>';
			html += item.contents;
			html += '<br>';
			html += '작성일 : '+item.datetime;
			html += '</div>';
		});
		$("#searchContent").append(html);
	},
	
	//동영상 검색 결과
	vclipSearch : function(data){
		var html = '';
		$.each(data.documents, function(index, item){
			html += '<div class="document">';
			html += '   <a href="'+item.url+'" target="_blank"><img class="vclipImg" src="'+item.thumbnail+'"></a>';
			html += '	<a href="'+item.url+'" target="_blank"><h3 class="contentsTitle">'+item.title+'</h3></a>';
			html += '	<a href="'+item.url+'" target="_blank"><h4 class="contentsTitle2">'+item.url+'</h4></a>';
			html += '	<h6 class="subContent">playTime : '+item.play_time+'</h6>';
			html += '	<h6 class="subContent">작성일 : '+item.datetime+'</h6>';
			html += '</div>';
		});
		$("#searchContent").append(html);
	},
	//이미지 검색 결과
	imageSearch : function(data){
		var html = '';
		$.each(data.documents, function(index, item){
			html += '<div class="document">';
			html += '<a href="'+item.url+'" target="_blank" class="documentTitle">'+item.title+'</a>';
			html += '<br>';
			html += '<a href="'+item.url+'" target="_blank">'+item.url+'</a>';
			html += '<br>';
			html += item.contents;
			html += '<br>';
			html += '작성일 : '+item.datetime;
			html += '</div>';
		});
		$("#searchContent").append(html);
	},
	
	//메뉴 클릭 Active 전환
	menuClick : function(tMenu){
		// 메뉴 클래스 추가 제거
		if(!tMenu.hasClass("selectMenu")){
			$("#searchContent").html("");
			$(".menu").removeClass("selectMenu");
			tMenu.addClass("selectMenu");
			
			// page.activeUrl 전환
			page.activeUrl = page.url[$(".selectMenu").attr("id")];
			page.menuCase = $(".selectMenu").attr("id");
			
			
			if(page.blinkCheck()){
				page.page = 1;
				page.is_end = true;
				page.searchAjax();
			}
		}
	}

}
