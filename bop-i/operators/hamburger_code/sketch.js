/*
 * sketch.js
 * Assumes that Button and Topping classes are defined
 * Assumes that a font is linked in HTML
 */
var font;
var table;
// var leftBrace, rightBrace, reset, leftParen, rightParen, comma;
var leftBrace, rightBrace, reset;
var buttons = [];
var mainButton, resetButton, selectThick, selectThin, selectThickDiv, selectThinDiv;
var errorButton;
var toppingsMain = [];

var options = [
  { text: 'bread', color: '#ffe399', form: 'thick' },
  { text: 'burger patty', color: '#872e39', form: 'thick' },
  { text: 'peanut butter', color: '#e88c3a', form: 'thick' },
  { text: 'ham', color: '#ff8686', form: 'thick' },
  { text: 'pickles', color: '#7ed321', form: 'thin' },
  { text: 'jelly', color: '#9754de', form: 'thin' },
  { text: 'cheese', color: '#fffc1f', form: 'thin'},
  { text: 'chocolate scoop', color: '#8b572a', form: 'round' },
  { text: 'vanilla scoop', color: '#fff6ee', form: 'round' },
  { text: 'strawberry scoop', color: '#ff6dd0', form: 'round' },
];

var constants = {
  background: '#f5a623',
  backgroundLight: '#FFC462',
  gradientW: 15,
  gradientCount: 15,
  fnButtonW: 9.5,
  fnButtonH: 2,
  regButtonW: 6.5,
  regButtonH: 2,
  resetButtonD: 2,
  mainToppingW: 4.5,
  mainThickH: 1,
  mainThinH: 0.5,
  selectW: 5,
  selectH: 1.5,
  dessertToppingR: 1,
  tableColor: '#8B572A',
  tableW: 32,
  tableH: 3,
}

var wUnit;
var hUnit;

function preload() {
  leftBrace = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-ii/bracket_left.png');
  rightBrace = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-ii/bracket_right.png');
  reset = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-ii/refresh.png');
  // rightParen = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-ii/par_right.png');
  // leftParen = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-ii/par_left.png');
  // comma = loadImage('https://s3.amazonaws.com/codecademy-content/programs/code-foundations-path/bop-ii/comma.png');
}

function setup() {

  // Create array of gradient colors
  constants.gradient = [];
  const bkgLtColor = color(constants.backgroundLight);
  const bkgColor = color(constants.background);
  for (let i = 0; i < constants.gradientCount; i++) {
    constants.gradient.push(lerpColor(bkgColor, bkgLtColor, i/constants.gradientCount));
  }

  createCanvas(windowWidth, windowHeight);
  // Expects Oxygen imported as <link> in HTML
  textFont('Oxygen');
  textSize(18);

  // The canvas will be divided into a 36 x 36 grid
  wUnit = windowWidth / 36;
  hUnit = windowHeight / 36;

  const tableWidth = constants.tableW * wUnit;
  const tableHeight = constants.tableH * hUnit
  table = {x: width/2 - (tableWidth/2), y: height - 1.5*hUnit - tableHeight, w: tableWidth, h: tableHeight, color: constants.tableColor};

  // Add toppings based on the 'result' string defined in main.js
  const reducer = (acc, curr, idx) => {
    acc[idx] = curr.text;
    return acc
  };
  validTexts = options.reduce(reducer, []);

  let output;
  try {
    output = parseResult(result, validTexts);
  } catch(e) {
    output = parseResult('', validTexts);
    output.msg = 'Error in code! Expected variable `result` to be defined.';
  }

  if (output.msg) {
    console.log(output.msg);
    errorButton = new Button(table.x + 2 * wUnit, table.y - 2 * hUnit - 6 * wUnit, 6 * wUnit, 6 * hUnit, output.msg, 'rect',
      '#FA4359', '#FA4359', '#FA4359');
  }
  addToppings(output.valid, width/2, table);

  // Add main buttons
  mainButton = new Button( width/2 - (constants.fnButtonW/2)*wUnit, 2 * hUnit, constants.fnButtonW * wUnit, constants.fnButtonH * hUnit, 'makeSandwich()');
  buttons.push(mainButton);
  for (let i = 0; i < 3; i++) {
    buttons.push(new Button(
      // Add space for mainButton, select element, and space inbetween
      // 0.5 hUnits between main and select and between each reg button. 1 hUnit between select and first reg button.
      width/2 - (constants.regButtonW/2)*wUnit, (buttons[0].y + buttons[0].h) + (0.5 * hUnit) + (constants.fnButtonH * hUnit) + (1 * hUnit) + (constants.regButtonH * hUnit * i) + (0.5 * hUnit * (i + 1)),
      constants.regButtonW * wUnit, constants.regButtonH * hUnit,
      optionsMain[i].text
    ));
  }


  // // Add select elements
  // selectThickDiv = createDiv();
  // selectThick = createSelect();
  // selectThick.option('burger patty');
  // selectThick.option('ham');
  // selectThick.option('peanut butter');

  // selectThick.parent(selectThickDiv);
  // selectThickDiv.position(
  //   width/2 - (selectThick.width) - (0.5 * wUnit),
  //   buttons[0].y + buttons[0].h + (0.5 * hUnit));
  // selectThick.changed(() => buttons[2].text = `Add ${selectThick.value()}`);

  // selectThinDiv = createDiv();
  // selectThin = createSelect();
  // selectThin.option('pickles');
  // selectThin.option('cheese');
  // selectThin.option('jelly');
  // selectThin.parent(selectThinDiv);
  // selectThinDiv.position(
  //   width/2 + (0.5 * wUnit),
  //   buttons[0].y + buttons[0].h + (0.5 * hUnit));
  // selectThin.changed(() => buttons[3].text = `Add ${selectThin.value()}`);


  // Add reset button
  resetButton = new Button( width - 2*wUnit - 2*wUnit, 2*hUnit, constants.resetButtonD*hUnit, constants.resetButtonD*hUnit, ' ', 'circ');

  buttons.push(resetButton);
}

function draw() {
  background(constants.background);
  noStroke();

  // const mainCenter = mainButton.x + mainButton.w/2;
  const lightDiameter = constants.gradientW * hUnit;

  ellipseMode(CENTER);
  constants.gradient.forEach((color, index) => {
    fill(color);
    ellipse(width/2, table.y - lightDiameter/2, lightDiameter*(1 - index/constants.gradient.length), lightDiameter* (1 - index/constants.gradient.length));
  });
  ellipseMode(CORNER);

  // Draw table and legs
  fill(table.color);
  rect(table.x, table.y, table.w, table.h);
  rect(table.x + 3 * wUnit, table.y + table.h, 2 * wUnit, 400);
  rect(table.x + table.w - (2 + 3) * wUnit, table.y + table.h, 2 * wUnit, 400);

  // Draw braces
  // image(leftBrace, mainButton.x, buttons[1].y, wUnit, 3 * (2+0.5) * hUnit );
  // image(rightBrace, mainButton.x + mainButton.w - wUnit, buttons[1].y, wUnit, 3 * (2+0.5) * hUnit);

  // Draw punctuation
  // imageMode(CENTER);
  // image(comma, width/2, buttons[0].y + buttons[0].h + (0.5 * hUnit) + selectThick.height, textWidth(','), 0.4 * hUnit);
  // image(leftParen, width/2 - selectThick.width - (0.5 * wUnit) - (0.4 * wUnit), buttons[0].y + buttons[0].h + (0.5 * hUnit) + selectThick.height/2, textWidth('('), 2 * hUnit);
  // image(rightParen, width/2 + selectThin.width + (0.5 * wUnit) + (0.4 * wUnit), buttons[0].y + buttons[0].h + (0.5 * hUnit) + selectThick.height/2, textWidth(')'), 2 * hUnit);
  // imageMode(CORNER);


  // Draw button(s)
  let isOnButton = false;

  buttons.forEach((elem) => {
    if (elem.underMouse()) {
      if (mouseIsPressed) {
        elem.draw(elem.colorClick);
      } else {
        elem.draw(elem.colorHover);
      }
      isOnButton = true;
    } else {
      elem.draw(elem.color);
    }
  });
  imageMode(CENTER);
  image(reset, resetButton.x + resetButton.w/2, resetButton.y + resetButton.h/2, resetButton.w/2, resetButton.h/2);
  imageMode(CORNER);

  cursor( isOnButton ? HAND : ARROW )

  // Move and draw topping(s)
  toppingsMain.forEach((elem) => {
    elem.move();
    elem.draw();
  })

  // Optionally draw warning message
  if (errorButton) {
    errorButton.draw();
  }
}

function mousePressed() {
  // Determine resting place of latest toppings and centers
  const totalHeightMain = getTotalHeight(toppingsMain, table.y);
  const mainToppingX = (width/2) - (constants.mainToppingW * wUnit) / 2;

  // Add topping based on the clicked button's text
  buttons.forEach((elem) => {
    if (elem.underMouse()) {
      let match;
      switch (elem.text) {
        // Main cases
        // case 'makeSandwich()':
        //   const thickColor = findMatchingOption(optionsMain, buttons[2].text).color;
        //   const thinColor = findMatchingOption(optionsMain, buttons[3].text).color;
        //   toppingsMain.push(new Topping(mainToppingX, 0, constants.mainToppingW * wUnit, constants.mainThickH * hUnit, totalHeightMain, 10, optionsMain[0].color, 'rect'));
        //   toppingsMain.push(new Topping(mainToppingX, 0, constants.mainToppingW * wUnit, constants.mainThickH * hUnit, totalHeightMain - constants.mainThickH*hUnit, 10, thickColor, 'rect'));
        //   toppingsMain.push(new Topping(mainToppingX, 0, constants.mainToppingW * wUnit, constants.mainThinH * hUnit, totalHeightMain - 2*constants.mainThickH*hUnit, 10, thinColor, 'rect'));
        //   toppingsMain.push(new Topping(mainToppingX, 0, constants.mainToppingW * wUnit, constants.mainThickH * hUnit, totalHeightMain - (2*constants.mainThickH + constants.mainThinH)*hUnit, 10, optionsMain[0].color, 'rect'));
        //   break;
        // case 'Add burger patty':
        // case 'Add bread':
        // case 'Add ham':
        // case 'Add peanut butter':
        //   match = findMatchingOption(optionsMain, elem.text);
        //   toppingsMain.push(new Topping(mainToppingX, 0, constants.mainToppingW * wUnit, constants.mainThickH * hUnit, totalHeightMain, 10, match.color, 'rect'));
        //   break;
        // case 'Add pickles':
        // case 'Add cheese':
        // case 'Add jelly':
        //   match = findMatchingOption(optionsMain, elem.text);
        //   toppingsMain.push(new Topping(mainToppingX, 0, constants.mainToppingW * wUnit, constants.mainThinH * hUnit, totalHeightMain, 10, match.color, 'rect'));
        //   break;

        default:
          // Remove all toppings
          toppingsMain = [];
      }
    }
  });
}

/*
 * Find the element in options whose .text property is text
 * @param {Object[]} options
 * @param {string} text
 */
function findMatchingOption(options, text) {
  return options.find((obj, index) => {
    return obj.text === text
  });
  console.log(`Cannot find ${text} in ${options} array`)
}

// Returns total height of stack represented by toppings,
// returns fallback if stack is 0.
function getTotalHeight(toppings, fallback) {
  let totalHeight;
  const last = toppings[toppings.length - 1]
  if (last) {
    totalHeight = last.floor - last.h;
  } else {
    totalHeight = fallback;
  }
  return totalHeight;
}

// function styleDropdown(div) {
//   if (div.child().elt.nodeName !== 'SELECT') {
//     console.log(`Expected div's child to be a SELECT element`);
//   }
// }


/*
Splits `str` on commas and filters based on the valid options given.
Return an object with two properties:
  valid - an array of strings from str that match any string in 'options'.
  msg - an error string if one or more ingredients in 'str' are not validIngredients.
    - an empty string if all ingredients are valid.
*/
function parseResult(str, options) {
  const ingredients = str.split(',').filter(elem => elem != '');

  const validIngredients = ingredients.filter((elem) => {
    return options.includes(elem);
  });

 let msg = '';
  if (ingredients.length > validIngredients.length) {
    msg = 'One or more ingredients are not valid!';
  }

  return {valid: validIngredients, msg: msg};
}

/*
Adds the toppings represented by the strings in the 'ingredients' array.
The toppings are centered at `centerX` and pile up on top of `table`
*/
function addToppings(ingredients, centerX, table) {

  ingredients.forEach((elem) => {
    const totalHeightMain = getTotalHeight(toppingsMain, table.y);
    const mainToppingX = centerX - (constants.mainToppingW * wUnit) / 2;

    // Based on color and form, draw the topping with the right style
    const match = findMatchingOption(options, elem);
    const color = match.color;
    let w, h, shape;
    switch (match.form) {
      case 'thick':
      default:
        w = constants.mainToppingW * wUnit;
        h = constants.mainThickH * hUnit;
        shape = 'rect';
        break;
      case 'thin':
        w = constants.mainToppingW * wUnit;
        h = constants.mainThinH * hUnit;
        shape = 'rect';
        break;
      case 'round':
        w = constants.dessertToppingR * 2 * hUnit;
        h = constants.dessertToppingR * 2 * hUnit;
        shape = 'circ';
        break;
    }
    toppingsMain.push(new Topping(centerX - w/2, 0, w, h, totalHeightMain, 10, color, shape));
  });

}
