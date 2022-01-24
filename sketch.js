function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemEstrada);
  mostraCarro();
  mostraAtor();
  movimentaCarro();
  movimentaAtor();
  loopCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}

