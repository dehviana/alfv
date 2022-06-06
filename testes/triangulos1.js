 /*/////////////////////////////////////////////
// MONOPATTERNS LISBON #1  //
// by monomonio                             //
/////////////////////////////////////////////*/

let nAzul = 1;
 let w;
 let h;


function preload(){
    
  let seed=int(fxrand() * 100000000) // FXHASH seed rand
  seed = fxrand()*999999999
  randomSeed(seed)
    
  noiseSeed(seed)
  count = 6

  pal2 = int(fxrand() * palletsBack.length > 0.2)

  
  console.log(seed)
}
  
 function setup() {

  createCanvas(800, 800);
  pixelDensity(2);
  smooth();
  
  let corBack
  
  corBack= palletsBack[pal2][int( fxrand() * palletsBack[pal2].length ) ]
  background(corBack);
  
  noLoop();
   
  nAzul=floor(8);

  w = width / nAzul;
  h = height / nAzul;

}

 function draw() {
  
  gradcolorNumber = int(fxrand() * Gradcolors.length)

  let corGrad1, corGrad2

  corGrad1 = Gradcolors[gradcolorNumber][int(fxrand() * Gradcolors[gradcolorNumber].length)]
  corGrad2 = Gradcolors[gradcolorNumber][int(fxrand() * Gradcolors[gradcolorNumber].length)]
  
  console.log("Grad 1 " + corGrad1)
  console.log("Grad 2 " + corGrad2)
  
  if (corGrad1 == corGrad2) { 
    console.log("ROLA")
    corGrad2 = "#333"
  }
   
  let colorCntrl = color(corGrad1);
  let colorCntrl2 = color(corGrad2);

  for (let row = 0; row< nAzul; row++) {
     for (let col = 0; col < nAzul; col++) {
       let x = col * w;
       let y = row * h;

       push();
       translate(x, y);
      

       let rLinha = floor(random(6));
      
       if (rLinha == 0) {
        setGradient(0, 0, w, h, colorCntrl, colorCntrl2, "yRect"); //top left
       
        noStroke();
        let ctrans = color(255, 255, 255, 102);
        fill(ctrans);
        let value = alpha(ctrans);
        fill(value);

        rect(50, 50, 2, 2);
        
        } else if (rLinha== 1) {
        setGradient(0, 0, w, h, colorCntrl, colorCntrl2, "yBottomRight"); //bottom right
        noStroke();
        let ctrans = color(255, 255, 255, 102);
        fill(ctrans);
        let value = alpha(ctrans);
        fill(value);
        rect(50, 50, 2, 2);

      } else if (rLinha == 2) {
        setGradient(0, 0, w, h, colorCntrl, colorCntrl2, "xLinhaTopRight");  //linha left bottom right
        noStroke();
        let ctrans = color(255, 255, 255, 102);
        fill(ctrans);
        let value = alpha(ctrans);
        fill(value);
        rect(50, 50, 2, 2);

      } else if (rLinha == 3) {
        setGradient(0, 0, w, h, colorCntrl, colorCntrl2, "xTopLeft");  //top left
        noStroke();
        let ctrans = color(255, 255, 255, 102);
        fill(ctrans);
        let value = alpha(ctrans);
        fill(value);
        rect(50, 50, 2, 2);

      } else if (rLinha == 4) {
        setGradient(0, 0, w, h, colorCntrl, colorCntrl2, "xBottomLeft"); //bottom left
        noStroke();
        let ctrans = color(255, 255, 255, 102);
        fill(ctrans);
        let value = alpha(ctrans);
        fill(value);
        rect(50, 50, 2, 2);

      } else if (rLinha == 5) {
        setGradient(0, 0, w, h, colorCntrl, colorCntrl2, "xLinhaTopLeft"); //linha left top right
        noStroke();
        let ctrans = color(255, 255, 255, 102);
        fill(ctrans);
        let value = alpha(ctrans);
        fill(value);
        rect(50, 50, 2, 2);
      }    

       pop();
       fxpreview();

       window.$fxhashFeatures = {
        "Dark": true,
        "Colors number": 7,
        "Head size": "Big"
      
      }

     }
    
   }
  
   
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

let Gradcolors = [
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
