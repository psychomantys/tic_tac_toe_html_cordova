
var myapp = {};
myapp.Tic_tac_toe = function(winner_callback,ui_mark) {
	this.ui_mark=ui_mark;
	this.winner_callback=winner_callback;
	this.restart();
};
myapp.Tic_tac_toe.prototype.player_1='X';
myapp.Tic_tac_toe.prototype.player_2='O';
myapp.Tic_tac_toe.prototype.player_actual='X';
myapp.Tic_tac_toe.prototype.not_marked='_';
myapp.Tic_tac_toe.prototype.game_end=false;
//myapp.Tic_tac_toe.prototype.winner_callback=function(winner) {};
//myapp.Tic_tac_toe.prototype.ui_mark=function(x,y,player) {};
myapp.Tic_tac_toe.prototype.board=[
	[this.not_marked,this.not_marked,this.not_marked],
	[this.not_marked,this.not_marked,this.not_marked],
	[this.not_marked,this.not_marked,this.not_marked]
];
myapp.Tic_tac_toe.prototype.board_name = ''; 
myapp.Tic_tac_toe.prototype.is_marked=function(x,y) {
	return this.board[x][y]!==this.not_marked;
};
myapp.Tic_tac_toe.prototype.restart=function() {
	this.board=[
		[this.not_marked,this.not_marked,this.not_marked],
		[this.not_marked,this.not_marked,this.not_marked],
		[this.not_marked,this.not_marked,this.not_marked]
	];
	this.player_actual=this.player_1;
	this.game_end=false;
	this.ui_reset_board();
};
myapp.Tic_tac_toe.prototype.mark=function(x,y) {
	if( ! this.is_marked(x,y) && ! this.game_end ){
		this.board[x][y]=this.player_actual;
		this.ui_mark(x,y,this.player_actual);
		this.check_win();
		this.switch_player();
	}
};
myapp.Tic_tac_toe.prototype.check_win=function() {
	if( (
		(this.board[0][0]===this.player_actual && this.board[0][1]===this.player_actual && this.board[0][2]===this.player_actual ) ||
		(this.board[1][0]===this.player_actual && this.board[1][1]===this.player_actual && this.board[1][2]===this.player_actual ) ||
		(this.board[2][0]===this.player_actual && this.board[2][1]===this.player_actual && this.board[2][2]===this.player_actual )
	) || (
		(this.board[0][0]===this.player_actual && this.board[1][0]===this.player_actual && this.board[2][0]===this.player_actual ) ||
		(this.board[0][1]===this.player_actual && this.board[1][1]===this.player_actual && this.board[2][1]===this.player_actual ) ||
		(this.board[0][2]===this.player_actual && this.board[1][2]===this.player_actual && this.board[2][2]===this.player_actual )
	) || (
		(this.board[0][0]===this.player_actual && this.board[1][1]===this.player_actual && this.board[2][2]===this.player_actual ) ||
		(this.board[0][2]===this.player_actual && this.board[1][1]===this.player_actual && this.board[2][0]===this.player_actual )
	) ) {
		this.winner_callback(this.player_actual);
		this.game_end=true;
	}
};
myapp.Tic_tac_toe.prototype.switch_player=function() {
	if( this.player_actual===this.player_1 ){
		this.player_actual=this.player_2;
	}else if( this.player_actual===this.player_2 ){
		this.player_actual=this.player_1;
	}
};
myapp.Tic_tac_toe.prototype.ui_reset_board=function() {
	for(var x=0 ; x<3 ; ++x){
		for(var y=0 ; y<3 ; ++y){
			this.ui_mark(x,y,this.not_marked);
		}
	}
};

