transporMatriz(A){
    function imprimirMatriz(matriz) {
        matriz.forEach(linha => {    // função de array em JavaScript que executa uma função de callback para cada elemento do array
            console.log(linha.join(' '));  // nesse contexto linha representa uma linha da matriz. join é um método de array que une todos os elementos do array em uma única string, usando o separador fornecido.
        });
        console.log(); // Linha em branco para separarar
    }

    console.log('Matriz Original:');  //imprimir a matriz original
    imprimirMatriz(A);

    console.log('Matriz Original:');
    imprimirMatriz(A);

    const linhas = A.length;  // length é usada para obter o número de elementos em um array ou o número de caracteres em uma string.
    const colunas = A[0].length;
    const matrizTransposta = Array.from({ length: colunas }, () => Array(linhas));

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            matrizTransposta[j][i] = A[i][j];
        }
    }

    // Imprime a matriz transposta
    console.log('Matriz Transposta:');
    imprimirMatriz(matrizTransposta);
}

// Exemplo de uso com a matriz fornecida
const matrizOriginal = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matrizOriginal);
