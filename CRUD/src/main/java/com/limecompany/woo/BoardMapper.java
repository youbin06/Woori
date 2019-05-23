package com.limecompany.woo;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardMapper {
	
	@Autowired
	private SqlSession sqlSession;
	
	public List<BoardDTO> getList(){
		
		List<BoardDTO> list = sqlSession.selectList("getList");
		return list;
	}
	
	public void write(String board_title, String board_id, String board_content) {
		HashMap<String, String> map = new HashMap<String, String>();
		map.put("board_title", board_title);
		map.put("board_id", board_id);
		map.put("board_content", board_content);
		sqlSession.insert("write", map);
	}
	
	public BoardDTO getBoard(int board_num){
		
		BoardDTO dto = sqlSession.selectOne("getBoard", board_num);

		return dto;
	}
	
	public void delete(int board_num) {
		sqlSession.delete("delete", board_num);
	}
	
	//게시물 수정 
	public void update(BoardDTO boardDTO) {
		sqlSession.update("update", boardDTO);
	}

}
