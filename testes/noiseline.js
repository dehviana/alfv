function setup() {
    createCanvas(800, 800);
  }
  
  function draw() {
    background(0);
    noFill();
    stroke(255);
  
    beginShape();
    for (var x = 0; x < width; x++) {
      var nx = map(x, 0, width, 0, 10);
      var y = height * noise(nx);
      vertex(x, y);
    }
    endShape();
  }