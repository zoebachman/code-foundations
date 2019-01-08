// flight simulator
// user should be able to make a series of calculations
// calculate earth's gravitational acceleration: ge = 32.2 ft/sec^2 = 9.8 m/sec^2
// calculate velocity to get into orbit (uses the previous calculation): V = sqrt ( g0 * Re^2 / (Re + h) )
// calculating velocity to go into orbit
// variables include, height, and planet (radius, gravitational acceleration)
// could enter velocity to find altitude, or vice versa

// References:
// https://spaceflightsystems.grc.nasa.gov/education/rocket/earth.html
// https://spaceflightsystems.grc.nasa.gov/education/rocket/rktrflght.html
// check that everything is in the right system


var earthDiameter = 12753 //km this should probably be half
var gravAcceleration = 9.8 //m/sec^2
var earthVelocity;
var orbitHeight = 160.934 //km;


var earth, moon, rocket;

function setup() {
  createCanvas(600, 400);
  background(0);
  fill(23, 75, 232);
  earth = ellipse(150, 250, 200)
  fill(204, 204, 204);
  moon = ellipse(450, 100, 50)

  calculateVelocity();
}

function draw() {
makeRocket()
}

function makeRocket() {
  fill("white")
  noStroke();
  //rocket = triangle(180, 275, 120, 175, 180, 200);
  rocket = {
    body: rect(180, 200, 20, 60),
    hat: triangle(180, 200, 190, 180, 200, 200),
    rocket: triangle(180, 270, 190, 230, 200, 270)
  }
}

function calculateVelocity(){
  // get earth radius
earthRadius = earthDiameter/2

  // ugh, does it make sense to do a square root then?
//earthVelocity = Math.sqrt(gravAcceleration * Math.pow(earthRadius, 2) / (earthRadius + orbitHeight))

// can break down the calculation
  // first do earthRadius + orbitHeight
radiusPlusHeight = earthRadius + orbitHeight
accelRadius = gravAcceleration * (earthRadius * earthRadius)

earthVelocity = Math.sqrt(accelRadius/radiusPlusHeight)

  // then accelearation times earthRadius squared
console.log(earthVelocity)

// these they can modify
textX = 40;
textHeight = 40
text("Radius = " + earthRadius + " km", textX, textHeight);
text("Gravity Acceleration = " + gravAcceleration + " m/sec^2", textX, textHeight+20);
text("Orbit Height = " + orbitHeight + " km", textX, textHeight+40);

// output (similar to a calculator)
text("Velocity = sqrt (Gravity Acleeration * Radius^2 / (Radius + Height) ) = \n" +
     earthVelocity, textX, textHeight+80);

}
