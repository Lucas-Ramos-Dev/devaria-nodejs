
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//no objeto readLine criado, é chamada uma função question que recebe dois parâmetros onde o primeiro é uma string e o segundo parâmetro é uma função callback anônima do tipo arrow function.
readLine.question('Informe um numero: ', numero => {
    if(numero >= 10){
        console.log('O número é maior que 10!');
        console.log(`Numero digitado ${numero}`);
    }else{
        console.log('O número é menor que 10!');
        console.log(`Numero digitado ${numero}`);
    }
});