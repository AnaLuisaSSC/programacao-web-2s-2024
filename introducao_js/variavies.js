/**
 * verifica se o número é par
 * @param {integer} notaas
 * @returns {boolean}
 */
function verificarNumeroPar(n){
    if(n % 2 != 0 && n % 3 != 0 && ){
        return true;
    }
    else{
        return false;
    }
}

console.log(verificarNumeroPrimo(0));
console.log(verificarNumeroPrimo(1));
console.log(verificarNumeroPrimo(2));
console.log(verificarNumeroPrimo(3));
console.log();
console.log();
; //true
; //true
verificarNumeroPrimo(7); //true
verificarNumeroPrimo(83); //true
verificarNumeroPrimo(100); //false
verificarNumeroPrimo(991); //true
verificarNumeroPrimo(104729); //true
verificarNumeroPrimo(14348907); //false