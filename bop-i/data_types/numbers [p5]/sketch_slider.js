// user can zoom out and see numbers change
// inspired by powers of 10 video


var images = [];

var imW = 1214;
var imH = 866;

var distText = ['1', '10 ', '100', '1,000', '10,000', '100,000', '1',
'10', '100', '1,000', '10,000', '100,000'];

var distMeasure = ['meter', 'meters', 'meters', 'meters', 'meters', 'meters', 'million meters', 'million meters',
'million meters', 'million meters', 'million meters', 'million meters']

var powerOfTen = [];
var slider, val;

function setup() {

  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');

  // Move the canvas so it’s inside our <div id="sketch-holder">.
  cnv.parent('sketch-holder');
  background('black');
  fill('white');

  // create variables for images
  for (var i = 1; i < 12; i++){
    var name = 'slide_' + i;
    name = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/numbers/assets/' + name +'.png');
    images.push(name);

    var num = i-1;
    powerOfTen.push(num);
  }



  slider = select("#myRange");

}

function draw() {
  switchImage();
}


function switchImage(){
  // show a different image each timeout
  val = slider.value();
  // console.log(val);

  background('black');

  // draw image
  image(images[val], width/2 - 400, 0, imW/1.5, imH/1.5);

  // draw black rectangle

  var rectHeight = 200;
  fill('black');
  rect(0, 500, width, 130);

  // draw slider

  slider.position(width/2 - 200, height/2 + 230);
  slider.style('width', '500px');

  fill('white');
  textSize(30);
  textAlign(CENTER,CENTER);

  // draw distance
  text(distText[val], width/2 + 350, 530);

  push();
  textSize(30);
  text(distMeasure[val], width/2 + 350, 560);
  pop();

  // draw power of 10
  var ten = text('10', width/2 - 300, 530);

  push();
  textSize(16);
  textAlign(CENTER, BOTTOM);
  text(powerOfTen[val], width/2 - 270, 530);
  pop();

  push();
  textSize(30);
  text('meters', width/2 - 300, 560);
  pop();

  // console.log(distText[val]);
}
