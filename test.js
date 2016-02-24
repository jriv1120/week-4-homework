	//generates random points for the score to match.
	function startGame(){
			matchScore = Math.floor((Math.random() * 101) + 19);
			document.getElementById("crystalValue").innerHTML = matchScore;
			//alert(matchScore);
			
		}

$(document).ready(function(){


//if statement is addressing second+ click. else statement is addressing first click.
var blueNum, greenNum, redNum, yellowNum, yourPoints = 0, wins = 0, losses = 0

var blueNum = Math.floor((Math.random() * 11) + 1);
var greenNum = Math.floor((Math.random() * 11) + 1);
var redNum = Math.floor((Math.random() * 11) + 1);
var yellowNum = Math.floor((Math.random() * 11) + 1);

var 
	$("#blueJewel").on('click' , function(){
	if (blueNum){
			yourPoints = yourPoints + greenNum
			document.getElementById("yourPoints").innerHTML = scoreNow;
			score()
			}
		});

	$("#greenGem").on('click' , function(){
		if (greenNum){
			yourPoints = yourPoints + greenNum
			document.getElementById("yourPoints").innerHTML = scoreNow;
			score()
		}
	
	});

	$("#redRudy").on('click' , function(){
		if (redNum){
			yourPoints = yourPoints + redNum
			document.getElementById("yourPoints").innerHTML = scoreNow;
			scoreKeep()
		}
	
	});

	$("#yellowStone").on('click' , function(){
		if (yellowNum){
			yourPoints = yourPoints + yellowNum
			document.getElementById("yourPoints").innerHTML = scoreNow;
			score()
		}
	
	});


	function reset(){
		matchScore = 0
		yourPoints = 0
		blueNum = 0
		greenNum = 0
		redNum = 0
		yellowNum = 0
		startGame()

	}


	function crystalValue(){

//losses++ value is to add one. $(...) is getElementById in jQuery. 'Losses:' is adding the word the HTML, and + losses is using my variable to increase by 1.
			if (yourPoints > matchScore){
				losses++
				$('#loss').html('Losses:' + losses);
				reset();
			}

	 		if (yourPoints == matchScore) {
	 			wins++;
	 			$('#win').html('Wins:' + wins);
	 			reset();
	 		};

}

});


