var sel, sel2;
var functionChoice, dataChoice;
var bg;

var constants = {
  regButtonW: 6.5,
  regButtonH: 2,
  selectW: 5,
  selectH: 1.5,
  imageW: 1214,
  imageH: 753,
  screenX: 670,
  screenY: 310,
  squareSize: 5,
  textSize: 18
};

function preload(){
  bg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/data-types/Computer.png')
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);

  // The canvas will be divided into a 36 x 36 grid
  wUnit = windowWidth / 36;
  hUnit = windowHeight / 36;

  const imageWidth = constants.imageW*(wUnit*.033)
  const imageHeight = constants.imageH*(wUnit*.033)

  bgImage = {x: -wUnit*3.5, y: hUnit*5,
    w: imageWidth, h: imageHeight};

  image(bg, bgImage.x, bgImage.y, bgImage.w, bgImage.h);

  smileyFace();
}


// this needs to be reloaded so that outputs can change and not layer
function reloadThis(){
  image(bg, bgImage.x, bgImage.y, bgImage.w, bgImage.h);
}


function checkFunction(){
  console.log("call me!");
  sel = select('#function');
  programChoice = sel.value();

  reloadThis();

  fill('#7ed321');
    myTextSize = constants.textSize * (.05 * wUnit)
  textSize(myTextSize);
  textStyle(BOLD);
  textFont('Lucida Grande');

  x = constants.screenX * (.028 * wUnit)
  y = constants.screenY * (.038 * hUnit)

  xDistance = 12 * (.04 * wUnit)
  yDistance = 10 * (.056 * hUnit)

  if (programChoice == 0){
    programChoice = 'select';
  } else if (programChoice == 1){
    programChoice = 'square';
    text('Function:', x-(xDistance*.3), y);
    text('Square', x-(xDistance*.3), y+(yDistance*2));
  } else if (programChoice == 2) {
    programChoice = 'capitalize'
    text('Function:', x-(xDistance*.3), y);
    text('Capitalize', x-(xDistance*.3), y+(yDistance*2));
  } else if (programChoice == 3) {
    programChoice = 'evaluate'
    text('Function:', x-(xDistance*.3), y);
    text('Evaluate', x-(xDistance*.3), y+(yDistance*2));
  }


  console.log("Function:", programChoice);
  return programChoice;
}

function checkInputs(){
  if (programChoice == null){
    fill('red');
    text('ERROR:', x-(xDistance*.3), y);
  }

  reloadThis();
  console.log("reloaded!")

    myTextSize = constants.textSize * (.05 * wUnit)
  textSize(myTextSize);
  textStyle(BOLD);

  x = constants.screenX * (.028 * wUnit)
  y = constants.screenY * (.038 * hUnit)

  xDistance = 12 * (.04 * wUnit)
  yDistance = 10 * (.056 * hUnit)

  if (programChoice == 'square'){
    var squareMe = squareNumber(myNumber)

    try {
      if(myNumber == "") throw "empty";
      if(isNaN(myNumber)) throw "\nnot number";
      if(myNumber == true) throw "\nnot number"
      if(myNumber == false) throw "\nnot number"

      if(myNumber == Number(myNumber)){
        fill('#7ed321');
        text('Output:', x-(xDistance*.3), y);
        output = text(squareMe, x-(xDistance*.3), y+(yDistance*2));
      }
    }
    catch(err) {
      textSize(14);
      fill('red');
      text('ERROR:', x-(xDistance*.3), y);
      output = text("Input is " + err, x-(xDistance*.3), y+(yDistance*2));
    }

  } else if (programChoice == 'capitalize'){
    var capitalizeMe = capitalizeString(myString)

    try {
      if(myString == "") throw "empty"
      if(typeof myString == "undefined") throw "undefined"
      if(typeof myString.valueOf() != "string") throw "\nnot string"

      if(myString == String(myString)){
        fill('#7ed321');
        text('Output:',  x-(xDistance*.3), y);
        output = text(capitalizeMe,  x-(xDistance*.3), y+(yDistance*2));
      }
    }
    catch(err) {
      textSize(14);
      fill('red');
      text('ERROR:', x-(xDistance*.3), y);
      output = text("Input is " + err, x-(xDistance*.3), y+(yDistance*2));
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
       text('Output:',  x-(xDistance*.3), y);
       output = text(evaluateMe, x-(xDistance*.3), y+(yDistance*2));
      }
    }
    catch(err) {
      textSize(14);
      fill('red');
      text('ERROR:', x-(xDistance*.3), y);
      output = text("Input is " + err, x-(xDistance*.3), y+(yDistance*2));
    }
 }
}

function smileyFace() {
    fill('#7ed321');
    noStroke();
    var squareSize = constants.squareSize * (.096 * wUnit);



  // starting points
  x = constants.screenX * (.0285 * wUnit)
  y = constants.screenY * (.035 * hUnit)
  xDistance = 12 * (.04 * wUnit)
  yDistance = 10 * (.04 * hUnit)

    // left eye
    rect(x+(xDistance), y, squareSize, squareSize);

    // right eye
    rect(x+(xDistance * 5), y, squareSize, squareSize);

    rect(x, y+(yDistance * 4), squareSize, squareSize);
    rect(x+(xDistance), y+(yDistance * 5), squareSize, squareSize);
    rect(x+(xDistance * 2), y+(yDistance * 6), squareSize, squareSize);
    rect(x+(xDistance * 3), y+(yDistance * 6), squareSize, squareSize);
    rect(x+(xDistance * 4), y+(yDistance * 6), squareSize, squareSize);
    rect(x+(xDistance * 5), y+(yDistance * 5), squareSize, squareSize);
    rect(x+(xDistance * 6), y+(yDistance * 4), squareSize, squareSize);
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
