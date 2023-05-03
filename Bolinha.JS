let xBolinha = 300;
let yBolinha =300;
let diametro = 20;

//velocida da bolinha
let velocidadexBolinha = 4;
let velocidadeyBolinha = 2;
let raqueteComprimento = 90;
let raqueteAltura = 10;

//variaveis da raquete, X e Y

let xRaquete = 5;
let yRaquete =150;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  condicoesBolinha();
   caracteristicasBolinha();
}

function mostraBolinha(){
  
  circle(xBolinha, yBolinha, diametro);
}

function movimentoBolinha(){
   circle(xBolinha, yBolinha, diametro);
   xBolinha += + velocidadexBolinha;
   yBolinha += + velocidadeyBolinha;
}

function condicoesBolinha(){
  
  if(xBolinha> width || xBolinha < 0){
    velocidadexBolinha *= -1;
  }
  if(yBolinha> height || yBolinha < 0){
    velocidadeyBolinha *= -1;
  }
}

function caracteristicasBolinha(){
  rect(xRaquete, yRaquete, raqueteAltura, raqueteComprimento);
  //Ordem dos números
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10; 
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
  
  
}


/*let = cria variável, circle(300,300,20),  xBolinha = xBolinha + velocidadexBolinha;

Para não repetir o 'xBolinha' , coloca-se um 

 if(circle touch the wall)
 //Se ele passar da largura
 Parametros usam () sempre
 or = ||
*/