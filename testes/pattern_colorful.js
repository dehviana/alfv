// let colors = ["#072ac8", "#1e96fc", "#a2d6f9", "#fcf300", "#ffc600"];
let colors = ["#7209b7", "#3a0ca3", "#4361ee", "#4cc9f0", "#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"];


function setup() {
	createCanvas(900, 900);
	rectMode(CENTER);
	background(255);
	let seg = 10;
	let w = width / seg;
	for (let i = 0; i < seg; i++) {
		for (let j = 0; j < seg; j++) {
			let x = i * w + w / 2;
			let y = j * w + w / 2;
			shuffle(colors, true);
			fill(colors[0]);
			noStroke();
			rect(x, y, w, w);
			form(x, y, w);
		}
	}
}

function draw() {}

function form(x, y, w) {
	let a = int(random(4)) * TAU / 4;
	let hw = w / 2;
	let n = 3;
	let ww = w / (n + 1);
	// noFill();
	push();
	translate(x, y);
	rotate(a);
	// for (let j = 0; j < 2; j++) {
		// rotate(PI);
		for (let i = 1; i <= n; i++) {
			let www = ww * i;
		fill(colors[i+1]);
		beginShape();
		vertex(-hw + ww * i, -hw);
		bezierVertex(-hw + www, -hw + ww, -hw + ww, -hw + www, -hw, -hw + www);
		vertex(-hw, hw);
		vertex(hw - www, hw);
		bezierVertex(hw - www, hw - ww, hw - ww, hw - www, hw, hw - www);
		// vertex(hw,  hw);
		//vertex(hw, -hw);
    rect (0,0,10,10)
		endShape(CLOSE);
		}
	// }
	pop();
}