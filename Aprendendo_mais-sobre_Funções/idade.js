function calcularIdade(anoNascimento){
   const anoAtual = new Date().getFullYear();
   return anoAtual - anoNascimento;
}

function verificarVoto(idade){
   if(idade < 16){
      alert("Não pode votar");
   }else if (idade >= 16 && idade <= 17) {
      alert("O voto é opcional");
   }else {
      alert("O voto é obrigatório");
   }
}

function main() {
   const anoNascimento = parseInt(prompt("Digite o ano em que você nasceu"));
   const idade = calcularIdade(anoNascimento);
   const mensagem = verificarVoto(idade);

   alert(`você tem ${idade} anos`);
   console.log(mensagem);
}
 
main();