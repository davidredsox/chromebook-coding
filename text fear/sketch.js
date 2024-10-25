let font;
let vehicles = [];
let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(" ");
let index = 0;

function preload() {
    font = loadFont('moonlite.otf');
}

function setup() {
    createCanvas(600,300);
    frameRate(60);
    background(51);

    let points = font.textToPoints(words[index], 100, 200, 192);
    for (let i = 0; i < points.length; ++i) {
        let pt = points[i];
        let vehicle = new Vehicle(createVector(pt.x,pt.y));
        vehicles.push(vehicle);
    }
}

function draw() {
    background(51);
    vehicles.forEach((v) => {
        v.behaviors();
        v.update();
        v.show();
    })
}

function mouseClicked() {
    noLoop();
    index = index < words.length - 1 ? index + 1 : 0;
    
    let newVehicles = [];
    let points = font.textToPoints(words[index], 100, 200, 192);
    for (let i = 0, j = 0; i < points.length; i++) {
        let v = vehicles[j];
        let vehicle = new Vehicle(createVector(points[i].x,points[i].y),createVector(v.pos.x,v.pos.y));
        newVehicles.push(vehicle);
        j = j < vehicles.length - 1 ? j + 1 : 0;
    }
    vehicles = newVehicles;
    loop();
}