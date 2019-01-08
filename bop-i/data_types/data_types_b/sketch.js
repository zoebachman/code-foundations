var sel, sel2;
var dataChoice;
var bg;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);

  bg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/data-types/Computer.png');

  var x = 150;
  var y = 10;

  // div = createDiv();
  // div.class('custom-select');

  sel = createSelect();
  // sel.parent(div);
  sel.position(x, y);
  sel.option('select function');
  sel.option('square');
  sel.option('capitalize');
  sel.option('evaluate');
  sel.class('dropdown');
  sel.style('width:200px; height:40px;');

  // div2 = createDiv();
  // div2.class('custom-select');

  sel2 = createSelect();
  // sel2.parent(div2);
  sel2.position(sel.x + sel.width + 200, y);
  sel2.option('select data type');
  sel2.option('4637');
  sel2.option('kangaroo');
  sel2.option('true');
  sel2.class('dropdown');
  sel2.style('width:200px; height:40px;');

  var functionText = createP('Function: ');
  functionText.position(sel.x - 100, y);
  functionText.id('text');
  functionText.style('width:88px; height:26px;')

  var inputText = createP('Input: ');
  inputText.position(sel.x + sel.width + 100, y);
  inputText.id('text');
  inputText.style('width:88px; height:26px;')

  var transmitButton = createButton('Transmit!');
  transmitButton.position(inputText.x + inputText.width + 400, y);
  transmitButton.id('transmitButton');

  // reloadThis();
}

// for some reason, the image disappears
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

// this is the structure
// function reloadThis(){
//   fill("black");
//   textSize(20);
//   text("Function: ", sel.x - 100, 20);
//
//   fill("black");
//   textSize(20);
//   text("Input: ", sel2.x - 100, 20);
//
//   loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/data-types/Computer.png', function(img) {
//     image(img, 0, 50);
//   });
// }

function smileyFace() {
    fill('#7ed321');
    noStroke();
    var squareSize = 12;

    var x = 690;
    var y = 300;
    // left eye
    rect(x + 12, y, squareSize, squareSize);

    // right eye
    rect(x + 60, y, squareSize, squareSize);

    // smile
    rect(x, y+40, squareSize, squareSize);
    rect(x+12, y+50, squareSize, squareSize);
    rect(x+24, y+60, squareSize, squareSize);
    rect(x+36, y+60, squareSize, squareSize);
    rect(x+48, y+60, squareSize, squareSize);
    rect(x+60, y+50, squareSize, squareSize);
    rect(x+72, y+40, squareSize, squareSize);
}

function draw() {
  image(bg, 0, 40);
  sel.changed(determineAbility);
  sel2.changed(determineAbility);
  smileyFace();
}

function determineAbility (){
  var programChoice = sel.value()
  console.log(programChoice);

  var dataChoice = sel2.value();
  console.log(dataChoice);

  // reloadThis();

  fill('white');
  textSize(18);


  if (programChoice == 'square' && dataChoice == '4637'){
    var squareMe = squareNumber(dataChoice)
    console.log(squareMe);
    fill(0, 255, 0);
    text(squareMe, width/2+180, height/2+50);
  } else if (programChoice == 'square' && dataChoice == 'kangaroo'){
    fill('red');
    text('ERROR: this is a string', width/2+180, height/2+50);
  } else if (programChoice == 'square' && dataChoice == 'true'){
    fill('red');
    text('ERROR: this is a boolean', width/2+180, height/2+50);

  } else if (programChoice == 'capitalize' && dataChoice == 'kangaroo'){
    var capitalizeMe = capitalizeString(dataChoice)
    console.log(capitalizeMe);
    fill(0, 255, 0);
    text(capitalizeMe, width/2+180, height/2+50);
  } else if (programChoice == 'capitalize' && dataChoice == '4637'){
    fill('red');
    text('ERROR: this is a number', width/2+180, height/2+50);
  } else if (programChoice == 'capitalize' && dataChoice == 'true'){
    fill('red');
    text('ERROR: this is a boolean', width/2+180, height/2+50);

  } else if (programChoice == 'evaluate' && dataChoice == 'true'){
    var evaluateMe = evaluateBool(dataChoice)
    console.log(evaluateMe);
    fill(0, 255, 0);
    text(evaluateMe, width/2+180, height/2+50);
  } else if (programChoice == 'evaluate' && dataChoice == '4637'){
    fill('red');
    text('ERROR: this is a number', width/2+180, height/2+50);
  } else if (programChoice == 'evaluate' && dataChoice == 'kangaroo'){
    fill('red');
    text('ERROR: this is a string', width/2+180, height/2+50);
  }

}


function squareNumber(number){
  return (number*number)
}

function capitalizeString(string){
  return string.toUpperCase();
}

function evaluateBool(bool){
  if(bool == 'true'){
    return 1
  } else if(bool == 'false'){
    return 0
  }
}
