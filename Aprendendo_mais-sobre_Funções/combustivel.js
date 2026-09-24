function calcularDesconto(tipo, litros) {
   if (tipo === 'A' || tipo === 'a') {
      return litros <= 20 ? 0.03 : 0.05;
   } else if (tipo === 'G' || tipo === 'g') {
      return litros <= 20 ? 0.04 : 0.06;
   } else {
      return null;
   }
}

function calcularValorPago(litros, valorLitros, tipo) {
   const desconto = calcularDesconto(tipo, litros);
   if (desconto === null) return null;

   const valorBruto = litros * valorLitros;
   const valorDesconto = valorBruto * desconto;
   return valorBruto - valorDesconto;
}

function main() {
   const tipo = prompt("Frentista: Boa tarde! Qual combustível vai colocar hoje?\n(A - Álcool / G - Gasolina)");
   const litros = parseFloat(prompt(`Frentista: Quantos litros de ${tipo === 'A' || tipo === 'a' ? 'álcool' : 'gasolina'} vai querer?`));

   const valorLitros = (tipo === 'A' || tipo === 'a') ? 5.20 : 5.90;
   const valorPago = calcularValorPago(litros, valorLitros, tipo);

   if (valorPago === null) {
      console.log("Frentista: Desculpe, não reconheço esse tipo de combustível.");
   } else {
      console.log(`Frentista: Prontinho! São ${litros} litros a R$ ${valorLitros.toFixed(2)} o litro.`);
      console.log(`Frentista: O valor total, já com desconto, é R$ ${valorPago.toFixed(2)}.`);
      console.log("Cliente: Obrigado!");
   }
}

main();