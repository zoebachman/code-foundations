var sel, sel2;
var functionChoice, dataChoice;
var bg;


function preload(){
  bg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/data-types/Computer.png')
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  image(bg, 0, 40);
  smileyFace();
}

//for some reason, the image disappears
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

// this needs to be reloaded so that outputs can change and not layer
function reloadThis(){
  image(bg, 0, 40);
}

function draw(){
}

function checkFunction(){
  console.log("call me!");
  sel = select('#function');
  // sel = select('#function.select-selected')
  programChoice = sel.value();

  reloadThis();

  fill('#7ed321');
  textSize(30);
  textStyle(BOLD);
  textFont('Lucida Grande');

  var x = 670;
  var y = 310;

  if (programChoice == 0){
    programChoice = 'select';
  } else if (programChoice == 1){
    programChoice = 'square';
    text('Function:', x, y);
    text('Square', x+15, y+50);
  } else if (programChoice == 2) {
    programChoice = 'capitalize'
    text('Function:', x, y);
    text('Capitalize', x-5, y+50);
  } else if (programChoice == 3) {
    programChoice = 'evaluate'
    text('Function:', x, y);
    text('Evaluate', x+5, y+50);
  }

  console.log("Function:", programChoice);
  return programChoice;
}


function checkData(){
    sel2 = select('#value');
    dataChoice = sel2.value();
    console.log(dataChoice);

    reloadThis();

    fill('#7ed321');
    textSize(30);
    textStyle(BOLD);
    textFont('Lucida Grande');

    var x = 690;
    var y = 310;


    if (dataChoice == 0){
      dataChoice = 'select';
    } else if (dataChoice == 1){
      dataChoice = 'kangaroo';
      text('Input:', x, y);
      text('kangaroo', x-25, y+50);
    } else if (dataChoice == 2) {
      dataChoice = '4637'
      text('Input:', x, y);
      text('4637', x, y+50);
    } else if (dataChoice == 3) {
      dataChoice = 'true'
      text('Input:', x, y);
      text('true', x+10, y+50);
    }

    console.log("Input:", dataChoice);
    return dataChoice
}

function checkInputs(){
  // turn dropdowns into DOM elements
  if (programChoice || dataChoice == null){
    fill('red');
    text('ERROR', x, y);
  }

  reloadThis();
  console.log("reloaded!")

  textSize(18);

  textSize(30);
  textStyle(BOLD);

  var x = 680;
  var y = 310;

  // if functionChoice is square:
  if (programChoice == 'square' && dataChoice == '4637'){
    var squareMe = squareNumber(dataChoice)
    console.log(squareMe);
    fill('#7ed321');
    // text(squareMe, width/2+180, height/2+50);
    text('Output:', x, y);
    text(squareMe, x-20, y+50); // maybe I should make this a dom element, too so I can style
  } else if (programChoice == 'square' && dataChoice == 'kangaroo'){
    fill('red');
    text('ERROR:', x, y);
    text('string input', x-35, y+50);
  } else if (programChoice == 'square' && dataChoice == 'true'){
    fill('red');
    text('ERROR:', x, y);
    text('boolean input', x-55, y+50);

  // if functionChoice is capitalize:
  } else if (programChoice == 'capitalize' && dataChoice == 'kangaroo'){
    var capitalizeMe = capitalizeString(dataChoice)
    console.log(capitalizeMe);
    fill('#7ed321');
    text("Output:", x, y);
    text(capitalizeMe, x-35, y+50);
  } else if (programChoice == 'capitalize' && dataChoice == '4637'){
    fill('red');
    text('ERROR:', x, y);
    text('number input', x-55, y+50);
  } else if (programChoice == 'capitalize' && dataChoice == 'true'){
    fill('red');
    text('ERROR:', x, y);
    text('boolean input', x-55, y+50);

  // if functionChoice is evaluate:
  } else if (programChoice == 'evaluate' && dataChoice == 'true'){
    var evaluateMe = evaluateBool(dataChoice)
    console.log(evaluateMe);
    fill('#7ed321');
    text("Output:", x, y);
    text(evaluateMe, x-20, y+50);
  } else if (programChoice == 'evaluate' && dataChoice == '4637'){
    fill('red');
    text('ERROR:', x, y);
    text('number input', x-55, y+50);
  } else if (programChoice == 'evaluate' && dataChoice == 'kangaroo'){
    fill('red');
    text('ERROR:', x, y);
    text('string input', x-35, y+50);
  } else {
    fill('red');
    text('ERROR', x, y);
  }
}

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
