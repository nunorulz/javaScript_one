let tituloInner = document.getElementById('titulo');
let linkInner = document.querySelector('a');
let listaUl = document.querySelector('ul');
let listaOl = document.getElementById('lista-ordenada');

tituloInner.innerText = 'Titulo adicionado via innerText';
linkInner.innerText = 'prozeducacao.com.br';

for (let i = 0; i < 3; i++) {
  const listaNaoOrdenada = document.createElement('li');
  listaNaoOrdenada.innerHTML = `<a href="#">Lista ${i} não ordenada criada via innerHTML</a>`;
  let ul = document.querySelector('ul');
  ul.appendChild(listaNaoOrdenada);
}

for (let i = 0; i < 3; i++) {
  const listaOrdenada = document.createElement('li');
  listaOrdenada.innerHTML = `<a href="#">Lista ${i} ordenada criada via innerHTML</a>`;

  let ol = document.querySelector('ol');
  ol.appendChild(listaOrdenada);
}
