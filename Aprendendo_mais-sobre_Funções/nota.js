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