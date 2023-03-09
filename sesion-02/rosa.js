

const LADO = 500;

function setup() {
  createCanvas(LADO, LADO);
  frameRate(10);
}

function dibujarRosa(largo, ancho) {
  push();
  noStroke()
  translate(LADO / 2, LADO / 2);
  ellipseMode(CENTER);
  angleMode(DEGREES);

  const ANGLE = 30;
  let anguloTotal = 0;

  while (anguloTotal < 180) {
    ellipse(0, 0, largo, ancho);
    rotate(ANGLE);
    anguloTotal = anguloTotal + ANGLE;
  }
  
  pop();
}

function draw() {
  background(220);
  let colores = ['rgba(255,0,0,0.39)', 'rgba(255,255,0,0.48)', 'rgba(0,0,255,0.44)', 'rgba(128,0,128,0.52)', 'rgba(255,192,203,0.48)'];
  
  for (let i = 200; i > 10; i-=30) {
    let color = random(colores);
    fill(color);
    dibujarRosa(i, i/3);
  }
}