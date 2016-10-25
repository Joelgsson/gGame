
var countScore = 0;
var countMissed = 0;

function mittspel(){


	var x = Math.floor(Math.random() * 5) + 1;
	console.log(x);
			console.log(typeof(x));

 var userInput = Number(document.getElementById("userInput").value);
 document.getElementById('userInput').value='';
 var msg = document.getElementById("msg");

 if(userInput <1 || userInput >5){

msg.innerHTML = "";
msg3.innerHTML = "";
msg2.innerHTML = "Nice try but you have to choose a number between 1-10 ;)";

}

else if (x !== userInput){
msg.innerHTML = "";
msg3.innerHTML = "";
msg2.innerHTML = "You guessed the wrong number. The right number was " + x + ". Try again!";
countMissed ++;
 }

else if (x == userInput){
msg2.innerHTML = "";
msg3.innerHTML = "";
msg.innerHTML =  "You guessed right! GOOD FOR YOU, keep on guessing!";
countScore ++;
}

}
function end(){
		var winRate = Number(countScore / (countMissed + 1) * 100).toFixed(2);
		msg2.innerHTML = "";
		msg.innerHTML = "";
		msg3.innerHTML = "You got " + countScore + " right answers and " + countMissed +
		" missed answers. You entered the right number " + winRate + "% of the time.";
		countScore=0;
		countMissed =0;
	}
