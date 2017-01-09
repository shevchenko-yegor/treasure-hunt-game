//Populates multiple choice
var ansX;
var ansY;
var posX;
var posY;

function popMult(id){
	document.getElementById("question").innerHTML = store.games[id].question;
	
	document.getElementById("clue1text").innerHTML = store.games[id].clues[0];
	document.getElementById("clue2text").innerHTML = store.games[id].clues[1];
	document.getElementById("clue3text").innerHTML = store.games[id].clues[2];
	
	document.getElementById("ans1").innerHTML = store.games[id].answers[0];
	document.getElementById("ans2").innerHTML = store.games[id].answers[1];
	document.getElementById("ans3").innerHTML = store.games[id].answers[2];
}

function popSpot(id){
	ansX = store.games[id].pointX;
	ansY = store.games[id].pointY;
	
	document.getElementById("clue4text").innerHTML = store.games[id].clues[0];
	document.getElementById("clue5text").innerHTML = store.games[id].clues[1];
	document.getElementById("clue6text").innerHTML = store.games[id].clues[2];
}

function clue(){
	if(store.currentScore > 100){
		store.currentScore -= 50;
		window.alert("50 Points deducted");
	}
}

function answer(type){
	switch(type){
		case "multipleChoice":
		//Multiple Choice answer
				var ans = document.querySelector('input[name = "radio-choice-h-2"]:checked').value;
				if(parseInt(ans) == store.games[store.currentID].correctAnswer){
					//Correct
					store.score += store.currentScore;
					document.getElementById("scoreGained").innerHTML = "+ " + store.currentScore;
					document.getElementById("scoreTotal").innerHTML = "Total: " + store.score;
				}else{
					//Wrong
					window.alert("Wrong answer! Try again next time.");
					document.location.href = 'index.html';
				}
			break;
		case "spotDifference":
		//Spot the difference answer
			var startX = ansX-25;
			var endX = ansX+25;
			var startY = ansY-25;
			var endY = ansY+25;
			var finalX = parseInt(document.getElementById("circle").style.left, 10);
			var finalY = parseInt(document.getElementById("circle").style.top, 10);
			
			if((finalX > startX && finalX < endX) && (finalY > startY && finalY < endY)){
					store.score += store.currentScore;
					document.getElementById("scoreGained2").innerHTML = "+ " + store.currentScore;
					document.getElementById("scoreTotal2").innerHTML = "Total: " + store.score;
				}else{
					//Wrong
					window.alert("Wrong answer! Try again next time.");
					document.location.href = 'index.html';
				}
			break;
	}
	store.gamesPlayed++;
}

function getImageCoords(event,img) {
        posX = event.offsetX?(event.offsetX):event.pageX-img.offsetLeft;
        posY = event.offsetY?(event.offsetY):event.pageY-img.offsetTop;
		document.getElementById("circle").style.left = (posX-25) + "px";
		document.getElementById("circle").style.top = (posY-25) + "px";
    }