var variableA;

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(180);
  drawShapes();
}

function drawShapes(){
  variableA = parseInt(document.getElementById("variableA").value);
  variableB = parseInt(document.getElementById("variableB").value);
  variableC = parseInt(document.getElementById("variableC").value);

  // should try and figure out how to do inverse

  ellipse(variableA+10, variableB, variableC)
}
