let colors = ["#ed3441", "#ffd630", "#329fe3", "#154296", "#303030", "#213647", "#2ec4b6", "#c4071d", "#ff9f1c", "#247ba0"];

let circles = [];

function setup() {
	createCanvas(900, 900);
	let n = 15;
	let w = width / n;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			let x = i * w + w / 2;
			let y = j * w + w / 2;
			let dst = dist(x, y, width / 2, height / 2);
			let t = map(dst, 0, sqrt(sq(width / 2) + sq(height / 2)), 0, 100);
			if ((i + j) % 2 == 0) circles.push(new Circle(x, y, w, -int(t)));
		}
	}
}

function draw() {
	background(255);
	for (let i of circles) {
		i.run();
	}
}

class Circle {
	constructor(x, y, d, t) {
		this.x = x;
		this.y = y;
		this.d = d;
		this.col2 = random(colors);
		this.init();
		this.t = t;
		this.t1 = 100;
		this.t2 = 50 + this.t1;
	}

	show() {
		push();
		translate(this.x, this.y);
		rotate(this.ang);
		noStroke();
		fill(this.col1);
		circle(0, 0, this.d);
		fill(this.col2);
		arc(0, 0, this.d, this.d, -this.arcAng, this.arcAng, CHORD);
		pop();
	}

	move() {
		if (0 < this.t && this.t < this.t1) {
			let amt = norm(this.t, 0, this.t1 - 1);
			this.arcAng = lerp(0, PI, amt);
			this.ang += this.angStep;
		}
		if (this.t2 < this.t) {
			this.init();
		}
		this.angStep += random(-1, 1) * 0.02;
		this.t++;
	}

	init() {
		this.arcAng = 0;
		this.ang = random(PI);
		this.angStep = random(-1, 1) * 0.01;
		this.t = 0;

		this.col1 = this.col2;
		this.col2 = random(colors);
		while (this.col1 == this.col2) {
			this.col2 = random(colors);
		}
	}

	run() {
		this.show();
		this.move();
	}
}