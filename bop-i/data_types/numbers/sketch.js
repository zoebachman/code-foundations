// user can zoom out and see numbers change
// inspired by powers of 10 video



var images = [];

var distText = ['1 meter', '10 meters', '100 meters', '1,000 meters', '10,000 meters', '100,000 meters', '1 million meters',
'10 million meters', '100 million meters', '1,000 million meters', '10,000 million meters', '100,000 million meters',
'1 million million meters', '10 million million meters', '100 million million meters', '1,000 million million meters', '1 light year',
'10 light years', '100 light years', '1,000 light years', '10,000 light years', '100,000 light years', '1 million light years',
'10 million light years', '100 million light years'];

var powerOfTen = [];

var cnv;
var counter;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  background('black');
  fill('white');

  // create variables for images
  for (var i = 0; i < 25; i++){
    var name = 'img' + i;
    name = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/numbers/assets/' + '10-' + i +'.png');
    images.push(name);

    var num = i;
    powerOfTen.push(num);
  }

  counter = 0;

  cnv.mouseWheel(switchImage);
}

function mouseWheel() {

  if (counter >= 24) {
  counter--;
} else if (counter <= 0){
  counter++;
  }

  if (event.deltaY > 0) {
  counter++;
  } else {
  counter--;
  }

  console.log(counter);
}


function switchImage(){
  // show a different image each timeout


  background('black');
  fill('white');
  textSize(30);
  textAlign(CENTER,CENTER);

  // draw image
  image(images[counter], width/2 - 210, 30, 400, 400);

  // draw distance (rotated)
  push();
  translate(50,400);
  rotate(radians(-90));
  text(distText[counter], 150, width/2 - 300);
  pop();

  // draw power of 10
  var ten = text('10', width/2 + 230, 130);

  push();
  textAlign(CENTER, BOTTOM);
  text(powerOfTen[counter], width/2 + 260, 130);
  pop();

  push();
  textSize(20);
  text('meters', width/2 + 230, 150);
  pop();

  //console.log(distText[counter]);
}
