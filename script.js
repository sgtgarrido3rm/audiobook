// constantes de manipulação da página
const audio                 = document.getElementById("audio-capitulo");
const nomeCapitulo          = document.getElementById("capitulo");
const botaoPlayPause        = document.getElementById("play-pause");
const quantidadeCapitulos   = 10;
const botaoProximoCapitulo  = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");

// inicializa como false, pois a página inicia sempre com o áudio parado
let taTocando = false;
// inicializa a página sempre no primeiro capítulo
let capitulo = 1;

// função que faz a troca de faixa
function tocarFaixa() {
  botaoPlayPause.classList.remove("bi-play-circle-fill");
  botaoPlayPause.classList.add("bi-pause-circle-fill");
  audio.play();
  taTocando = true;
}

// função que pausa a faixa que está sendo executada
function pausarFaixa() {
  botaoPlayPause.classList.add("bi-play-circle-fill");
  botaoPlayPause.classList.remove("bi-pause-circle-fill");
  audio.pause();
  taTocando = false;
}

// função que pausa a faixa caso esteja sendo executada ou troca caso esteja parada
function tocarOuPausarFaixa() {
  if (taTocando === true) {
    // chama a função que pausa a faixa
    pausarFaixa();
  } else {
    // chama a função que troca a faixa
    tocarFaixa();
  }
}

// função que volta ao capítulo anterior, ou retorna ao último caso esteja no primeiro capítulo
function capituloAnterior() {
  if (capitulo === 1) {
    capitulo = quantidadeCapitulos;
  } else {
    capitulo -= 1;
  }
  audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
  nomeCapitulo.innerText = "Capítulo " + capitulo;
  // chama a função que troca a faixa
  tocarFaixa();
}

// função que avança um capítulo, ou retorna ao primeiro caso esteja no último
function proximoCapitulo() {
  if (capitulo < quantidadeCapitulos) {
    capitulo += 1;
  } else {
    capitulo = 1;
  }

  // configura o caminho e nome correto do arquivo de áudio
  audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
  // configura o capítulo correto para exibição na página
  nomeCapitulo.innerText = "Capítulo " + capitulo;
  // chama a função que troca a faixa
  tocarFaixa();
}

// evento que chama a função [tocarOuPausarFaixa]
botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
// evento que chama a função [capituloAnterior]
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
// evento que chama a função [proximoCapitulo]
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
// evento que chama a função [proximoCapitulo]  ao final de cada áudio
audio.addEventListener("ended", proximoCapitulo);
