function setup() {
    createCanvas(800, 800);
    colorMode(HSB, 360, 100, 100, 100);
  }
  
  function draw() {
    blendMode(BLEND);
    background(0,0,100);
    blendMode(MULTIPLY);
    background(0, 0, 0, 10);
    blendMode(BLEND);
  
    randomSeed(frameRate/10);
    
    let offset = width / 15;
    let x = offset;
    let y = offset;
    let d = width - offset * 2;
    let minD = d / 5;
  
    separateGrid(x, y, d, minD);
  
    // noLoop();
  }
  
  function separateGrid(x, y, d, minD) {
    let sep = int(random(1, 6));
    let w = d / sep;
  
    for (let j = 0; j < sep; j++) {
      for (let i = 0; i < sep; i++) {
        let nx = x + i * w;
        let ny = y + j * w;
        if (random() < 0.9 && w > minD) {
          separateGrid(nx, ny, w, minD);
        } else {
          draw8bitGraphic(nx + w / 2, ny + w / 2,w, shuffle(random(wes_palettes).colors.concat()), 8);
        }
      }
    }
  }
  
  function draw8bitGraphic(x, y, d, palette, res = 8) {
    push();
    translate(x, y);
    scale(0.8);
    translate(-d / 2, -d / 2);
    let arr = [];
    for (let j = 0; j < ceil(res / 2); j++) {
      let ar = [];
      for (let i = 0; i < res; i++) {
        let n = int(random(palette.length + 1));
        let v = int(
          noise(x + i / 10, y + j / 10, frameCount / 33) * palette.length
        );
        n = (n + v) % (palette.length + 1);
        ar.push(n);
      }
      arr.push(ar);
    }
  
    for (let j = 0; j < res; j++) {
      for (let i = 0; i < res; i++) {
        let n = j < res / 2 ? j : res - j - 1;
        let num = arr[n][i];
        if (num < palette.length) {
          let c = color(palette[num]);
          fill(c);
          noStroke();
          let nx = (j * d) / res + d / res / 2;
          let ny = (i * d) / res + d / res / 2;
          rectMode(CENTER);
          push();
          translate(nx, ny);
          //
          scale(1);
          rect(0, 0, d / res, d / res);
          pop();
        }
      }
    }
  
    pop();
  }
  
  let wes_palettes = [
    {
      name: "BottleRocket1",
      colors: [
        "#A42820",
        "#5F5647",
        "#9B110E",
        "#3F5151",
        "#4E2A1E",
        "#550307",
        "#0C1707",
      ],
    },
    {
      name: "BottleRocket2",
      colors: ["#FAD510", "#CB2314", "#273046", "#354823", "#1E1E1E"],
    },
    {
      name: "Rushmore1",
      colors: ["#E1BD6D", "#EABE94", "#0B775E", "#35274A", "#F2300F"],
    },
    {
      name: "Rushmore",
      colors: ["#E1BD6D", "#EABE94", "#0B775E", "#35274A", "#F2300F"],
    },
    { name: "Royal1", colors: ["#899DA4", "#C93312", "#FAEFD1", "#DC863B"] },
    {
      name: "Royal2",
      colors: ["#9A8822", "#F5CDB4", "#F8AFA8", "#FDDDA0", "#74A089"],
    },
    {
      name: "Zissou1",
      colors: ["#3B9AB2", "#78B7C5", "#EBCC2A", "#E1AF00", "#F21A00"],
    },
    {
      name: "Darjeeling1",
      colors: ["#FF0000", "#00A08A", "#F2AD00", "#F98400", "#5BBCD6"],
    },
    {
      name: "Darjeeling2",
      colors: ["#ECCBAE", "#046C9A", "#D69C4E", "#ABDDDE", "#000000"],
    },
    { name: "Chevalier1", colors: ["#446455", "#FDD262", "#D3DDDC", "#C7B19C"] },
    {
      name: "FantasticFox1",
      colors: ["#DD8D29", "#E2D200", "#46ACC8", "#E58601", "#B40F20"],
    },
    { name: "Moonrise1", colors: ["#F3DF6C", "#CEAB07", "#D5D5D3", "#24281A"] },
    { name: "Moonrise2", colors: ["#798E87", "#C27D38", "#CCC591", "#29211F"] },
    {
      name: "Moonrise3",
      colors: ["#85D4E3", "#F4B5BD", "#9C964A", "#CDC08C", "#FAD77B"],
    },
    {
      name: "Cavalcanti1",
      colors: ["#D8B70A", "#02401B", "#A2A475", "#81A88D", "#972D15"],
    },
    {
      name: "GrandBudapest1",
      colors: ["#F1BB7B", "#FD6467", "#5B1A18", "#D67236"],
    },
    {
      name: "GrandBudapest2",
      colors: ["#E6A0C4", "#C6CDF7", "#D8A499", "#7294D4"],
    },
    {
      name: "IsleofDogs1",
      colors: ["#9986A5", "#79402E", "#CCBA72", "#0F0D0E", "#D9D0D3", "#8D8680"],
    },
    {
      name: "IsleofDogs2",
      colors: ["#EAD3BF", "#AA9486", "#B6854D", "#39312F", "#1C1718"],
    },
    {
      name: "FrenchDispatch",
      colors: ["#90D4CC", "#BD3027", "#B0AFA2", "#7FC0C6", "#9D9C85"],
    },
  ];
  