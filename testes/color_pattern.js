const pallete = ['#f70640', '#f78e2c', '#fdd903', '#cae509', '#63be93', '#299dbf', '#38187d', '#a4459f', '#f654a9', '#2F0A30', '#f9c0f4'
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noLoop();
  //frameRate(12);
}

function draw() {
  background(220);
	let num = 0;
  for (let y = 0; y < height; y += height / 20) {
    let x0 = 0;
    let h = height / 20;
    while (x0 < width) {
      let w0 = random(width / 10, width / 10);
      let n = floor(random(1, 10));
      for (let i = 0; i < n; i++) {
        let x = x0 + w0 / n * i;
        let w = w0 / n;
        let c = num%(pallete.length);
        noStroke();
        fill(pallete[c]);
        rect(x, y, w, h);
        num++;
      }
      x0 += w0;
    }
  }
  
}