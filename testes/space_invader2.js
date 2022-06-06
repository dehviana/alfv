let w;
let h;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {

  w = windowWidth / 50;

stroke(255);
noStroke();
translate(w, h/50);
scale(2);

rect(30,20,10,20);
rect(90,20,20,20);
rect(160,20,10,20);
rect(40,40,120,10);
rect(70,50,60,10);
rect(50,60,100,20);
rect(30,80,140,20);
rect(10,100,20,40);
rect(50,100,40,40);
rect(90,100,20,20);
rect(110,100,40,40);
rect(170,100,20,40);
rect(30,140,140,20);
rect(50,160,20,10);
rect(90,160,20,10);
rect(130,160,20,10);
rect(30,170,20,10);
rect(80,170,10,20);
rect(110,170,10,20);
rect(150,170,20,10);
rect(30,180,10,10);
rect(160,180,10,10);
}