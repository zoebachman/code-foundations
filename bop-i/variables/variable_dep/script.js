var grass_img, rocks_img, forest_img, input_value, elem;
var grass, rocks, forest;
var selected_image, myPick;

grass_img = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Grass.png';
rocks_img = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Rocks.png';
forest_img = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Forest.png';


// create image -- need to change 'one' to a variable so we can do this for each


// not sure what's happening in the following lines:
  //var id_name = toString(i);
  // console.log(id_name);

  // document.getElementById(id_name).appendChild(elem);

// appending an img child to a square parent for first rectangle
// var parent = document.getElementById('one');
// elem = parent.appendChild(document.createElement("img"));


var squares = document.querySelectorAll('.rectangle');
console.log(squares);

// loop through squares and create an image in each
for (var i=0; i < squares.length; i++){
  // get element for each square
  square_elem = squares[i];
  // console.log(square_elem);

// get id for each square
  var id_name = square_elem.id;

  // save id as a parent, so we can append the image to it
  var parent = document.getElementById(id_name);

  //append child to parent (but how do we later make sure the right input goes to the right image?)
  elem = parent.appendChild(document.createElement("img"));
}


// get value from input box
// get all the inputs -- but it's coming up as undefined? it's in the list, but it's undefined??
// It's LITERALLY the same as the for loop above, but with inputs instead of divssssss
var stuff = document.querySelectorAll('.box');
console.log(stuff);

for (var j=0; j<stuff.length; j++){
  // input_id = inputs[i].id;
  console.log(stuff[i]);

  // var input_id_name = input_elem.id;
  // console.log(input_id_name);

  // getValue(input_id_name);
}


function getValue(input_id){
  // need to swap out "test" for input_id, so that it can be for each input
document.getElementById(input_id).addEventListener('keyup', function() {
  // Perform search
  input_value = document.getElementById(input_id).value;
  // console.log("input", input_value);

  myPick = pickImage(input_value);
});
// console.log(myPick);
}

function pickImage(input_value){
  if (input_value == 'grass'){
    console.log('green grass!');
    elem.src = grass_img;
  } if (input_value == 'rocks'){
    console.log('rocky rocks');
    elem.src = rocks_img;
  } if (input_value == 'forest'){
    console.log('trees in the forest');
    elem.src = forest_img;
  }

// return src
  return elem.src;
}

// getValue();
