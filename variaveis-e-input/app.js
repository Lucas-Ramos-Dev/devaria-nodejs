
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let leituraDeCampo;

readLine.question("Informe alguma coisa: ", input => {
    leituraDeCampo = input;
    console.log(`Você digitou: ${leituraDeCampo}`);
});

