var font;

function preload() {
    font = loadFont("Montserrat-Regular.ttf");
}

function setup() {
    createCanvas(600,300);
}

function draw() {
    background(51);
    textSize(50);
    textFont("Montserrat");
    textFont(font);
    textAlign(CENTER, CENTER);
    fill(255);
    noStroke();
    text("testing", width/2, height/2);
    
    var points = font.textToPoints("testing", 0, 0);
    console.log(points);
}