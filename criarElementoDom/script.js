//Alterando a cor do body
document.body.style.backgroundColor = '#f1f1f1';

let container = document.createElement('main');
container.style.padding = '50px';

let titulo = document.createElement('h2');
titulo.id = 'titulo';
titulo.innerText = 'Caixeiro Digital';
titulo.style.color = '#1e293b';
titulo.style.fontFamily = 'sans-serif';

let card = document.createElement('div');
card.style.backgroundColor = '#ffffff';
card.style.width = '15%';
card.style.padding = '35px 35px 5px 35px';
card.style.borderRadius = '5px';
card.style.boxShadow = '4px 4px 10px #e6e6e6';

let tituloCard = document.createElement('h3');
tituloCard.innerText = 'GIGABYTE Geforce';
tituloCard.style.textAlign = 'center';
tituloCard.style.textTransform = 'uppercase';
tituloCard.style.color = '#1e293b';
tituloCard.style.fontFamily = 'sans-serif';

let imagem = document.createElement('img');
imagem.src = 'imagem.png';
imagem.alt = 'Placa de vídeo';
imagem.style.width = '100%';

let paragrafo = document.createElement('p');
paragrafo.innerText =
  'Placa de vídeo GIGABYTE Geforce GT 1030 2GB GDDR5, low profile 64-BIT, GV-N1030D5-2GL';
paragrafo.style.fontFamily = 'sans-serif';
paragrafo.style.lineHeight = '22px';
paragrafo.style.textAlign = 'center';
paragrafo.style.fontSize = '17px';

let preco = document.createElement('h4');
preco.innerText = 'R$ 550,00';
preco.style.fontFamily = 'sans-serif';
preco.style.backgroundColor = '#172554';
preco.style.color = '#ffffff';
preco.style.borderRadius = '40px';
preco.style.padding = '20px';
preco.style.textAlign = 'center';
preco.style.fontSize = '40px';

let conteudo = document.querySelector('body');
conteudo.appendChild(container);

let conteudoMain = document.querySelector('main');
conteudoMain.appendChild(titulo);
conteudoMain.appendChild(card);

let conteudoDiv = document.querySelector('div');
conteudoDiv.appendChild(tituloCard);
conteudoDiv.appendChild(imagem);
conteudoDiv.appendChild(paragrafo);
conteudoDiv.appendChild(preco);
