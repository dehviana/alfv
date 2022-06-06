/*////////////////////////////
// MONOPATTERNS LISBON #1  //
// by monomonio            //
///////////////////////////*/

let nAzul = 1;
let w;
let h;
let pg
let sizePG = 5000

let palletsBack = [
  [
  ["#F5FEEE"],
  ["#FEFFF0"],
  ["#333"]
  ],[
  ["#FFFBEC"],
  ["#333"],
  ["#111"]
  ]
]

let palletGrad = [
  [
    ["#AF87F8"],
    ["#8573BF"],
    ["#5F6AC9"],
    ["#C06C84"],
    ["#f80759"],
    ["#FF8C00"]
  ],[
    ["#4839FC"],
    ["#1B45B9"],
    ["#350550"], 
    ["#F2C94C"],
    ["#38ef7d"],
    ["#108dc7"]
  ]
]
   
const seedRand = parseInt(fxrand() *2);
const seedRandalf = parseInt(fxrand() *2);
const corBack = palletsBack[seedRand][parseInt( fxrand() * palletsBack[1].length ) ]; 
const  corGrad1 = palletGrad[seedRand][parseInt(fxrand() * palletGrad[1].length)]
const  corGrad2 = palletGrad[seedRandalf][parseInt(fxrand() * palletGrad[1].length)]


function setup() {

  createCanvas(800, 800);
  smooth();
  
  pg = createGraphics(sizePG, sizePG);
  pg.strokeWeight(sizePG*0.0000015)
  pg.scale(sizePG)
 
  background(corBack);
  frameRate(12);
  //noLoop();
   
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
      
      rLinha = floor(random(6));
      
       if (rLinha == 1) {
       
        setGradient(0, 0, w, h, colorCntrl, colorCntrl2, "yRect"); //top left
        noStroke();
       

        if (corGrad1 === corGrad2) { 
          let ctrans = color(255, 255, 255, 102);
          fill(ctrans);
          let value = alpha(ctrans);
          fill(value);
          rect(50, 50, 2, 2);
         }
         
        
        } else if (rLinha== 2) {
        setGradient(0, 0, w, h, colorCntrl, colorCntrl2, "yBottomRight"); //bottom right
        noStroke();
       

      } else if (rLinha == 3) {
        setGradient(0, 0, w, h, colorCntrl, colorCntrl2, "xLinhaTopRight");  //linha left bottom right
        noStroke();
       

      } else if (rLinha == 4) {
        setGradient(0, 0, w, h, colorCntrl, colorCntrl2, "xTopLeft");  //top left
        noStroke();
       

      } else if (rLinha == 5) {
        setGradient(0, 0, w, h, colorCntrl, colorCntrl2, "xBottomLeft"); //bottom left
        noStroke();
      

      } else if (rLinha == 6) {
        setGradient(0, 0, w, h, colorCntrl, colorCntrl2, "xLinhaTopLeft"); //linha left top right
        noStroke();
       
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
  if (axis == "xTopRight") { // Top to right gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke("#0c0");
      line(x, 0, x + w, i);
    }
  } else if (axis == "xBottomRight") { // Top to bottom right gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, 100, x + w, i);
    }
  } else if (axis == "xTopLeft") { // Top to bottom right gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, 0);
    }
  }  else if (axis == "xBottomLeft") { // Top to bottom right gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, 100);
    }
  }  else if (axis == "xLinhaTopRight") { // Top to bottom right gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(0, 0, x + w, 100);
    }
  } else if (axis == "xLinhaTopLeft") { // Top to bottom right gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, 100, x + w, 0);
    }
  } else if (axis == "xRect") { // Top to bottom right gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }  else if (axis == "yRect") { // Top to bottom right gradient
    for (let j = x; j <= x + w; j++) {
      var inter2 = map(j * 2, x, x + w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y + h);
    }
  } else if (axis == "yBottomRight") { // Top to bottom right gradient
    for (let j = x; j <= x + w; j++) {
      var inter2 = map(j, x, x + w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, 100, j + h, y);
    }
  } 
}



function keyTyped() {
  if (key === 's' || key === 'S') {
    saveCanvas('monocanvas', 'jpg');
    print("saving");
  }
  return false;
  }
