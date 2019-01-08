var grass_img, rocks_img, forest_img, input_value, elem;
var grass, rocks, forest;

grass_img = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Grass.png';
rocks_img = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Rocks.png';
forest_img = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Forest.png';


// grab one input and decide which image goes there
// determine which input it is
// have to figure out how to make sure we're checking the correct input_value
// and sending it to the correct output
// could do a loop? somehow?

var squares = document.querySelectorAll('input');
// console.log(squares.length);

// loop through inputs - not sure why I have this code. maybe for when I'm dealing with multiple inputs?
// for (var i=0; i < squares.length; i++){
//   input_value = squares[i].value;
  // console.log(input_value);

  // setImage();
  // elem = document.createElement("img");

// not sure what's happening in the following lines:
  //var id_name = toString(i);
  // console.log(id_name);

  // document.getElementById(id_name).appendChild(elem);
// }

elem = document.querySelector('#one')


// this should only get called once per box - bc, append child - what event is it called on?
// probably better that it starts as an image and just change the src
function setImage(){
  // create image - how do you do this in a way that it isn't a broken image before one shows up
  elem = document.createElement("img");

  // this is the image - how do you change this?

}


// function to set source of img element - only works for first input right now

// function setSrc(){
  document.getElementById("test").addEventListener('keyup', function() {
    // Perform search
    input_value = document.getElementById("test").value;
    console.log(input_value);

  var selected_image = pickImage(input_value);
  // swap source to change image
  elem.src = selected_image;
});
// }


// function to select an image based on input

function pickImage(input_value){
  if (input_value == 'grass'){
    console.log('green grass!');
    elem.src = grass_img;
    // elem.setAttribute("height", "768");
    // elem.setAttribute("width", "1024");

  } if (input_value == 'rocks'){
    console.log('rocky rocks');
    elem.src = rocks_img;
    // elem.setAttribute("height", "768");
    // elem.setAttribute("width", "1024");

  } if (input_value == 'forest'){
    console.log('trees in the forest');
    elem.src = forest_img;
    // elem.setAttribute("height", "768");
    // elem.setAttribute("width", "1024");

  }

// return src
  return elem.src;
}


//
// if (i < 3){
//   var row_name = one;
//   console.log(row_name);
// } else if (i < 6){
//   var row_name = two;
//   console.log(row_name);
// } else if (i < 9){
//   var row_name = three;
//   console.log(row_name);
// }
