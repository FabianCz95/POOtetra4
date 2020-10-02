var poke;

function setup() {
  createCanvas(400, 400, WEBGL);
  poke = new Umbreon();
  frameRate(15);
}

function draw() {
  background(220);
  if(keyCode == 39){
    poke.girar()
  } else {
    poke.mostrar();
  }
    
  if(keyIsPressed && keyCode == 37){
    poke.moverIzq();
  } else if(keyIsPressed && keyCode == 39){
    poke.moverDer();
  }
}