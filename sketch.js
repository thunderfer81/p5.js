let xBolinha = 100;
let yBolinha = 100;
let raio = 15
let velocidadeXBolinha = 3;
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(255,160,122);
  circle (xBolinha, yBolinha, raio);
  stroke (255, 160, 122);
  movimento();
  colisao();
}

function movimento(){
  xBolinha += velocidadeXBolinha;
} 
function colisao() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
}
  
  
  
}
