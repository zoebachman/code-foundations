$(document).ready(function(){

  var offBulb = "https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/boolean/lightsoff.png";
  var onBulb = "https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/boolean/lightson.png";

  var sun = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/boolean/sun.png';
  var moon = 'https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/boolean/moon.png';

  var $background = $("body");
  var $booleanButton = $("input#booleanButton");
  // var $celestialObject = $("img#sun");

  // When we click the boolean button, run a function
  $booleanButton.click(function(){
    $('body').prepend('<img id="moon" src="https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/boolean/moon.png"/>');
    console.log("clicked");
    // cache the jquery $(this) keyword because we use it repeatedly
    var $this = $(this);

    // access words that will change
    var $par = $('p#words');
    var $par2 = $('p#words2');

    // celestial animations
    var $sun = $('img#sun');
    var $moon = $('img#moon');

    // toggle the class of the boolean button so we can alter the text according to if it's on or off
    $this.toggleClass("off");

    // if the thing we just clicked on has the class of off, we need to give the option to turn on
    // and offer that option accordingly in the text "turn on!"
    // and make sure that the lightbulb is off via the src because how could we turn a bulb on
    // that's already on?
    // and vice versa... I hope this is enough explanation
    if( $this.hasClass("off") ) {
      $par.text("Lights On == False");
      $par2.text("Turn the lights on!");
      $sun.removeClass("down");
      $sun.addClass("up");
      $moon.removeClass("up");
      $moon.addClass("down");
      $background.attr("background", offBulb);
      // $celestialObject.attr("src", sun);
    } else {
      $par.text("Lights On == True");
      $par2.text("Turn the lights off!");
      // $sun.toggleClass("down");
      $sun.removeClass("up");
      $sun.addClass("down");
      $moon.removeClass("down");
      $moon.addClass("up");
      $background.attr("background", onBulb);
      // $celestialObject.attr("src", moon);
    }
  });


});
