
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









var sel, sel2;

function setup() {
 var canvas = createCanvas(windowWidth, windowHeight);

 sel = createSelect();
 sel.position(10, 10);
 sel.option('-- select function --');
 sel.option('square');
 sel.option('capitalize');
 sel.option('evaluate');
 sel.position(width/2-40, 125 )
 sel.changed(determineAbility);

 reloadThis();
}

function determineAbility (){
 var programChoice = sel.value()
 reloadThis();

 fill("white");
 textSize(18);

 if (programChoice == 'square'){
   text(myNumber, width/2-150, height/2);
   var squareMe = squareNumber(myNumber)

   try {
     if(myNumber == "") throw "empty";
     if(isNaN(myNumber)) throw "not a number";
     if(myNumber == true) throw "not a number"
     if(myNumber = Number(myNumber)){
           var output = text(squareMe, width/2+150, height/2);
     }
   }
   catch(err) {
     textSize(14);
     text("ERROR", width/2+130, height/2)
    output = text("Input is " + err, width/2-40, height/2+100);
   }

 } else if (programChoice == 'capitalize'){
   text(myString, width/2-150, height/2);
   var capitalizeMe = capitalizeString(myString)

   try {
     if(myString == "") throw "empty"
     if(typeof myString == "undefined") throw "undefined"
    if(typeof myString.valueOf() != "string") throw "not a string"
if(myString = String(myString)){
     var output = text(capitalizeMe, width/2+150, height/2);
     }
   }
   catch(err) {
     textSize(14);
     text("ERROR", width/2+130, height/2)
     output = text("Input is " + err, width/2-40, height/2+100);
   }

 } else if (programChoice == 'evaluate'){
   text(myBool, width/2-150, height/2);
   var evaluateMe = evaluateBool(myBool)

   try {
     if(myBool == "") throw "empty"
     if(typeof myBool == "undefined") throw "undefined"
    if(typeof myBool.valueOf() != "boolean") throw "not a boolean"
if(myBool = Boolean(myBool)){
     var output = text(evaluateMe, width/2+150, height/2);
     }
   }
   catch(err) {
     textSize(14);
     text("ERROR", width/2+130, height/2)
     output = text("Input is " + err, width/2-40, height/2+100);
   }
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
 textSize(18);
 text("FUNCTION", width/2-30, 100)

 fill("white");
 textSize(18);
 text("INPUT", width/2-150,  height/2 - 50)

 loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/data_types_b/desktop_small.png', function(img) {
   image(img, width/2-60, height/2-100);
 });

 fill("white");
 textSize(18);
 text("OUTPUT", width/2+130, height/2 - 50)
}
