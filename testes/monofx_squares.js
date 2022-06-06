let size
let seed
let pg
let pal
let nois = false
let sizePG = 4000
let count

console.log(fxhash) // the 64 chars hex number fed to your algorithm


function preload(){
  seed = fxrand()*999999999
  randomSeed(seed)
  noiseSeed(seed)
  count = 6
  pal = int(random(pallets.length))
  if (random() > 0.2){
    nois = true
  }
  console.log(pal)
}

function setup() {
  size = Math.min(windowWidth, windowHeight)
  createCanvas(size, size);

  pg = createGraphics(sizePG, sizePG);
  pg.strokeWeight(sizePG*0.0000002)
  pg.scale(sizePG)

  let s = 1 / count
  let c = sizePG / 4000 * (random(2)+1)

  for (let x = 0; x <= count; x++){
    for (let y = 0; y <= count; y++){
      let col
      if (nois){
        col = pallets[pal][int(noise(x*c, y*c) * pallets[pal].length)]
      } else {
        col = pallets[pal][int(random(pallets[pal].length))]
      }

      pg.fill(col)
      pg.rect(s*x,s*y,s,s)
    }
  }

  image(pg, 0, 0, width, height);
  fxpreview()

}

function draw() {
  image(pg, 0, 0, width, height);
}

function windowResized() {
  size = Math.min(windowWidth, windowHeight)
  resizeCanvas(size, size)
}


let pallets = [
[
["#f0eeef"],
["#cfcdcb"],
["#ffffff"],
["#fd7c84"],
["#025b0e"],
["#9db802"],
],[
["#fab73d"],
["#fddca5"],
["#ffffff"],
["#bbc8ba"],
["#546747"],
["#2b331f"],
]
]
