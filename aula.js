const usuario = "Bruno";
let senha = "senha123";
let admin = true;
let verificacaoSenha = "senha123"; 

if (usuario === "Bruno" && verificacaoSenha === senha) {
  console.log("Por favor, insira sua nova senha");
} else {
  console.log("Seu usuário ou senha estão incorretos");
}

if (admin == true) {
  console.log("Bem-vindo(a) à área de administrador");
} else {
  console.log("Você não pode acessar esta parte do sistema");
}