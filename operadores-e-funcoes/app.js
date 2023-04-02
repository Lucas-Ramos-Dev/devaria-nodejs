const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
function calculadora(){
    readLine.question("Informe o primeiro número: ", (value1) => {
        let x = Number.parseFloat(value1); //casting de um valor string capturado para float
        if (isNaN(value1)){ // função que verifica se o valor is not a number
            console.log("Informe um valore válido!");
            return;
        }else{
            readLine.question("informe o segundo número: ", (value2) => {
                let y = Number.parseFloat(value2);
                if(isNaN(value2)){
                    return "Informe um valor válido!";
                    return;
                }else{
                    readLine.question("Informe qual operação deseja utilizar:  + | - | * | /  -->  ",  (operator) => {
                        let result;
                        switch(operator){
                            case "+":
                                result = (x + y);
                                console.log(`A soma é: ${result}`);
                                break;
                            case "-":
                                result = (x - y);
                                console.log(`A subtração é: ${result}`);
                                break;
                            case "*":
                                result = (x * y);
                                console.log(`A multiplicação é: ${result}`);
                                break;
                            case "/":
                                result = (x / y);
                                console.log(`A divisão é: ${result}`);
                                break;
                            default:
                                console.log("Selecione alguma opção da lista!")
                                break;
                        }
                    });  
                }
            });
        }        
    });
}
calculadora();