package com.limecompany.woo;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@Autowired
	BoardMapper boardMapper;
	
	@RequestMapping(value = "/")
	public String home() {
		return "index";
	}
	
	@RequestMapping(value = "/index.do")
	public String index() {
		return "index";
	}
	
	@RequestMapping(value = "/board.do")
	public String board(HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		List<BoardDTO> boardList = boardMapper.getList();
		
//		logger.info("boardList :" + boardList);
		
		request.setAttribute("boardList", boardList);
		
		return "board";
	}
	
	@RequestMapping(value = "/board_write.do", method=RequestMethod.GET)
	public String board_writeForm() {
		return "board_write";
	}
	
	@RequestMapping(value = "/board_write.do", method=RequestMethod.POST)
	public String board_write(@ModelAttribute BoardDTO boardDTO, HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");

//		logger.info("boardDTO :" + boardDTO.getBoard_content());
		
		boardMapper.write(boardDTO.getBoard_title(), boardDTO.getBoard_id(), boardDTO.getBoard_content());
		
		return "redirect:/board.do";
	}
	
	@RequestMapping(value = "/board_view.do", method=RequestMethod.GET)
	public String board_view(@ModelAttribute BoardDTO boardDTO, HttpServletRequest request, HttpServletResponse response) {
		
		//logger.info("board_NUM : " + boardDTO.getBoard_num());
		
		BoardDTO dto = boardMapper.getBoard(boardDTO.getBoard_num());
		//logger.info("boardDTO : " + dto.getBoard_title());
		
		request.setAttribute("dto", dto);
		return "board_view";
	}
	
	//게시물 삭제
	@RequestMapping(value = "/board_delete.do", method=RequestMethod.GET)
	public String board_delete(@ModelAttribute BoardDTO boardDTO, HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//logger.info("board_num : " + boardDTO.getBoard_num());
		boardMapper.delete(boardDTO.getBoard_num());
		return "redirect:/board.do";
	}
	
	@RequestMapping(value = "/board_update.do", method=RequestMethod.GET)
	public String board_updateForm(@ModelAttribute BoardDTO boardDTO, HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		//logger.info("board_num : " + boardDTO.getBoard_num());
		BoardDTO dto = boardMapper.getBoard(boardDTO.getBoard_num());
		//logger.info("board_title : " + dto.getBoard_title());
		
		request.setAttribute("dto", dto);
		
		return "board_update";
	}
	
	//게시물 수정 구현
	@RequestMapping(value = "/board_update.do", method=RequestMethod.POST)
	public String board_update(@ModelAttribute BoardDTO boardDTO, HttpServletRequest request, HttpServletResponse response) throws Exception{
		
//		logger.info("board_num : " + boardDTO.getBoard_num());	
//		logger.info("board_title : " + boardDTO.getBoard_title());
		
		boardMapper.update(boardDTO);
		return "redirect:/board.do";
	}
	
	//계산기 페이지 이동
	@RequestMapping(value = "/calculator.do")
	public String calculator() {
		
		return "calculator";
	}
	
	
	//Ajax 게시판 리스트
	@ResponseBody
	@RequestMapping(value = "/boardListAjax", method = RequestMethod.POST)
	public List<BoardDTO> test() {
		List<BoardDTO> boardList = boardMapper.getList();
		//logger.info("test : AJAX");
		//logger.info("boardList : " + boardList);
		return boardList;
	}
	
	
	//Ajax 게시물 삭제
	@ResponseBody
	@RequestMapping(value ="/boardDelAjax", method = RequestMethod.POST)
	public int boardDelAjax(@RequestBody BoardDTO boardDTO) {
		logger.info("boardDelAjax board_num : " + boardDTO.getBoard_num());
		try{
			boardMapper.delete(boardDTO.getBoard_num());
			return 1; // 게시물 삭제 성공
		}catch (Exception e) {
			// TODO: handle exception
			return 0; // 게시물 삭제 실패
		}
	
	}
	
	//Ajax 게시물 작성
	@ResponseBody
	@RequestMapping(value = "/boardWriteAjax", method = RequestMethod.POST)
	public String boardWriteAjax(@RequestBody BoardDTO boardDTO) {
		logger.info("boardDTO :" + boardDTO);
		
		try {
			boardMapper.write(boardDTO.getBoard_title(), boardDTO.getBoard_id(), boardDTO.getBoard_content());
			return "success";
		}catch (Exception e) {
			// TODO: handle exception
			return "error";
		}
	}
	
	//Ajax 게시물 보기
	@ResponseBody
	@RequestMapping(value = "/boardViewAjax", method = RequestMethod.POST)
	public BoardDTO boardViewAjax(@RequestBody BoardDTO boardDTO) {
		
		logger.info("board_num : " + boardDTO.getBoard_num());
		BoardDTO dto = boardMapper.getBoard(boardDTO.getBoard_num());
		return dto;
	}
}
