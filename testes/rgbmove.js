const seedRand = parseInt(fxrand() *200);
const seedRandless =fxrand(2)*2;

console.log(seedRand);
function setup() {
	let minHW = min([windowHeight,windowWidth,1080])
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB);
	blendMode(DIFFERENCE)
}

function draw() {
  let t = (frameCount-1)/900;
	clear();
  background(0);
    for (let c=0; c<10; c++){
      fill((seedRand*c)%360,100,100)
    //   noStroke();
      beginShape();
      for (let i=0; i<=1; i+=1/10){
        yv = height/2*(1-.65*sin(TAU*(i-(c+2)*t))*sq(sin(PI*i)));
		curveTightness(1);
        curveVertex(width*i,yv);
	
      }
      endShape();
  }
}

