$(document).ready(function(){

  // make these variables all caps because they're global, by convention
  var GRASS = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Grass.png';
  var ROCKS = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Rocks.png';
  var FOREST = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Forest.png';

  // run the code every time a key is let up on the html element input with class of box
  $("input.box").keyup(function(){
    // get the value that the user typed and store it a variable

    // $("input").css("color", "#000000");
    var inputValue = this.value;
    // make that input all uppercase to make our check later easier, who knows how the user will type
    var upperCase = inputValue.toUpperCase();

    // get the value of the name attribute of the input tag that the user is typing in
    // we'll use this value to replace the background image on the corresponding box
    var nameToPass = $(this).attr("name");

    var inputID = $(this).attr("id");

    $(inputID).css("color", "#000000");
    // the original values in the name attribute all of -value, so we have to chop that shit off
    // because the ids of the divs that we're replacing the background image for don't have that
    // for example, 'one-value' becomes 'one' and then we can make a variable using that 'one'
    var usableID = nameToPass.replace("-value", "");

    // after we have all the pertinent information, we send it to our checkTheInput function
    checkTheInput(upperCase, usableID);

  });




  function checkTheInput ( userValue, usableID ) {

    // this is where we create the jquery variable using the id we created/pulled from the name attribute
    var boxToUpdate = $("div#" + usableID);

    // variables that have strings that we'll use to compare what the user has input
    // if you want to change the values we're looking for, this is where to do it
    var grass = "GRASS",
        rocks = "ROCKS",
        forest = "FOREST";

    // basic else if statement, if they put in "grass" then replace the background image with the URL thats
    // stored in the global variable above
    // I left the 'else' at bottom in case you want to send an alert or something
    if ( userValue === grass ) {
      boxToUpdate.css( "background-image", "url(" + GRASS + ")" );
    } else if ( userValue === rocks ) {
      boxToUpdate.css( "background-image", "url(" + ROCKS + ")" );
    } else if ( userValue === forest ) {
      boxToUpdate.css( "background-image", "url(" + FOREST + ")" );
    } else {
      console.log("wrong");
    }

  }

});
