//SIMON'S GAME IN LIMBO STYLE
//dottKon PROJECT

//Empty list which is going to be full of random integers from the range 0-3 as soon as Play clicks START button
var moves = [];


//empty list for adding the player's answers (to check if they're in the right order);
var answers = []

//variable j represents the current Stage of the game (up to 20)
var j;


//gameStarted + firstStart() prevents from running multiple games simultaneously and starts the Stage Counter, it also creates a random list of 20 steps (each step can be 0, 1, 2, 3- as they represent the Game buttons)

var gameStarted = false;
function firstStart(){
	if(gameStarted == false){
		j = 0;
		gameStarted = true;
		for (var l = 0; l < 20; l++){
			moves.push(Math.floor(Math.random()*4));
		}

		console.log(moves);

		playIt();
		document.getElementById('count').innerHTML = '1';
	}
}
//variable p is used to check the current step in a given stage (if we have stage consisting of 3 moves we can determine whether the game needs to play step 1, 2 or 3)
var p = 0;

//
var playerTurn = false;

//Hardcore mode is activated once player clicks on Strict BUTTON
var hardcore = false;
function hardcoreMode(){
	if(hardcore == false){
		document.getElementById('strict').style.background = '#eee';
		hardcore = true;		
	} else if(hardcore == true){
		document.getElementById('strict').style.background = '#777';
		hardcore = false;		
	}

}
//AUDIOS 
var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var audio4 = document.getElementById("audio4");

//playIt assigns numbers from our moves list to the function changeColor and plays the following steps depending on the Stage (j).
function playIt(){
	if(moves[p] == 0){
		function changeColor0(){
			setTimeout(function(){
				document.getElementById('left-top').style.background = 'white';
				audio1.play();
				function backToOriginalColor0(){	
					setTimeout(function(){
					document.getElementById('left-top').style.background = '#333';
					if(p<j){
						p++;
						playIt();
					} else{
						playerTurn = true;
					}
				}, 500);
				};

				backToOriginalColor0();


			}, 1000);
		}
		changeColor0();


	}else if(moves[p] == 1){
		
		function changeColor1(){
			setTimeout(function(){
				document.getElementById('right-top').style.background = 'white';
				audio2.play();
				function backToOriginalColor1(){	
					setTimeout(function(){
					document.getElementById('right-top').style.background = '#444';
					if(p<j){
						p++;
						playIt();
					} else{
						playerTurn = true;
					}
				}, 500);
				};

				backToOriginalColor1();


			}, 1000);
		}
		changeColor1();


	}else if(moves[p] == 2){
		function changeColor2(){
			setTimeout(function(){
				document.getElementById('left-bottom').style.background = 'white';
				audio3.play();
				function backToOriginalColor2(){	
					setTimeout(function(){
					document.getElementById('left-bottom').style.background = '#555';
					if(p<j){
						p++;
						playIt();
					} else {
						playerTurn = true;
					}
				}, 500);
				};

				backToOriginalColor2();


			}, 1000);
		}
		changeColor2();

	}else if(moves[p] == 3){
		function changeColor3(){
			setTimeout(function(){
				document.getElementById('right-bottom').style.background = 'white';
				audio4.play();
				function backToOriginalColor3(){	
					setTimeout(function(){
					document.getElementById('right-bottom').style.background = '#666';
					if(p<j){
						p++;
						playIt();
					} else {
						playerTurn = true;
					}
				}, 500);
				};

				backToOriginalColor3();


			}, 1000);
		}
		changeColor3();

	}
}

//i counts the clicked answers
var i = 0;
//functions adding Player's moves to an answers array and calls verify function after each Click
function playerMove0(){
	if(playerTurn){
		audio1.play();
		answers.push(0);
		verify();
	}


}

function playerMove1(){
	if(playerTurn){
		audio2.play();
		answers.push(1);
		verify();
	}
}

function playerMove2(){
	if(playerTurn){
		audio3.play();
		answers.push(2);
		verify();
	}

}

function playerMove3(){
	if(playerTurn){
		audio4.play();
		answers.push(3);
		verify();
	}

}


//Function verify checks after each step if it's matching MOVES array
function verify(){

	if(moves[i] == answers[i]){
			i++;
			ifFinished();
	} else {
		console.log('wrong');
		replay();

	}
}

	//isFinished checks after each CLICK if this is the end of Player's turn
function ifFinished(){
	if(i == j+1 && j+1 < 20){
		i=0;
		playerTurn = false;
		nextStage();
	} else if(j+1 == 20){
		victory();
	}
}

function replay(){
	if(hardcore == false){
		answers = [];
		p = 0;
		i=0;
		document.getElementById('status').style.height = "50px";
		document.getElementById('status').innerHTML = "OUPS... TRY AGAIN...";
		document.getElementById('left-top').className = document.getElementById('left-top').className + " fail";
		document.getElementById('right-top').className = document.getElementById('right-top').className + " fail";
		document.getElementById('left-bottom').className = document.getElementById('left-bottom').className + " fail";
		document.getElementById('right-bottom').className = document.getElementById('right-bottom').className + " fail";
		function goDark(){
			setTimeout(function(){
					document.getElementById('left-top').className = document.getElementById('left-top').className.replace("fail", '');
					document.getElementById('right-top').className = document.getElementById('right-top').className.replace("fail", '');
					document.getElementById('left-bottom').className = document.getElementById('left-bottom').className.replace("fail", '');
					document.getElementById('right-bottom').className = document.getElementById('right-bottom').className.replace("fail", '');
					document.getElementById('status').style.height = "0px";
					document.getElementById('status').innerHTML = "";
			}, 500);
		}	
		goDark();
		playerTurn = false;
		playIt();
	}else if(hardcore == true){
		answers = [];
		p = 0;
		i=0;
		document.getElementById('status').style.height = "70px";
		document.getElementById('status').innerHTML = "START AGAIN!";
		document.getElementById('left-top').className = document.getElementById('left-top').className + " fail";
		document.getElementById('right-top').className = document.getElementById('right-top').className + " fail";
		document.getElementById('left-bottom').className = document.getElementById('left-bottom').className + " fail";
		document.getElementById('right-bottom').className = document.getElementById('right-bottom').className + " fail";
		function goDark(){
			setTimeout(function(){
					document.getElementById('left-top').className = document.getElementById('left-top').className.replace("fail", '');
					document.getElementById('right-top').className = document.getElementById('right-top').className.replace("fail", '');
					document.getElementById('left-bottom').className = document.getElementById('left-bottom').className.replace("fail", '');
					document.getElementById('right-bottom').className = document.getElementById('right-bottom').className.replace("fail", '');
					document.getElementById('status').style.height = "0px";
					document.getElementById('status').innerHTML = "";
					playerTurn = false;
					gameStarted = false;
					moves = [];
					firstStart();
			}, 1500);
		}	
		goDark();
		playerTurn = false;
		gameStarted = false;
		moves = [];
		firstStart();

	}
}


function nextStage(){
	j++;
	document.getElementById('count').innerHTML = j+1;
	answers = [];
	p=0;
	document.getElementById('status').style.height = "50px";
	document.getElementById('status').innerHTML = "GOOD!";
	document.getElementById('left-top').className = document.getElementById('left-top').className + " win";
	document.getElementById('right-top').className = document.getElementById('right-top').className + " win";
	document.getElementById('left-bottom').className = document.getElementById('left-bottom').className + " win";
	document.getElementById('right-bottom').className = document.getElementById('right-bottom').className + " win";
	function goBright(){
		setTimeout(function(){
				document.getElementById('left-top').className = document.getElementById('left-top').className.replace("win", '');
				document.getElementById('right-top').className = document.getElementById('right-top').className.replace("win", '');
				document.getElementById('left-bottom').className = document.getElementById('left-bottom').className.replace("win", '');
				document.getElementById('right-bottom').className = document.getElementById('right-bottom').className.replace("win", '');
				document.getElementById('status').style.height = "0px";
				document.getElementById('status').innerHTML = "";
		}, 500);
	}	
	goBright();
	playerTurn = false;
	playIt();

}

function victory(){
	document.getElementById('status').style.height = '50px';
	document.getElementById('status').innerHTML = "CONGRATS! YOU'VE MADE IT!";
}


//clickers go to the bottom!
document.getElementById('start').addEventListener('click', firstStart);
document.getElementById('strict').addEventListener('click', hardcoreMode);

document.getElementById('left-top').addEventListener('click', playerMove0);
document.getElementById('right-top').addEventListener('click', playerMove1);
document.getElementById('left-bottom').addEventListener('click', playerMove2);
document.getElementById('right-bottom').addEventListener('click', playerMove3);