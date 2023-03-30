/*
Qual é a finalidade do módulo readline no node JS?
Desde a versão 7 o Node. js possui o módulo readline para fazer exatamente isso: obter entradas de uma stream de leitura, como a process. stdin , via terminal, durante a execução de um programa Node.
*/ 
const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Este programa checa se vc tem mais de 18 anos e possui habiliotação para enytrada no KART');
console.log('Alem das verificações, precisaremos checar se vc está na lista do horário!')

readLine.question('Qual o ano de seu nascimento? ', anoNasc => {
    if(anoNasc > 2005){
        console.log('Você é menor de idade!');
    }else{
        readLine.question('Você tem habilitação: (SIM/NÃO)? ', possuiHabilitação => {
            //realizando uma negação do valor recebido com o operador unário
            if ( ! (possuiHabilitação.toLocaleUpperCase() === "SIM") ){
                console.log('Você não tem habilitação para entrar no KART!');
            }else{
                readLine.question('Qual o seu nome? ', nome => {
                    switch(nome.toLowerCase()){
                        case 'lucas':
                            console.log('Bem vindo ao KART Lucas!');
                            break;
                        case 'leonardo':
                            console.log('Bem vindo ao KART Leonardo!');
                            break;
                        case 'leandro':
                            console.log('Bem vindo ao KART Leonardo!');
                            break;
                        default:
                            console.log('Seu nome não foi encontrado na lista!');       
                    }   
                });
            }
        });
    }
});


