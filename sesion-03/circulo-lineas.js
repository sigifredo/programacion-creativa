

const SIDE = 500;

function setup() {
    createCanvas(SIDE, SIDE);

    angleMode(DEGREES);
}

function draw() {
    let colors = ['rgba(255,0,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(255,192,203,0.3)', 'rgba(0,128,0,0.3)', 'rgba(128,0,128,0.3)'];

    const RADIO = 200;
    translate(SIDE / 2, SIDE / 2);

    let angle1 = random(0, 360);
    let x1 = sin(angle1) * RADIO;
    let y1 = cos(angle1) * RADIO;

    let angle2 = random(0, 360);
    let x2 = sin(angle2) * RADIO;
    let y2 = cos(angle2) * RADIO;

    strokeWeight(random(1, 5));
    stroke(random(colors));
    line(x1, y1, x2, y2);
}
