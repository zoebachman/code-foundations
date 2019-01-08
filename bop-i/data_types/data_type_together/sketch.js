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

function checkInputs(){
  if (programChoice == null){
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


  if (programChoice == 'square'){
    var squareMe = squareNumber(myNumber)

    try {
      if(myNumber == "") throw "empty";
      if(isNaN(myNumber)) throw "not a number";
      if(myNumber == true) throw "not a number"
      if(myNumber == false) throw "not a number"

      if(myNumber == Number(myNumber)){
        fill('#7ed321');
        text('Output:', x, y);
        var output = text(squareMe, x-20, y+50);
      }
    }
    catch(err) {
      textSize(14);
      fill('red');
      text('ERROR:', x, y);
      output = text("Input is " + err, x-35, y+50);
    }

  } else if (programChoice == 'capitalize'){
    var capitalizeMe = capitalizeString(myString)

    try {
      if(myString == "") throw "empty"
      if(typeof myString == "undefined") throw "undefined"
      if(typeof myString.valueOf() != "string") throw "not a string"

      if(myString == String(myString)){
        fill('#7ed321');
        text('Output:', x, y);
        output = text(capitalizeMe, x-35, y+50);
      }
    }
    catch(err) {
      textSize(14);
      fill('red');
      text('ERROR:', x, y);
      output = text("Input is " + err, x-35, y+50);
    }

  } else if (programChoice == 'evaluate'){

var evaluateMe = evaluateBool(myBool)


    console.log(evaluateMe)

    try {
      // if(myBool == "") throw "empty"
      // if(typeof myBool == "undefined") throw "undefined"
      if(typeof myBool.valueOf() != "boolean") throw "not a boolean"

      if(myBool == Boolean(myBool)){

       fill('#7ed321');
       text("Output:", x, y);
       output = text(evaluateMe, x-20, y+50);
      }
    }
    catch(err) {
      textSize(14);
      fill('red');
      text('ERROR:', x, y);
      output = text("Input is " + err, x-35, y+50);
    }
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
  if(bool == true){
    return "yes"
  } else if(bool != true){
    return "no"
  }
}
