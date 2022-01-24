//ator
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
}


function verificaColisao(){
  for(let i=0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      colidiu();
      if(ptMaiorQueZero()){
          meusPontos -= 1;
      }
    }
  }
}

function colidiu(){
  yAtor = 366;
  xAtor = 100;
}

function incluiPontos(){
  fill(color(255, 240, 60));
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width /5, 30);
}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    colidiu();
  }
}

function ptMaiorQueZero(){
  if(meusPontos > 0){
    return meusPontos -= 1;
  }
}

function podeSeMover(){
  return yAtor < 366;
}