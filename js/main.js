// jshint multistr:true
$(document).ready(function() {

	var time = 0,
		height = 10,
		width = 10,
		mine_count = 10,
		boardArray = [],
		boardHTML = '',
		randomNumber = 0,
		mine_array = [];



	generateBoard();



	function timer() {
		time++
		seconds = time % 60;
		minutes = ((time - seconds) / 60 % 60).toFixed(0);
		$('.timer').html(minutes + ':' + seconds);
	}

	function generateBoard(){
		for (var i = 0; i < height; i++){
			boardArray.push(new Array());
			for (var j = 0; j < width; j++){
				boardArray[i].push('');
				boardHTML += '<button class="board-square" id="' + [i] + '_'  + [j] + '"></button>'
			}
		}
		$('.main-container').css('width', width * 20 + 24 + 'px')
		$('.board').css('width', width * 20 + 4 + 'px');
		$('.header').css('width', width * 20 + 4 + 'px')
		$('.board').html(boardHTML);
	}

	$('.board').on('click', '.board-square', function(){

		var clicked = $(this);

		if (time == 0) {

			generateMines(clicked.attr('id'));
			setInterval(timer, 1000);

		}

	});

	function generateMines(clicked_id){
		id_str = clicked_id.split('_');
		id = (parseInt(id_str[0]) * 10) + parseInt(id_str[1]);

		while (mine_array.length < mine_count) {
			RNG();
			mine_array.push(randomNumber);
			console.log('safasf', mine_array, id);
		}
	}
	
	function RNG(){
		randomNumber = Math.floor((Math.random() * (height * width)));
		mine_array = mine_array.filter(function(value){
			if (value != id && value != randomNumber) {
				return value;
			}
		});
	}
});