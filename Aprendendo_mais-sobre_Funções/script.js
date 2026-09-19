

//
    let escolha = ("O que o senhor deseja\nAlcool ou gasolina");
function VendasCombustivel(preco, litro){
    
   let valorAlcool = 4.04;
   let valorGasolina = 6.53;

   alert("O que o senhor deseja")
   Option()

    
}

 console.log(VendasCombustivel);

 



/*
 
               Calculando area do retangulo com funções.
 ______________________________________________________________
 _________________________tradicional__________________________
 function areaRetangulo(largura, altura){
    
    return largura * altura;
 }
 
 console.log(areaRetangulo(5, 6))//30

 ______________________________________________________________
 ____________________________flecha____________________________
 const soma = (largura, altura) => {
    return largura * altura;
 }

 console.log(soma(6, 6));

 ______________________________________________________________
 _____________________flecha_de_lunha_unica____________________

 const soma = (largura, altura) => largura * altura;
 
 
 console.log(soma(6, 6));
 ______________________________________________________________
 ____________________________anonima___________________________
 const soma = function (largura, altura){
    return largura * altura;
 }

 console.log(soma(6, 6));


 Multiplique cada nota pelo seu peso:
 ((7,0 x 4) = 28
 ((8,0 x 6) = 48
 
 ______________________________________________________________
 ____________________________Exercicio_1_______________________

 function avaliarNotas(nota1 , nota2, nota3){
    const peso1 = 4;
    const peso2 = 3;
    const peso3 = 3;
    const somaPesos = peso1 + peso2 + peso3;

    const media = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / somaPesos;

    if(media >= 7){
        console.log(`A media do aluno foi ${media} o aluno está aprovado`);
    } else if(media >= 5){
        console.log(`A media do aluno foi ${media} o aluno está de recuperação`);
    }else{
        console.log(`A media do aluno foi ${media} o aluno está REPROVADO`);
    }

    
 }

 console.log(avaliarNotas(7.0 , 9.0, 5.0));

 ______________________________________________________________
 ____________________________Exercicio_2_______________________
*/