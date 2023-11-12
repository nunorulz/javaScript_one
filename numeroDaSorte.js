const numerosDaSorte = [37, 14, 26, 5, 94, 87]

for (let i = 0; i < numerosDaSorte.length; i++){
  const numerosImpresso1 = numerosDaSorte[i];
  if (numerosImpresso1 % 2 == 0 && numerosImpresso1 < 50){
    console.log(numerosImpresso1)
  }
}

for (let i = 0; i < numerosDaSorte.length; i++){
  const numerosImpresso2 = numerosDaSorte[i];
  if (numerosImpresso2 < 50){
    console.log(numerosImpresso2)
  }
}

for (let i = 0; i < numerosDaSorte.length; i++){
  const numerosImpresso3 = numerosDaSorte[i];
  if (numerosImpresso3 > 50){
    console.log(numerosImpresso3)
  }
}
