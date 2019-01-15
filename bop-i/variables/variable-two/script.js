$(document).ready(function() {
    const $inputBox = $('input.box');

    $inputBox.focus(function(){
      $(this).css('color', 'black');
    });

    $inputBox.keyup(function(event) {
      const inputValue = event.currentTarget.value.toUpperCase();
      const inputName = event.currentTarget.name;

      // console.log(inputValue, inputName);

      checkTheInput(inputValue, inputName);
    })

    function checkTheInput(terrainString, rectangleName) {
      const $rectangles = $(`.rectangle.${rectangleName}`);

      if (terrainString === 'GRASS') {
        $rectangles.css(
          'background-image',
          'url(https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Grass.png)'
        )
      } else if (terrainString === 'FOREST') {
        $rectangles.css(
          'background-image',
          'url(https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Forest.png)'
        )
      } else if (terrainString === 'ROCKS') {
        $rectangles.css(
          'background-image',
          'url(https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-i/variables/assets/Rocks.png)'
        )
      }

    }
  }
)
