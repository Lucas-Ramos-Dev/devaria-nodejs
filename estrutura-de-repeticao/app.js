
const listArgs = process.argv.slice(2);

console.log('---------------------------LOOP FOR-----------------------------');

for(let i = 0; i < listArgs.length; i++){
    console.log(`Índice ${i}, valor = ${listArgs[i]}`);
}

console.log('---------------------------LOOP WHILE-----------------------------');

let countWhile = 0; 
while(countWhile < listArgs.length){
    console.log(`Índice ${countWhile}, valor = ${listArgs[countWhile]}`);
    countWhile++;
}

console.log('---------------------------LOOP DO WHILE-----------------------------');

let countDoWhile = 0;
do{
    console.log(`Índice ${countDoWhile}, valor = ${listArgs[countDoWhile]}`);
    countDoWhile++;
}while(countDoWhile < listArgs.length)

console.log('---------------------------LOOP FOR OF-----------------------------');

for(const args of listArgs){
    console.log(`Valor lído = ${args}`);
}