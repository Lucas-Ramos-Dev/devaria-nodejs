const listOfProductsavailable = [
    'pão',
    'café',
    'macarrão',
    'acerola',
    'tomate',
    'arroz',
    'farinha',
    'peixe'
];

//declarado uma lista onde irá receber os valores através de parâmetros sob linha de comando.
const listOfProductsArguments = process.argv.slice(2);

const lpsd = listOfProductsavailable.filter(produto => {
    return listOfProductsArguments.find(argumento => argumento === produto);
});

lpsd.forEach(produto => {
    console.log(`Este produto nós temos: ${produto}`);
});


const lpsnd = listOfProductsArguments.forEach(argumento => {
    return !listOfProductsavailable.find(produto => produto === argumento);
});

lpsnd.forEach(argumento => 
    console.log(`Este produto nós não temos = ${argumento}`
));