function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
 background(255,10);
 let c = color(255, 204, 0);
 fill(c);
 noStroke();
 ellipse(mouseX, mouseY,2);
}

// function windowResized() {
//    resizeCanvas(windowWidth, windowHeight);
// }