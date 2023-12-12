const readline = require('readline')

const interface = readline.createInterface(
    process.stdin,
    process.stdout
);

interface.question('Whats is your age? ', (age) => {
    for(var i = 0; i < age; i++)
    var soma = i
    soma = soma + i 
    console.log(soma)
    interface.close()
});

