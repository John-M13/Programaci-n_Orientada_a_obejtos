let particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);
  let nuevaParticula = new Particula(mouseX, mouseY);
  particulas.push(nuevaParticula);

  for (let i = 0; i < particulas.length; i++) {
    particulas[i].update();
    particulas[i].display();
  }


  particulas = particulas.filter((pelota) => pelota.estaViva);

  noFill();
  stroke(252, 99, 145);
  strokeWeight(1);

  for (let i = 0; i < particulas.length - 1; i++) {
    line(
      particulas[i].posx,
      particulas[i].posy,
      particulas[i + 1].posx,
      particulas[i + 1].posy
    );
  }

  console.log(particulas.length);
}
