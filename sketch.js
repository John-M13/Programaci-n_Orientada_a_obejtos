let posX, posY;
let velX, velY;
let diametro;
let rad;
let colorFondo
function setup() {
  createCanvas(windowWidth, windowHeight);

  colorFondo = color (random (160, 200), random (200), random (230))

  rad = ceil(random(50, 50));
  diam = rad * 2;
  // console.log(diam);

  posX = random(rad, width - rad);
  posY = random(rad, height - rad);

  // velX = random(-1, 10);
  // velY = random(-10, 10)

  velX = 5
  velY = 5
}

function draw() {
  background(colorFondo);
  fill(255);
  noStroke();

  posX += velX
  posY += velY

 if ( posX > width - rad || posX < rad) {
    velX *= -1;
  colorFondo = color(random(160, 200), random(200), random(230));

  }
if ( posY > height - rad || posY < rad) {
    velY*= -1;
  colorFondo = color(random(160, 200), random(200), random(230));

}
  
  circle(posX, posY, diam);
}


function mousePressed (){

}



