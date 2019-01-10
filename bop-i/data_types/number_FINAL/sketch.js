// user can zoom out and see numbers change
// inspired by powers of 10 video


var images = [];

// var imW = 1214;
// var imH = 866;

var distText = ['1', '10 ', '100', '1,000', '10,000', '100,000', '1',
'10', '100', '1,000', '10,000', '100,000'];

var distMeasure = ['meter', 'meters', 'meters', 'meters', 'meters', 'meters', 'million meters', 'million meters',
'million meters', 'million meters', 'million meters', 'million meters']

var powerOfTen = [];
var slider, val;

var constants = {
  background: '#f5a623',
  sliderW: 5,
  imageW: 1214,
  imageH: 866
};

var wUnit;
var hUnit;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black');
  fill('white');

  // Expects Oxygen imported as <link> in HTML
  textFont('Oxygen');
  textSize(18);

  // The canvas will be divided into a 36 x 36 grid
  wUnit = windowWidth / 36;
  hUnit = windowHeight / 36;


  // create variables for images
  for (var i = 1; i < 12; i++){
    var name = 'slide_' + i;
    name = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/numbers/assets/' + name +'.png');
    images.push(name);


    var num = i-1;
    powerOfTen.push(num);
  }
  backdrop();
}

function draw() {
    switchImage();
}

function backdrop() {
  // draw slider
  slider = select("#myRange");
  slider.position(width/2 - (7*wUnit), height-(5.5*hUnit));

  // console.log(slider.x)
  var sliderWidth = constants.sliderW*(3.0*wUnit)

    // console.log(sliderWidth);
  var valueToPass = sliderWidth.toString();

  slider.style('width', valueToPass +'px');
  var count = 1;
  val = slider.value();

// draw a series of red ellipses along the timeline
  for (var i = 0; i < 11; i++){
    sliderWidthNew = sliderWidth-(.35*wUnit)
    startingPoint = slider.x+6
    var dotX = (startingPoint + i*((sliderWidthNew)/10));
    fill('#fa4359');
    ellipse(dotX, slider.y+5, 12);
  }
}

function switchImage(){
  // show a different image at different slider value
  backdrop();
  val = slider.value();


  background('black');

  // draw image
  image(images[val], 0, 0, width, constants.imageH/(wUnit*.045));
  // width/2 - (13.5*wUnit)
  // constants.imageW/(wUnit*.045)

  // draw black rectangle
  var rectHeight = 200;
  fill('black');
  rect(0, height/2 + (hUnit*10), width, height - (hUnit*10));

  // draw distance text
  fill('white');
  textSize(30);
  textAlign(CENTER,CENTER);
  text(distText[val], width - wUnit*5.5, height - hUnit*5.5); //350

  push();
  textSize(30);
  text(distMeasure[val], width - wUnit*5.5, height - hUnit*3.5); //difference of 30px
  pop();

  // draw power of 10 text
  var ten = text('10', wUnit*6.5, height - hUnit*5.5); //300

  push();
  textSize(16);
  textAlign(CENTER, BOTTOM);
  text(powerOfTen[val], wUnit*7.5, height - hUnit*5.5); //270
  pop();

  push();
  textSize(30);
  text('meters', wUnit*6.5, height - hUnit*3.5);
  pop();

  // redraw a series of red ellipses along the timeline
  var sliderWidth = constants.sliderW*(3.0*wUnit)
    for (var i = 0; i < 11; i++){
      sliderWidthNew = sliderWidth-(.35*wUnit)
      startingPoint = slider.x+6
      var dotX = (startingPoint + i*((sliderWidthNew)/10));
      fill('#fa4359');
      ellipse(dotX, slider.y+6, 12);
    }
}
