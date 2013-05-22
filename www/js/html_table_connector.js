
require.config({
	"baseUrl": ".",
	"paths": {
		"jquery": "thirdparty/jquery",
		"underscore": "thirdparty/underscore",
		"yaap": "thirdparty/yaap/yaap/yaap"
	},
	shim: {
		'underscore': {
			exports: '_'
		}
	}
});

require(["jquery","js/tic_tac_toe/tic_tac_toe.min"],
function( $, Tic_tac_toe) {
	$( document ).ready(function(player) {
		var tic_tac_toe=new Tic_tac_toe( function(player) {
			$( '#who_win' ).text('Player "'+player+'" Wins!!!');
		},function(x,y,player){
			var get_td='#main_board tr td#'+x+'_'+y;
			$( get_td ).text(player);
		});
		var func_temp=function(event){
			event.data.tic_tac_toe.mark(event.data.x,event.data.y);
		};
		for(var x=0 ; x<3 ; ++x){
			for(var y=0 ; y<3 ; ++y){
				var get_td='#main_board tr td#'+x+'_'+y;
				$( get_td ).click({ "tic_tac_toe": tic_tac_toe,
					"x": x,"y": y },func_temp);
			}
		}
		$( 'button#restart_button' ).click({ "tic_tac_toe": tic_tac_toe },
		function(event){
			event.data.tic_tac_toe.restart();
			$( 'h1#who_win' ).text('Tic Tac Toe!!');
		});
	});
});

