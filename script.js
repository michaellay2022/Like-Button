//Step 1: Grab the element (where the target live) => If console, it will show us that this element live inside the <span class ="topCount">
var topElement = document.querySelector(".topCount");
console.log(topElement);

//Step 2: Once we identify the element, we use .innerHTML to the grab the string (even number is still a string in HTML) inside the element.

var topString = topElement.innerHTML; //we only want the string
console.log(topString);

//Step 3 - Convert string into an integer using ParseInt, so we can do Math to it.
var topNum = parseInt(topString);
console.log(topNum);

function topClick() {
  topNum++;
  // console.log(topNum) //

  topElement.innerHTML = topNum;
}

//mid Click

var midElement = document.querySelector(".midCount");
console.log(midElement);

var midString = midElement.innerHTML; //we only want the string
// console.log(midString);

var midNum = parseInt(midString);
// console.log(midNum);

function midClick() {
  midNum++;
  // console.log(topNum) //

  midElement.innerHTML = midNum;
}

//Bottom Click


var botElement = document.querySelector(".botCount");
console.log(botElement);

var botString = botElement.innerHTML; //we only want the string
// console.log(midString);

var botNum = parseInt(botString);
// console.log(midNum);

function botClick() {
  botNum++;
  // console.log(topNum) //

  botElement.innerHTML = botNum;
}