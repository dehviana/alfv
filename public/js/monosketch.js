// let y = 100;

// // The statements in the setup() function
// // execute once when the program begins
// function setup() {
//   createCanvas(windowWidth - 20, windowHeight); // Size must be the first statement
//   stroke(250); // Set line drawing color to white
//   frameRate(30);
// }
// // The statements in draw() are executed until the
// // program is stopped. Each statement is executed in
// // sequence and after the last line is read, the first
// // line is executed again.
// function draw() {
//   background(0); // Set the background to black
//   y = y - 1;
//   if (y < 0) {
//     y = height;
//   }
//   line(0, y, width, y);
// }

var counter = 10;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	background(0);
	
	rectMode(CENTER);

	translate(0, height / 2);

	mouseX/1000
	let num = map(mouseX, 0, width, 0, 200);
	//let num = map(sin(millis()/1000), -1, 1, 10, 200);

	for (let y = 0; y < num; y += 1) {
		
		let rot = map(y, 0, num, 0, PI);
		let posx = map(y, 0, num, 0, width);
		
		push();
		translate(posx, 0);
		rotate(rot);
		noFill();
		stroke(255);
		rect(mouseY/2, 	mouseY/2, mouseX/2, mouseX/2);
		arc(mouseY/2, mouseY/2, mouseX/2, mouseX/2, 0, PI);
    //line(width/2, 0, height/2, 0);
	
	
	ellipse(mouseY/2, 	mouseY/2, mouseX/2, mouseX/2);
		pop();
	}
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}