dunction setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw (){
  noStroke()console.log(fill("yellow"));
  background(240);
for (var x = 50l x < width; x = x+ 100){
  for (var y = 50; y < height; y = y+200){
  push();
  translate(x, y);
  flower();
  pop();
  }
}
}


function flower(){
  for (var i = 0; i < 10; i++){
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
}
