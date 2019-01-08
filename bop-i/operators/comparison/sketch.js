var appleList = [];
var apple;

var orangeList = [];
var orange;

var myApple, myOrange, myOperator;

var fruitChoice, operatorChoice;

function setup() {
  createCanvas(400, 400);

  // start with one apple
  var newApple = new apple();
  appleList.push(newApple);
	//console.log(appleList); // it exists

  // start with one orange
  var newOrange = new orange();
  orangeList.push(newOrange);
  //console.log(orangeList);

  // get comparison
  dropDown();
  var myOperator = getOperatorValue();
  console.log(myOperator);

  // get fruit
  fruitDropDown();
  var fruit = getFruitValue();

  // create buttons
  addButton = createButton('add');
  addButton.position(10, 400);
  addButton.mousePressed(addFruit);

  subtractButton = createButton('subtract');
  subtractButton.position(addButton.x + addButton.width, 400);
  subtractButton.mousePressed(subtractFruit);
}

function draw() {
  background("white");
  renderFruits();
  checkAnswer();

  fill("black");
  text("Number of Apples: " + appleList.length, 10, 30);
  text("Number of Oranges: " + orangeList.length, 10, 40);
}


function addFruit(fruit) {
  fruit = fruitChoice;

  if (fruit == 'apple') {
      newApple = new apple();
      newApple.x += random(-20, 20);
      newApple.y += random(-20, 20);

      // add to array
      appleList.push(newApple);
  } else if (fruit == ('orange')) {
      newOrange = new orange();
      newOrange.x += random(-20, 20);
      newOrange.y += random(-20, 20);

      // add to array
      orangeList.push(newOrange);
  }
      // display new array
      renderFruits();
}

function subtractFruit(fruit) {
  fruit = fruitChoice;

  if (fruit == 'apple') {
      appleList.pop();
  } else if (fruit == 'orange') {
      orangeList.pop();
  }
  // display new array
  renderFruits();
}

function renderFruits(fruit) {
  fruit = fruitChoice;

    for (var i = 0; i < appleList.length; i++) {
      var myApple = appleList[i];
      myApple.display();
    }

  for (var j = 0; j < orangeList.length; j++) {
    var myOrange = orangeList[j];
    myOrange.display();
  }
}

function apple(x, y, diameter, col) { // make an object
  this.x = width / 2 - 100;
  this.y = height / 2;
  this.diameter = 15;
  this.col = [122, 244, 66];
  this.display = function() {
    fill(this.col);
    ellipse(this.x, this.y, this.diameter);
  }
}

function orange(x, y, diameter, col) { // make an object
  this.x = width / 2 + 125;
  this.y = height / 2;
  this.diameter = 20;
  this.col = [244, 182, 66];
  this.display = function() {
    fill(this.col);
    ellipse(this.x, this.y, this.diameter);
  }
}

function dropDown() {
  sel = createSelect();
  sel.position(width/2-35, height/2-10);
  sel.option('-- compare --');
  sel.option('=');
  sel.option('<');
  sel.option('>');
  sel.changed(getOperatorValue);
}

function fruitDropDown() {
  selFruit = createSelect();
  selFruit.position(0, 375);
  selFruit.option('-- select fruit --');
  selFruit.option('apple');
  selFruit.option('orange');
  selFruit.changed(getFruitValue);
}

function getOperatorValue() {
  operatorChoice = sel.value()
  return operatorChoice;
}

function getFruitValue() {
  fruitChoice = selFruit.value()
  return fruitChoice;
}

function checkAnswer(){
  fill("black");
  myOperator = getOperatorValue();

  if(myOperator == "=" && (appleList.length == 4) && (orangeList.length == 4)){
    text("Correct!", width/2, 100);
  } else if (myOperator == "<" && (appleList.length == 3) && (orangeList.length == 5)){
    text("Correct!", width/2, 100);
  }else if (myOperator == ">" (appleList.length == 4) && (orangeList.length == 2)){
    text("Correct!", width/2, 100);
}
}
