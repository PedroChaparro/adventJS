function checkSledJump(heights) {
    //Contador de los cambios en la tendencia de la altura del trineo
    let trend_changes = 0;

    //Variable para saber la tendencia actual
    let isUptrend = false;

    let previous_heigt = heights[0];
    let actual_height = undefined;

    for (let i = 1; i < heights.length; i++) {
        actual_height = heights[i];

        if (actual_height > previous_heigt) {
            //Si la altura aumenta y no estaba en tendencia alcista, aumenta el contador de cambios
            trend_changes = !isUptrend ? trend_changes + 1 : trend_changes;
            isUptrend = true;
        } else if (actual_height == previous_heigt) {
            //En caso de que dos alturas sean iguales, retorna falso (Ya que permaneció constante)
            return false;
        } else {
            //Si la altura disminuye y estaba en tendencia alcista, aumenta el contador de cambios
            trend_changes = isUptrend ? trend_changes + 1 : trend_changes;
            isUptrend = false;
        }

        //Si ya cambió la tendencia más de dos veces, rompe el ciclo (Para no hacer iteraciones de más)
        if(trend_changes > 2){
          break; 
        }

        //Se sigue iterando
        previous_heigt = actual_height;
    }

    //Solo pueden haber dos cambios de tendencia (El inicial (hacia arriba) y el final (hacia abajo))
    return trend_changes == 2 ? true : false;
}

console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!
