var userName = 'Sijo_Jose';
//create a ternary expression that decides what to do if the user enters a name or not.
userName ? console.log(`Hello, ${userName} !`) : console.log('Hellow');
//Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.
var userQuestion = 'HEY MAGIC BALL, CAN YOU PREDICT MY FUTURE?';
console.log(`the user asked: ${userQuestion}`);
//We need to generate a random number between 0 and 7, Math.random() returns a value between 0 (inclusive) and 1 (exclusive).In order to make this set of numbers range from 0 (inclusive) to 8 (exclusive) we can multiple the returned value by 8.
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
//We need to create a control flow that takes in the randomNumber we made in step 5, and then assigns eightBall to a reply that a Magic Eight Ball would return.
switch (randomNumber) {
  case 0: eightBall = 'Number was 0:It is certain ';
    break;

  case 1: eightBall = 'Number was 1:It is decidedly so ';
    break;

  case 2: eightBall = 'Number was 2:Reply hazy try again ';
    break;

  case 3: eightBall = 'Number was 3:Cannot predict now';
    break;

  case 4: eightBall = 'Number was 4:Do not count on it';
    break;

  case 5: eightBall = 'Number was 5:My sources say no';
    break;

  case 6: eightBall = 'Number was 6:Outlook not so good';
    break;

  case 7: eightBall = 'Number was 7:Signs point to yes';
    break;

  default: eightBall = "didn't catch that";
}

//Write a console.log() to print the Magic Eight Ball’s answer, the value of the eightBall variable.
console.log(`The Magic Eight Ball answered: ${eightBall}`);

