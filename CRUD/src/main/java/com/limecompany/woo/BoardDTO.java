package com.limecompany.woo;

public class BoardDTO {
	
	private int board_num;
	private String board_id;
	private String board_title;
	private String board_content;
	private String board_date;
	
	public int getBoard_num() {
		return board_num;
	}
	public void setBoard_num(int board_num) {
		this.board_num = board_num;
	}
	public String getBoard_id() {
		return board_id;
	}
	public void setBoard_id(String board_id) {
		this.board_id = board_id;
	}
	public String getBoard_title() {
		return board_title;
	}
	public void setBoard_title(String board_title) {
		this.board_title = board_title;
	}
	public String getBoard_content() {
		return board_content;
	}
	public void setBoard_content(String board_content) {
		this.board_content = board_content;
	}
	public String getBoard_date() {
		return board_date;
	}
	public void setBoard_date(String board_date) {
		this.board_date = board_date;
	}
	@Override
	public String toString() {
		return "BoardDTO [board_num=" + board_num + ", board_id=" + board_id + ", board_title=" + board_title
				+ ", board_content=" + board_content + ", board_date=" + board_date + "]";
	}
	

}
