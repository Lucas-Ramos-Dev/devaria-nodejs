//criando um objeto e instanciando-o através do módulo readline com dois valores/atributos que servem para captura/saída de dados do usuário 
const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

//função de validação de dados digitados pelo usuário. Verifica o dado digitado e retorna um aviso caso não passe pela verificação. Função criada a parte e chamada a cada dado informado pelo usuário 
const validaNumber = (numero) => {
    if (isNaN(numero)){
        console.log("Informe um número válido!")
    }else{
        numero = Number.parseFloat(numero);
        return numero;
    }
}
//função para validar o operador informado pelo usuário
const validaOperador = (operator) => {
    switch(operator){
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
            return operator;
        default:
            console.log("Operador inválido, Informe um operador da lista!");
            return null;
    }
}

readLine.question("Informe um número: ", (value1) => {
    const numeroValidado_1 = validaNumber(value1);

    if(numeroValidado_1){
        readLine.question("Informe outro número: ", (value2) => {
            const numeroValidado_2 = validaNumber(value2);

            if(numeroValidado_2){
                readLine.question("Informe o operador a ser utilizado: ", (operator) => {
                    const operadorValidado = validaOperador(operator);

                    if(operadorValidado){
                        let result;
                        switch(operadorValidado){
                            case "+":
                                result = numeroValidado_1 + numeroValidado_2;
                                console.log(`A soma é:  ${result}`);
                                break;
                            case "-":
                                result = numeroValidado_1 - numeroValidado_2;
                                console.log(`A subtração é:  ${result}`);
                                break;
                            case "*":
                                result = numeroValidado_1 * numeroValidado_2;
                                console.log(`A multiplicação é:  ${result}`);
                                break;
                            case "/":
                                result = numeroValidado_1 / numeroValidado_2;
                                console.log(`A divisão é:  ${result}`);
                                break;
                            case "%":
                                result = numeroValidado_1 % numeroValidado_2;
                                console.log(`O resto da divisão é:  ${result}`);
                                break;
                        }
                    }
                });
            }
        });
    }
});


