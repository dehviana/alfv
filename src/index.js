// these are the variables you can use as inputs to your algorithms
// console.log(fxhash)   // the 64 chars hex number fed to your algorithm
// console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//


const container = document.createElement("div")
container.innerText = `
  random hash: ${fxhash}\n
  values: [ ${$fxhashFeatures["Background"]}, ${$fxhashFeatures["ColorGrad #1"]}, ${$fxhashFeatures["ColorGrad #2"]}, ${$fxhashFeatures["Number of Cols"]}, ${$fxhashFeatures["Inverted"]}\n
`
//document.body.prepend(container)

