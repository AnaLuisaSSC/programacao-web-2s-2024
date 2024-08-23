// declara um array
const notas =[9,8.5,7,"10"];

notaas[4] = true;

/**
 * comentário bloco
 */

console.log(notas);

// verifica a quantidade de elementos array
console.log(notas.length);

//laço de repetição para percorrer o array
for(let i=0; i<notas.length; i++){
        //estrutura de controle - condição
        if(typeof notas[i] == 'number'){
            if(notas[i] >= 7){
                console.log("Aprovado.");
            }
            else{
                console.log("Reprovado.");
            }
        } 
        else{
            console.log("Nota inválida");
        }
}

/*
    2 1 0
    0 1 0
    1 2 1 
*/

let A = [
    [2, 1, 0]
    [0, 1, 0]
    [1, 2, 1] 
];

console.log(A[1][2]);

let capitais = {
    DF: 'Brasilia',
    DF_DDD: 61,
    BA: 'Salvador',
    BA_DDD: 71,
    RJ: 'Rio de Janeiro',
    RJ_DDD: 21
};

console.log(capitais.DF);

for (const kay in capitais){
    const valor = capitais[kay];
    console.log(kay = '-' + valor);
}

/**
 * verifica se o número é par
 * @param {integer} notaas
 * @returns {boolean}
 */
function verificarNumeroPar(n){
    if(n % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(verificarNumeroPar(2));
console.log(verificarNumeroPar(3));