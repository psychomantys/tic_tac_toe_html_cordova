
define( function() {
	return function Tic_tac_toe(winner_callback,ui_mark) {
		this.player_1='X';
		this.player_2='O';
		this.player_actual='X';
		this.not_marked='&nbsp;&nbsp;';
		this.game_end=false;
		this.board=[
			[this.not_marked,this.not_marked,this.not_marked],
			[this.not_marked,this.not_marked,this.not_marked],
			[this.not_marked,this.not_marked,this.not_marked]
		];
		this.board_name = '';

		this.is_marked=function(x,y) {
			return this.board[x][y]!==this.not_marked;
		};
		this.restart=function() {
			this.board=[
				[this.not_marked,this.not_marked,this.not_marked],
				[this.not_marked,this.not_marked,this.not_marked],
				[this.not_marked,this.not_marked,this.not_marked]
			];
			this.player_actual=this.player_1;
			this.game_end=false;
			this.ui_reset_board();
		};
		this.mark=function(x,y) {
			if( ! this.is_marked(x,y) && ! this.game_end ){
				this.board[x][y]=this.player_actual;
				this.ui_mark(x,y,this.player_actual);
				this.check_win();
				this.switch_player();
			}
		};
		this.check_win=function() {
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
		this.switch_player=function() {
			if( this.player_actual===this.player_1 ){
				this.player_actual=this.player_2;
			}else if( this.player_actual===this.player_2 ){
				this.player_actual=this.player_1;
			}
		};
		this.ui_reset_board=function() {
			for(var x=0 ; x<3 ; ++x){
				for(var y=0 ; y<3 ; ++y){
					this.ui_mark(x,y,this.not_marked);
				}
			}
		};

		this.ui_mark=ui_mark;
		this.winner_callback=winner_callback;
		this.restart();
	};
});

