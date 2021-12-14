function missingReindeer(ids) {
    //O(n) solution

    //Array de ceros par contar las apariciones de cada id
    const ids_count = new Array(Math.max(...ids) + 1).fill(0);

    ids.map((id) => { //Por cada id, se aumenta el contador de ese id
        ids_count[id] += 1;
    });

    //Si existe alguna posición con 0, retorna esa posición, de lo contrario, retorna el largo del array
    return ids_count.indexOf(0) != -1 ? ids_count.indexOf(0) : ids.length;

    /* //Better solution
    const max = Math.max(...ids); //Máximo número en el arreglo
    const expected_sum = ((max * (max +1))/(2)); //Suma esperada
    const obtained_sum = ids.reduce((a, b) => a+b, 0); 
  
    //Si las sumas son iguales, no falta ningún número, de lo contrario, retorna el número faltante (la diferencia)
    return expected_sum == obtained_sum ? ids.length : expected_sum - obtained_sum;  */

}

console.log(missingReindeer([0, 2, 3])); // -> 1
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])); // -> 4
console.log(missingReindeer([0, 1])); // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])); // -> 2
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])); // -> 8
console.log(missingReindeer([0])); // -> 1 (¡es el último el que falta!)
