$(document).ready(function(){

  // make these variables all caps because they're global, by convention
  var GRASS = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Grass.png';
  var ROCKS = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Rocks.png';
  var FOREST = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Forest.png';
  var LAKE = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Lake.png';
  var BEACH = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Beach.png';
  var TOWN = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/City.png';
  var GLACIER = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Glacier.png';
  var DESERT = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Desert.png';
  var MOON = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Moon.png';

  // run the code every time a dropdown is clicked
  $("div.custom-select").click(function(){
    // get the value that the user selected and store it a variable
    var inputValue = $( "#myselect option:selected" ).text();
    // var inputValue = this.value;
    console.log(inputValue);
    // make that input all uppercase to make our check later easier, who knows how the user will type
    var upperCase = inputValue.toUpperCase();
    // console.log(upperCase);
    // get the value of the name attribute of the input tag that the user is typing in
    // we'll use this value to replace the background image on the corresponding box
    var nameToPass = $(this).attr("name");

    // after we have all the pertinent information, we send it to our checkTheInput function
    checkTheInput(upperCase, nameToPass);

  });


  $("div.custom-select").click(function(){
    var inputValue = $( "#myselect2 option:selected" ).text();
    var upperCase = inputValue.toUpperCase();
    // console.log(upperCase);

    var nameToPass = $(this).attr("name");

    // after we have all the pertinent information, we send it to our checkTheInput function
    checkTheInput(upperCase, nameToPass);

  });

  $("div.custom-select").click(function(){
    var inputValue = $( "#myselect3 option:selected" ).text();

    // make that input all uppercase to make our check later easier, who knows how the user will type
    var upperCase = inputValue.toUpperCase();
    // console.log(upperCase);

    var nameToPass = $(this).attr("name");

    // after we have all the pertinent information, we send it to our checkTheInput function
    checkTheInput(upperCase, nameToPass);

  });

  function checkTheInput ( userValue, nameToPass ) {

    // this is where we create the jquery variable using the id we created/pulled from the name attribute
    var boxToUpdate = $("div." + nameToPass);

    // variables that have strings that we'll use to compare what the user has input
    // if you want to change the values we're looking for, this is where to do it
    var grass = "GRASS",
        rocks = "ROCKS",
        forest = "FOREST";
        lake = "LAKE",
        beach = "BEACH";
        town = "TOWN",
        glacier = "GLACIER";
        desert = "DESERT",
        moon = "MOON";

    // basic else if statement, if they put in "grass" then replace the background image with the URL thats
    // stored in the global variable above
    // I left the 'else' at bottom in case you want to send an alert or something
    if ( userValue === grass ) {
      boxToUpdate.css( "background-image", "url(" + GRASS + ")" );
    } else if ( userValue === rocks ) {
      boxToUpdate.css( "background-image", "url(" + ROCKS + ")" );
    } else if ( userValue === forest ) {
      boxToUpdate.css( "background-image", "url(" + FOREST + ")" );
    } else if ( userValue === lake ) {
      boxToUpdate.css( "background-image", "url(" + LAKE + ")" );
    } else if ( userValue === beach ) {
      boxToUpdate.css( "background-image", "url(" + BEACH + ")" );
    } else if ( userValue === town ) {
      boxToUpdate.css( "background-image", "url(" + TOWN + ")" );
    } else if ( userValue === glacier ) {
      boxToUpdate.css( "background-image", "url(" + GLACIER + ")" );
    } else if ( userValue === desert ) {
      boxToUpdate.css( "background-image", "url(" + DESERT + ")" );
    } else if ( userValue === moon ) {
      boxToUpdate.css( "background-image", "url(" + MOON + ")" );
    } else {
      console.log("wrong");
    }

  }

});



// code for custom selector:

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
// console.log(x);

for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  // console.log(selElmnt)
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
