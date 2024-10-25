let font;
let vehicles = [];

function preload() {
    font = loadFont('moonlite.otf');
}

function setup() {
    createCanvas(600,300);
    frameRate(60);
    background(51);

    let points = font.textToPoints("testing", 100, 200, 192);
    for (let i = 0; i < points.length; ++i) {
        let pt = points[i];
        let vehicle = new Vehicle(pt.x,pt.y);
        vehicles.push(vehicle);
    }
}

function draw() {
    background(51);
    vehicles.forEach(v => {
        v.behaviors();
        v.update();
        v.show();
    })
}