/*////////////////////////////
// MONOPATTERNS LISBON #2 DYSTOPIC  //
// by monomonio            //
///////////////////////////*/

let nAzul = 1;
let w;
let h;
let pg
let sizePG = 5000

let palletsBack = [
  [
  ["#222"],
  ["#666"],
  ["#333"]
  ],[
  ["#000"],
  ["#333"],
  ["#111"]
  ]
]

let palletGrad = [
  [
    ["#AF87F8"],
    ["#8573BF"],
    ["#5F6AC9"],
   ["#FF8C00"]
  ],[
    ["#4839FC"],
    ["#1B45B9"],
    ["#350550"], 
    ["#38ef7d"]
   
  ]
]
   
const seedRand = parseInt(fxrand() *2);
const seedRandalf = parseInt(fxrand() *2);
const corBack = palletsBack[seedRand][parseInt( fxrand() * palletsBack[1].length ) ]; 
const corGrad1 = palletGrad[seedRand][parseInt(fxrand() * palletGrad[1].length)]
const corGrad2 = palletGrad[seedRandalf][parseInt(fxrand() * palletGrad[1].length)]
const seedRand2 = 6 + parseInt(fxrand() * 6);

function setup() {

  createCanvas(800, 800);
  smooth();
  
  pg = createGraphics(4000, 4000);
  
 
 
  background(corBack);
  //frameRate(12);
  noLoop();
 
  nAzul=floor(8);
  
  

  w = width / nAzul;
  h = height / nAzul;

  let colorCntrl = color(corGrad1);
  let colorCntrl2 = color(corGrad2);

  
  if (corGrad1 === corGrad2) { 
   colorCntrl2 = color("#333");
  }


  let rLinha;

  for (let row = 0; row< nAzul; row++) {
     for (let col = 0; col < nAzul; col++) {
       let x = col * w;
       let y = row * h;

    push();
    translate(x, y);
   
    setGradient(0, 0, w, h, colorCntrl, colorCntrl2, "xBack2"); //bottom right
    noStroke();
   
    setGradient(0, 0, w, h, colorCntrl, colorCntrl2, "yBolaLinha"); //bottom right
    noStroke();
   
    setGradient(0, 0, w, h, colorCntrl2, colorCntrl, "xBack3"); //bottom right
    
   
	  rLinha = floor(random(4));

	  if (rLinha == 0) {
      setGradient(0, 100, w, h, colorCntrl, colorCntrl2, "xLinhaTopLeft"); //bottom right
   } else if (rLinha== 1) {
    setGradient(0, 100, w, h, colorCntrl, colorCntrl2, "xLinhaTopRight"); //bottom right
   } else if (rLinha== 2) {
    setGradient(0, 100, w, h, colorCntrl, colorCntrl2, "yBolita"); //bottom right
   } else if (rLinha== 3) {
    setGradient(0, 100, w, h, colorCntrl, colorCntrl2, "xTriangle"); //bottom right
   }
 
  
      pop();
     
     }
   }

   image(pg, 0, 0, width, height);
  

}

 function draw() {
  image(pg, 0, 0, width, height);
  fxpreview();
 }


 function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "xBack") { // Top to bottom right gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i*3, x + w, i);
    }
  } else if (axis == "xBack2") { // Top to bottom right gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i*4, x + w * 100, i);
    }
  } 
  else if (axis == "xBack3") { // Top to bottom right gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i*30, x + w * 0, i);
    }
  } 
  else if (axis == "yCorrente") { // 
    for (let j = x; j <= x + w; j++) {
      var inter2 = map(j * seedRand2, x, x + w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
	  stroke(d);
      fill(d);
	  ellipse(j/10, j, 15, 100)
		
    }
  } 
   else if (axis == "yRecta") { // Corrente
    for (let j = x; j <= x + w; j++) {
      var inter2 = map(j * seedRand2, x, x + w, 1, 1);
      var d = lerpColor(c1, c2, inter2);
    fill(d);
	  rect(0, 0, 3,3)
	
    }
  } 

  else if (axis == "yBolita") { // Corrente
    for (let j = x; j <= x + w; j++) {
      var inter2 = map(j * seedRand2, x, x + w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
    
      fill(c2);
      ellipse(0, 0, 3,3)
		
    }
  } 

  else if (axis == "yBolaLinha") { // Bolita Top bottom right
    for (let j = x; j <= x + w; j++) {
      var inter2 = map(j * seedRand2, x, x + w, 0, 1);
      var d = lerpColor(c1, c2, inter2);

      fill(d);
	  rect(0, windowHeight /  2, windowWidth, 100)
		
    }

  } else if (axis == "xTriangle") { // Arvore
    var inter2 = map(seedRand2, x, x + w, 0, 1);
    var d = lerpColor(c1, c2, inter2);

    fill(d);
    triangle(0,0,250,0,0,200);
 
  }
  else if (axis == "xLinhaTopLeft") { // Top to bottom right gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x,150, x + w, 0);
     
    }
  }  else if (axis == "xLinhaTopRight") { // Top to bottom right gradient
  for (let i = y; i <= y + h; i++) {
    var inter = map(i, y, y + h, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, 0, x + w, 150);

  } 
} else if (axis == "xLinha") { // Top to bottom right gradient
  for (let i = y; i <= y + h; i++) {
    var inter = map(i, y, y + h, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, 0, x + w, 0);

  } 
} 
}
function keyTyped() {
  if (key === 's' || key === 'S') {
    saveCanvas('monotriangles', 'jpg');
    print("saving");
  }
  return false;
  }
