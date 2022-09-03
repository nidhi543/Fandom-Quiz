import readlineSync from 'readline-sync';
import chalk from 'chalk';

var userName = readlineSync.question("Please enter your name >> \n");

console.log(chalk.bold.yellow("Welcome "+ chalk.underline.green(userName) +" to DO YOU KNOW JAVASCRIPT? "));

var highScore =[{name: "Tanay",
                score: 5},
                {name: "Nidhi",
                score: 4}];

var questions = [{question:"1.Inside which HTML element do we put the JavaScript?\n\n a.javascript\n b.script\n c.scripting\n ",
                  answer:"b"},
                {question:"Where is the correct place to insert a JavaScript?\n\n a.head\n b.body\n c.both a and b\n",
                  answer:"c"},
                {question:"How do you create a function in JavaScript? \n\n a.function = myFunction() \n b.function: myFunction()\n c.function myFunction()\n",
                  answer:"c"},
                {question:"How can you add a comment in a JavaScript? \n\n a.// comment\n b.'comment\n c.<!--comment-->\n",
                  answer:"a"},
                {question:"JavaScript is same as Java?\n\n a.True\n b.False \n",
                  answer:"b"},]
var score = 0;
function quiz(question,answer){
 var userAns = readlineSync.question(question);
  if(userAns === answer){
    score++;
    console.log(chalk.bold.green("Current Score: " + score));
  }else{
    console.log(chalk.bold.red("Current Score:" + score));
  }
  console.log("----------------------");
}

function play(){
 for(var i = 0 ; i< questions.length; i++){
   var currentQues = questions[i];
   quiz(currentQues.question, currentQues.answer);
 }
}

function showScore(){
console.log(chalk.italic.yellow("Ckeck out the high score, if you should be there, ping me!, I'll update it!"));
  highScore.map(score => console.log(score.name+ ": "+score.score ));
    if(score>=3){
  console.log(chalk.underline.bgGreen("Your score:" + score));
  }
  else{
  console.log(chalk.underline.bgRed("Your score:" + score));
  }
  
}

play();
showScore();
