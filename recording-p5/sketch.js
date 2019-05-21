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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    background("#FF4500");
//    fill("#add8e6");
//    stroke("#ffff00");
//    strokeWeight(5);
//    
//    ellipse(random(width),random(height),20,20);
//    
//    fill("990000")
//    ellipse(600,300,redDiam,redDiam);
//    fill("#255,200,200");
//    line(100,200,300,400);
//    fill("#000000");
//    triangle(20,mouseY,60,60,20,60);
//    fill("#000000");
//    textSize(60);
//    textFont("Georgia");
//    textStyle(BOLD);
//    text("Recording",280,280);
    
}
