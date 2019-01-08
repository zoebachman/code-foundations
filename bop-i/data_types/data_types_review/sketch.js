var sel, sel2;
var myNumber = 10;
var myString = "hello";
var myBool = true;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);

  sel = createSelect();
  sel.position(10, 10);
  sel.option('-- select function --');
  sel.option('square');
  sel.option('capitalize');
  sel.option('evaluate');
  sel.position(width/2 - 80, 125 )
  sel.changed(runFunction);

  reloadThis();
}


function myInput(){
  myNumber = 10;
  myString = "hello";
  myBool = true;
}


function runFunction (){

  var programChoice = sel.value()
  console.log(programChoice);

  myInput();

  reloadThis();

  fill("white");
  textSize(18);

  if (programChoice == 'square'){
    text(myNumber, width/2-360, height/2+50);
    var squareMe = squareNumber(myNumber)
    console.log(squareMe);
    text(squareMe, width/2+180, height/2+50);

  } else if (programChoice == 'capitalize'){
    text(myString, width/2-360, height/2+50);
    var capitalizeMe = capitalizeString(myString)
    console.log(capitalizeMe);
    text(capitalizeMe, width/2+180, height/2+50);

  } else if (programChoice == 'evaluate'){
    text(myBool, width/2-360, height/2+50);
    var evaluateMe = evaluateBool(myBool)
    console.log(evaluateMe);
    text(evaluateMe, width/2+180, height/2+50)
}

}


function squareNumber(number){
  return (number*number)
}

function capitalizeString(string){
  return string.toUpperCase();
}

function evaluateBool(bool){
  if(bool == true){
    return 1
  } else if(bool == false){
    return 0
  }
}

function reloadThis(){
  background('#003366');

  fill("white");
  textSize(36);
  text("FUNCTION", width/2-90, 100)

  fill("white");
  textSize(36);
  text("INPUT", width/2 - 360, height/2 + 20)

  loadImage('Desktop.png', function(img) {
    image(img, width/2-180, height/2-100);
  });

  fill("white");
  textSize(36);
  text("OUTPUT", width/2+170, height/2 + 20)
}
