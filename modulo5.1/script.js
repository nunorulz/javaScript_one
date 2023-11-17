let tituloInner = document.getElementById('titulo');
let linkInner = document.querySelector('a');
let listaUl = document.querySelector('ul');
let listaOl = document.getElementById('lista-ordenada');

tituloInner.innerText = 'Titulo adicionado via innerText';
linkInner.innerText = 'prozeducacao.com.br';

listaOl.innerHTML =
  '<li><a href="#">Lista ordenada criada via innerHTML</a></li>';

listaUl.innerHTML = '<li>Lista não ordenada criada via innerHTML</li>';
