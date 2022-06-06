let num = 70;

function setup() {
	createCanvas(1500, 800);
	textAlign(CENTER, CENTER);
	textSize(240);
	textFont('HELVETICA');
}

function draw() {
	for (let y = 0; y < height; y += height / num) {
		drawingContext.save();
		noStroke(0);
		fill(255);
		rect(0, y, width, height / num);
		drawingContext.clip();
		fill(0);
		text("SOA COMO CAOS\nSOA COMO CAOS\nSOA COMO CAOS", width / 2  , height / 2 + 50 * tan(frameCount * 0.05 + 1.5 * noise(y)));
		drawingContext.restore();
	}
}
