var appleList = [];
var apple;

var orangeList = [];
var orange;

var myApple, myOrange, myOperator;

var fruitChoice, operatorChoice;

var recipeTitle, recipeDesc;

var leftText, rightText;

function preload(){
  // bg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/data-types/Computer.png');
  groundImg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/operators/green_ground.png');
  appleImg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/operators/apple_new.png');
  orangeImg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/operators/orange.png');
  reset = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-ii/refresh.png');
  checkmark = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/operators/checkmark.png');
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');

  background('orange');

  image(groundImg, 0, height-300);


  // set up scene
  renderText();
  positionDropDown();
  fruitSceneOne();
}

function draw() {
  // background("white");

  checkAnswer();

}


function changeScences(){
  // if (it is scene 1){
  //   fruitSceneOne();
  // } else if (it is scene 2) {
  //   fruitSceneOne();
  // } else if (it is scene 3) {
  //   fruitSceneThree();
  // }
}


function fruitSceneOne(){



  // draw a certain number of apples
  for (var i=0; i < 3; i++){
    newApple = new Apple();
    newApple.x += random(-500, -300);
    newApple.y += random(0, 200);

    // add to array
    appleList.push(newApple);
  }

  newOrange = new Orange();

  // draw a certain number of oranges
  for (var i=0; i < 2; i++){
    newOrange = new Orange();
    newOrange.x += random(-20, 220);
    newOrange.y += random(0, 200);

    // add to array
    orangeList.push(newOrange);
  }
    renderFruits();
}


function fruitSceneTwo(){ //not
// code to change text of recipe desc.

recipeTitle.html("Recipe 2: Applesauce")
recipeDesc.html("A recipe that includes apples");

leftText.hide();
rightText.html("(has <b>3</b> oranges)");

// hide fruits that are there

for (var i=0; i < 3; i++){
  appleList.pop();
  renderFruits();
}

console.log(appleList.length);





// draw a certain number of apples
  // for (var i=0; i < 3; i++){
  //   newApple = new Apple();
  //   newApple.x += random(-20, 20);
  //   newApple.y += random(-20, 20);
  //
  //   // add to array
  //   appleList.push(newApple);
  // }
  //
  // newOrange = new Orange();
  //
  // // draw a certain number of oranges
  // for (var i=0; i < 5; i++){
  //   newOrange = new Orange();
  //   newOrange.x += random(-20, 20);
  //   newOrange.y += random(-20, 20);
  //
  //   // add to array
  //   orangeList.push(newOrange);
  // }
  //   renderFruits();
}


function fruitSceneThree(){

  // code to change text of recipe desc.
  recipeTitle.html("Recipe 3: Fruit Juice")
  recipeDesc.html("A recipe can use either fruits");

  leftText.html("(has <b>4</b> apples)");
  leftText.show();
  leftText.style('display', 'inline');
  rightText.html("(has <b>4</b> oranges)");


  // draw a certain number of apples
  for (var i=0; i < 4; i++){
    newApple = new Apple();
    newApple.x += random(-500, -300);
    newApple.y += random(0, 200);

    // add to array
    appleList.push(newApple);
  }

  newOrange = new Orange();

  // draw a certain number of oranges
  for (var i=0; i < 4; i++){
    newOrange = new Orange();
    newOrange.x += random(-20, 220);
    newOrange.y += random(0, 200);

    // add to array
    orangeList.push(newOrange);
  }
    renderFruits();
}

function renderFruits() {
  for (var i = 0; i < appleList.length; i++) {
    var myApple = appleList[i];
    myApple.display();
  }

  for (var j = 0; j < orangeList.length; j++) {
    var myOrange = orangeList[j];
    myOrange.display();
  }
  //
  // fill("black");
  // text("Number of Apples: " + appleList.length, 10, 30);
  // text("Number of Oranges: " + orangeList.length, 10, 40);
}

function renderText() {

  cardBG = select('#card');
  cardBG.style('background-color', 'white');

  recipeTitle = select('#recipe-title');
  recipeDesc = select('#recipe-desc');

  recipeTitle.position(width/2 - 200, 100);
  recipeDesc.position(width/2 - 200, 150);

  leftText = select('#apple-text');
  rightText = select('#orange-text');
  // logic to check scene? or does that happen in the other stuff?
  // if it's scene 1
}

function positionDropDown() {
  fill("black");

  textDropDown = select('#container');
  textDropDown.position(width/2 - 200, height/2 - 100);
}


function getOperatorValue() {
  selectOperator = select('#number', 'value')
  operatorChoice = selectOperator.value();
  // console.log(operatorChoice)
  return operatorChoice;
}


function checkAnswer(myOperator){
  fill("black");
  myOperator = getOperatorValue();

  if(myOperator == "AND" && appleList.length == 3 && orangeList.length == 2){
    text("Correct!", width/2, 100);
    image(checkmark, width/2-10, 100);

    // switch scene
    fruitSceneTwo();

  } else if (myOperator == "NOT" && appleList.length == 0 && orangeList.length > 0){
    // background("white");
    text("Correct!", width/2, 100);
    image(checkmark, width/2-10, 100);

    // switch scene
    fruitSceneThree();

  } else if (myOperator == "OR" && appleList.length == 4 || orangeList.length == 4){
    text("Correct!", width/2, 100);
    image(checkmark, width/2-10, 100);
}
}


class Apple {
  constructor(x, y) {
    this.x =  width/2;
    this.y =  height/2;
  }

  display(){
    var bounceApple = image(appleImg, this.x, this.y, 100, 100);
    // animation
  }
}

class Orange {
  constructor(x, y) {
    this.x =  width/2;
    this.y =  height/2;
  }

  display(){
    var bounceApple = image(orangeImg, this.x, this.y, 100, 100);
    // animation
  }
}
