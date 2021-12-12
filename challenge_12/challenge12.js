function getMinJump(obstacles) {
    //Array con todos los números desde el 1 hasta el máximo obstáculo
    let no_multiples = Array.from([...Array(Math.max(...obstacles) + 1).keys()]);
    no_multiples.splice(0, 1); //Se quita el cero

    obstacles.map((obstacles_index) => {
        //Por cada posición de algún obstáculo
        //Se eliminan los múltiplos de esa posición, ya que de lo contrario, en algún momento se llegará al obstáculo
        //También se aceptan los números mayores, ya que a pesar de que el resto es cero, no se toma como divisor
        no_multiples = no_multiples.filter((number) => obstacles_index % number != 0 || number > obstacles_index);
    });

    return Math.min(...no_multiples);
}

console.log(getMinJump([5, 3, 6, 9, 7]));
console.log(getMinJump([2, 4, 6, 8, 10])); 
