var sel, sel2;
var functionChoice, dataChoice;
var bg, bgImage;

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

var wUnit;
var hUnit;

function preload(){
  bg = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/data-types/Computer.png')
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);

  // Expects Oxygen imported as <link> in HTML
  textFont('Oxygen');
  textSize(18);

  // The canvas will be divided into a 36 x 36 grid
  wUnit = windowWidth / 36;
  hUnit = windowHeight / 36;

  const imageWidth = constants.imageW*(wUnit*.028)
  const imageHeight = constants.imageH*(wUnit*.028)

  bgImage = {x: 0, y: hUnit*2.5,
    w: imageWidth, h: imageHeight};

  image(bg, bgImage.x, bgImage.y, bgImage.w, bgImage.h);

  //dynamically style width of dropdowns << not sure if necessary
  // selDiv = select('#sel')
  // var dropdownWidth = constants.selectW*(1.20*wUnit)
  // var widthValue = dropdownWidth.toString();
  // selDiv.style('width', widthValue +'px');

  //dynamically style button width
 transmitButton = select('#transmit');
 var buttonWidth = constants.selectW*(1.40*wUnit)
 var widthValue = buttonWidth.toString();
 transmitButton.style('width', widthValue +'px');

//dynamically style left margin of regButtonH
var buttonMarginLeft = constants.selectW*(.75*wUnit)
var marginLeftValue = buttonMarginLeft.toString();
transmitButton.style('margin-left', marginLeftValue +'px');



  smileyFace();
}

// this needs to be reloaded so that outputs can change and not layer
function reloadThis(){
  image(bg, bgImage.x, bgImage.y, bgImage.w, bgImage.h);
}


function checkFunction(){
  console.log("call me!");

  // get value
  sel = select('#function')
  programChoice = sel.value();

  reloadThis();

  fill('#7ed321');

  myTextSize = constants.textSize * (.05 * wUnit)
  textSize(myTextSize);
  textStyle(BOLD);
  textFont('Lucida Grande');

// change these to use wUnit and hUnit
  // var x = 670;
  // var y = 310;
  x = constants.screenX * (.028 * wUnit)
  y = constants.screenY * (.038 * hUnit)
  xDistance = 12 * (.04 * wUnit)
  yDistance = 10 * (.056 * hUnit)

  // need to change distance of text as well

  // if (programChoice == 0){
  //   programChoice = 'select';
  // } else if (programChoice == 1){
  //   programChoice = 'square';
  //   text('Function:', x, y);
  //   text('Square', x+15, y+50);
  // } else if (programChoice == 2) {
  //   programChoice = 'capitalize'
  //   text('Function:', x, y);
  //   text('Capitalize', x-5, y+50);
  // } else if (programChoice == 3) {
  //   programChoice = 'evaluate'
  //   text('Function:', x, y);
  //   text('Evaluate', x+5, y+50);
  // }
  if (programChoice == 0){
    programChoice = 'select';
  } else if (programChoice == 1){
    programChoice = 'square';
    text('Function:', x, y);
    text('Square', x+xDistance, y+(yDistance*4.5));
  } else if (programChoice == 2) {
    programChoice = 'capitalize'
    text('Function:', x, y);
    text('Capitalize', x-(xDistance*.05), y+(yDistance*4.5));
  } else if (programChoice == 3) {
    programChoice = 'evaluate'
    text('Function:', x, y);
    text('Evaluate', x+(xDistance*.05), y+(yDistance*4.5));
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
    myTextSize = constants.textSize * (.05 * wUnit)
    textSize(myTextSize);
    textStyle(BOLD);
    textFont('Lucida Grande');

    // var x = 690;
    // var y = 310;

    x = constants.screenX * (.029 * wUnit)
    y = constants.screenY * (.038 * hUnit)
    xDistance = 12 * (.04 * wUnit)
    yDistance = 10 * (.056 * hUnit)


    // if (dataChoice == 0){
    //   dataChoice = 'select';
    // } else if (dataChoice == 1){
    //   dataChoice = 'kangaroo';
    //   text('Input:', x, y);
    //   text('kangaroo', x-25, y+50);
    // } else if (dataChoice == 2) {
    //   dataChoice = '4637'
    //   text('Input:', x, y);
    //   text('4637', x, y+50);
    // } else if (dataChoice == 3) {
    //   dataChoice = 'true'
    //   text('Input:', x, y);
    //   text('true', x+10, y+50);
    // }

    if (dataChoice == 0){
      dataChoice = 'select';
    } else if (dataChoice == 1){
      dataChoice = 'kangaroo';
      text('Input:', x, y);
      text('kangaroo', x-(xDistance*2), y+(yDistance*4.5));
    } else if (dataChoice == 2) {
      dataChoice = '4637'
      text('Input:', x, y);
      text('4637', x, y+(yDistance*4.5));
    } else if (dataChoice == 3) {
      dataChoice = 'true'
      text('Input:', x, y);
      text('True', x+(xDistance*.2), y+(yDistance*4.5));
    }

    console.log("Input:", dataChoice);
    return dataChoice
}

function checkInputs(){
  // var x = 680;
  // var y = 310;

  x = constants.screenX * (.028 * wUnit)
  y = constants.screenY * (.038 * hUnit)
  xDistance = 12 * (.04 * wUnit)
  yDistance = 10 * (.056 * hUnit)

  // turn dropdowns into DOM elements
  if (programChoice || dataChoice == null){
    fill('red');
    text('ERROR', x, y);
  }

  reloadThis();
  console.log("reloaded!")

  myTextSize = constants.textSize * (.05 * wUnit)
  textSize(myTextSize);
  textStyle(BOLD);



  // if functionChoice is square:
  if (programChoice == 'square' && dataChoice == '4637'){
    var squareMe = squareNumber(dataChoice)
    console.log(squareMe);
    fill('#7ed321');
    // text(squareMe, width/2+180, height/2+50);
    text('Output:', x, y);
    text(squareMe, x-(xDistance*1.2), y+(yDistance*4.5)); // maybe I should make this a dom element, too so I can style
  } else if (programChoice == 'square' && dataChoice == 'kangaroo'){
    fill('red');
    text('ERROR:', x, y);
    text('string input', x-(xDistance*2.35), y+(yDistance*4.5));
  } else if (programChoice == 'square' && dataChoice == 'true'){
    fill('red');
    text('ERROR:', x, y);
    text('boolean input', x-(xDistance*2.55), y+(yDistance*4.5));

  // if functionChoice is capitalize:
  } else if (programChoice == 'capitalize' && dataChoice == 'kangaroo'){
    var capitalizeMe = capitalizeString(dataChoice)
    console.log(capitalizeMe);
    fill('#7ed321');
    text("Output:", x, y);
    text(capitalizeMe, x-(xDistance*2.35), y+(yDistance*4.5));
  } else if (programChoice == 'capitalize' && dataChoice == '4637'){
    fill('red');
    text('ERROR:', x, y);
    text('number input', x-(xDistance*2.55), y+(yDistance*4.5));
  } else if (programChoice == 'capitalize' && dataChoice == 'true'){
    fill('red');
    text('ERROR:', x, y);
    text('boolean input', x-(xDistance*2.55), y+(yDistance*4.5));

  // if functionChoice is evaluate:
  } else if (programChoice == 'evaluate' && dataChoice == 'true'){
    var evaluateMe = evaluateBool(dataChoice)
    console.log(evaluateMe);
    fill('#7ed321');
    text("Output:", x, y);
    text(evaluateMe, x+(xDistance*2.55), y+(yDistance*4.5));
  } else if (programChoice == 'evaluate' && dataChoice == '4637'){
    fill('red');
    text('ERROR:', x, y);
    text('number input', x-(xDistance*2.55), y+(yDistance*4.5));
  } else if (programChoice == 'evaluate' && dataChoice == 'kangaroo'){
    fill('red');
    text('ERROR:', x, y);
    text('string input', x-(xDistance*2.35), y+(yDistance*4.5));
  } else {
    fill('red');
    text('ERROR', x, y);
  }
}

function smileyFace() {
    fill('#7ed321');
    noStroke();
    var squareSize = constants.squareSize * (.096 * wUnit);

    // var x = 690;
    // var y = 300;

    // starting points
    x = constants.screenX * (.028 * wUnit)
    y = constants.screenY * (.035 * hUnit)
    xDistance = 12 * (.04 * wUnit)
    yDistance = 10 * (.056 * hUnit)

    // left eye
    rect(x+(xDistance), y, squareSize, squareSize);

    // right eye
    rect(x+(xDistance * 5), y, squareSize, squareSize);

    // smile
    // rect(x, y+40, squareSize, squareSize);
    // rect(x+12, y+50, squareSize, squareSize);
    // rect(x+24, y+60, squareSize, squareSize);
    // rect(x+36, y+60, squareSize, squareSize);
    // rect(x+48, y+60, squareSize, squareSize);
    // rect(x+60, y+50, squareSize, squareSize);
    // rect(x+72, y+40, squareSize, squareSize);

    rect(x, y+(yDistance * 4), squareSize, squareSize);
    rect(x+(xDistance), y+(yDistance * 5), squareSize, squareSize);
    rect(x+(xDistance * 2), y+(yDistance * 6), squareSize, squareSize);
    rect(x+(xDistance * 3), y+(yDistance * 6), squareSize, squareSize);
    rect(x+(xDistance * 4), y+(yDistance * 6), squareSize, squareSize);
    rect(x+(xDistance * 5), y+(yDistance * 5), squareSize, squareSize);
    rect(x+(xDistance * 6), y+(yDistance * 4), squareSize, squareSize);


// multiply by 12 , but 12 is what we need to change (n = 12)
//     x + n * 0
//     x + n * 1
//     2
//     3
//     4
//     5
//     6
//
// // for y, n is 10 and one that needs to change
//     y + 4 * 10
//     y + 5 * 10
//     y + 6 * 10
//     y + 6 * 10
//     y + 5 * 10
//     y + 4 * 10
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
