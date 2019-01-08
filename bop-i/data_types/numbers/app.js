$(document).ready(function(){

  // there's something called a window object, which you can use to calculate the width and height of the window and adjust accordingly
  // https://www.w3schools.com/jsref/obj_window.asp

  // all of this code will work with any other DOM element in index.html, you just need to replace $(window) with whatever the parent
  // element is
  // so basically, find the width and height of hte parent element, then apply that to child element

  var width = $(window).width();
  var height = $(window).height();

  // starting width and height
  console.log("initial window width: ", width);
  console.log("initial window height: ", height);

  // calculate the width and height every time the window is resized
  $(window).resize(function(){
    console.log("resized window width: ", width);
    console.log("resized window height: ", height);
  });

  // with this ideas, we can dynamically size something
  // I purposely nested the css part in a resize function so that you can see on the initial load it's not full screen
  $(window).resize(function(){
    // $(".full-size") corresponds to a div in index.html with class of full-size
    $(".full-size").css({
      width : width,
      height : height
    });
  });


});
