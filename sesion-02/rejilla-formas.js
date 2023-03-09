
let LADO = 500;
let N_CUADROS = 10;

function setup() {
  createCanvas(LADO, LADO);
  noLoop();
}

function dibujarRejilla() {
  let ladoCuadrado = LADO / N_CUADROS;
  let colores = ['red', 'blue', 'green', 'purple', 'yellow'];
  
  noStroke();
  ellipseMode(CORNER);
  
  for(let i = 0; i < N_CUADROS; i++) {
    for (let j = 0; j < N_CUADROS; j++) {
      
      let forma = random(0, 2);
      console.log(forma);
      
      fill(random(colores));
      
      if (forma < 1) {
        square(ladoCuadrado*i, ladoCuadrado*j, ladoCuadrado);
      } else {
        ellipse(ladoCuadrado*i, ladoCuadrado*j, ladoCuadrado, ladoCuadrado);
      }
    }
  }
}

function draw() {
  background(220);
  
  dibujarRejilla();
}