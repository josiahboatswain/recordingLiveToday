var ellipseX = 400;
var ellipseY = 400;
var ellipseDiam = 100;

function setup() {
  // put setup code here
    createCanvas(800,800);
//        background("#003366");
}

function draw() {
  // put drawing code here
    
    
    background('black')
    fill('red');
    ellipse(ellipseX, ellipseY, ellipseDiam)
    textSize(60);
    textFont("Georgia");
    textStyle(BOLD);
    text("Recording",60,80);
    
    if (mouseIsPressed) {

        var randomDiam = random(100, 200)

        ellipseDiam = ellipseDiam + 15;
        
        if(ellipseDiam >= 300) {
            ellipseDiam = randomDiam;
        }
        
        
    }
    
    