require.config({
	"baseUrl": "www/",
	"paths": {
		"jquery": "thirdparty/jquery",
		"underscore": "thirdparty/underscore",
		"Tic_tac_toe": "js/tic_tac_toe/tic_tac_toe"
	},
	shim: {
		'underscore': {
			exports: '_'
		}
	}
});

//describe("A false case", function() {
//	it("canot be true", function() {
//		expect(true).not.toBe(false);
//	});
//});

require(["Tic_tac_toe"],
function (Tic_tac_toe) {

describe("A basic interface for Tic-Tac-Toe game", function() {
	var t;
	it("Init", function() {
		var winner_callback=function(winner) {
		};
		var ui_mark=function(x,y,player) {
		};

		t=new Tic_tac_toe(winner_callback,ui_mark);
		expect(t.winner_callback).toBe(winner_callback);
		expect(t.ui_mark).toBe(ui_mark);
	});
	it("Can restart a game", function() {
		t.restart();
	});
	it("Can mark a position on board", function() {
		t.restart();
		t.mark(1,1);
	});
	it("Can verify a position on board", function() {
		t.restart();
		t.mark(1,1);
		expect( t.is_marked(1,1) ).toBe(true);
	});
	it("Be unmark all the board on begin", function() {
		t.restart();
		expect( t.board ).toEqual([
			[t.not_marked,t.not_marked,t.not_marked],
			[t.not_marked,t.not_marked,t.not_marked],
			[t.not_marked,t.not_marked,t.not_marked]
		]);
	});
	it("Can change atual player in game", function() {
		t.switch_player();
	});
	it("Render boar in html using \"board_name\"", function() {
		t.ui_reset_board();
	});
	it("Sample game, win expected", function() {
		var winner_callback=function(winner) {
		};
		var ui_mark=function(x,y,player) {
		};
		var t=new Tic_tac_toe(ui_mark,winner_callback);
		t.mark(0,0);
		t.mark(2,1);
		t.mark(0,1);
		t.mark(2,2);
		t.mark(0,2);
		expect( t.game_end ).toBe(true);
	});
});

describe("Winner condictions", function() {
	var winner_callback=function(winner) {
	};
	var ui_mark=function(x,y,player) {
	};

	var t=new Tic_tac_toe(winner_callback,ui_mark);

	/* diag. */
	it("Winner if player One make a first diagonal", function() {
		t.restart();
		t.mark(0,0);
		t.mark(1,0);
		t.mark(1,1);
		t.mark(2,0);
		t.mark(2,2);
		expect( t.game_end ).toBe(true);
	});
	it("Winner if player One make a second diagonal", function() {
		t.restart();
		t.mark(0,2);
		t.mark(0,1);
		t.mark(1,1);
		t.mark(1,2);
		t.mark(2,0);
		expect( t.game_end ).toBe(true);
	});

	/* col. */
	it("Winner if player col. 0", function() {
		t.restart();
		t.mark(0,0);
		t.mark(1,0);
		t.mark(0,1);
		t.mark(2,0);
		t.mark(0,2);
		expect( t.game_end ).toBe(true);
	});
	it("Winner if player col. 1", function() {
		t.restart();
		t.mark(1,0);
		t.mark(0,0);
		t.mark(1,1);
		t.mark(2,0);
		t.mark(1,2);
		expect( t.game_end ).toBe(true);
	});
	it("Winner if player col. 2", function() {
		t.restart();
		t.mark(2,0);
		t.mark(0,0);
		t.mark(2,1);
		t.mark(1,0);
		t.mark(2,2);
		expect( t.game_end ).toBe(true);
	});

	/* rows */
	it("Winner if player row 0", function() {
		t.restart();
		t.mark(0,0);
		t.mark(0,1);
		t.mark(1,0);
		t.mark(0,2);
		t.mark(2,0);
		expect( t.game_end ).toBe(true);
	});
	it("Winner if player row 1", function() {
		t.restart();
		t.mark(0,1);
		t.mark(0,0);
		t.mark(1,1);
		t.mark(0,2);
		t.mark(2,1);
		expect( t.game_end ).toBe(true);
	});
	it("Winner if player row 2", function() {
		t.restart();
		t.mark(0,2);
		t.mark(0,0);
		t.mark(1,2);
		t.mark(0,1);
		t.mark(2,2);
		expect( t.game_end ).toBe(true);
	});
});
});

