

let LADO = 500;
let N_CUADROS = 40;

function setup() {
    createCanvas(LADO, LADO);
    noLoop();
}

function dibujarRejilla() {
    let ladoCuadrado = LADO / N_CUADROS;
    let colores = ['red', 'blue', 'green', 'purple', 'yellow'];

    strokeWeight(2);

    for (let i = 0; i < N_CUADROS; i++) {
        for (let j = 0; j < N_CUADROS; j++) {
            let forma = random(0, 2);

            fill(random(colores));

            if (forma < 1) {
                line(ladoCuadrado * i, ladoCuadrado * j, ladoCuadrado * i + ladoCuadrado, ladoCuadrado * j + ladoCuadrado);
            } else {
                line(ladoCuadrado * i + ladoCuadrado, ladoCuadrado * j, ladoCuadrado * i, ladoCuadrado * j + ladoCuadrado);
            }
        }
    }
}

function draw() {
    background(220);
    dibujarRejilla();
}
