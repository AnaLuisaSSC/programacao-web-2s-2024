function matrizTransposta(A) {
   A_string = "";
    for (let i = 0; i < A.length; i++){
        for (let j = 0; j < A[0].length; j++){
            A_string += "" + A[i][j] + " ";
        }
        A_string += "\n";
    }

    console.log(A_string);

    At_string = "\n";
    for(let j = 0; j < A[0].length; j++){
        for(let i = 0; i < A.length; i++){
            At_string += "\n";
        }
    }
    console.log(At_string);
}

   /**
    * declaracao de matriz 2x3
    * 1 2 
    * 3 4
    * 5 6
    */

    let A = [
        [1, 2],
        [3, 4],
        [5, 6]
    ];

    transporMatriz(A); 

   
   
  