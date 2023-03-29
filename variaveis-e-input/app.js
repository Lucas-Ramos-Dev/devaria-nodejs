
const minhaPrimeiraConstanteString = "Minha primeira constante";
console.log(minhaPrimeiraConstanteString); 

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let leituraDeCampo;

readLine.question("Informe um número: ", input => {
    leituraDeCampo = input;
    console.log(`O usuário digitou ${leituraDeCampo}`);
});
