
var playing = false;
var score;
var action;
var timeCounter;
var correctAnswer;
document.getElementById("startreset").onclick=function(){
    // if click on start or reset
if(playing == true){
location.reload(); //reload page
}else{// if not playing
    //change palying mode to reload page
playing = true;
score = 0;
document.getElementById("scorevalue").innerHTML = score;
//show countdown box
document.getElementById("time").style.display="block";
//set the time to 60
timeCounter=60;
//hide game over box
hide("gameover");



document.getElementById("timevalue").innerHTML = timeCounter;
//call the funtion
startCountDown();
//change button to reset
document.getElementById("startreset").innerHTML="Reset Game";

//generate a new Q A question
generateQA();


}
}
var congratsvalue = ["Excellent", "Bravo", "Tres Bien","Magnifique"];
// click on anwer box
for(i=1; i<5; i++){
document.getElementById("box"+i).onclick = function(){
    //check if we are playing
    if(playing == true){
        if(this.innerHTML == correctAnswer){
            //correct
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            show("correct");
            hide("wrong");
            setTimeout(function(){ hide("correct");}, 2000);
            generateQA();
        }else{
            // wrong answers
            show("wrong");
            hide("correct");
            setTimeout(function(){ hide("wrong");}, 2000);
        }
    }
}
}



        function startCountDown(){
            action =setInterval(() => {
                timeCounter -=1;
                document.getElementById("timevalue").innerHTML = timeCounter;
                if(timeCounter == 0){ //game over
                    stopCountDown();
                        show("gameover");
                        document.getElementById("gameover").innerHTML="<p>game over!</p><p>your score is "+ score +".</p>";
                    hide("time");
                    hide("correct");
                    hide("wrong");
                    playing = false;
                    document.getElementById("startreset").innerHTML="Start Game"

                }
            }, 1000);


        }
        //generate QA and multiple answers
        function generateQA(){
            var x =1+ Math.round(Math.random()* 9); 
            var y = 1+ Math.round(Math.random()* 9);
            correctAnswer = x * y;
            document.getElementById("question").innerHTML = x + " X " + y;
            var correctPosition = 1+ Math.round(Math.random()* 3); 

            document.getElementById("box"+correctPosition).innerHTML=correctAnswer; // fill one box with correct answer
            var answers = [correctAnswer];
            // fill remaining box with wrong answers
            for(i=1; i<5; i++){
                if( i !== correctPosition){
                    var wrongAnswer ;
                    do{
                        wrongAnswer= (1+ Math.round(Math.random()* 9)) * (1+ Math.round(Math.random()* 9)); // wrong answer

                    }while(answers.indexOf(wrongAnswer) >-1)
                    document.getElementById("box"+i).innerHTML=wrongAnswer; 
                    answers.push(wrongAnswer);
                
                }
            }
        }
        //function to stop the countdown
        function stopCountDown(){
            clearInterval(action);
            document.getElementById("timevalue").innerHTML = timeCounter;
        }
        //hide element
        function hide(id){
            document.getElementById(id).style.display="none";
        }
          //show element
          function show(id){
              var rand = 1+ Math.round(Math.random()* 2)
                document.getElementById("correct").innerHTML=  congratsvalue[rand];
              
            document.getElementById(id).style.display="block";
        }
