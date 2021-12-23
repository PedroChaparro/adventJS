function canReconfigure(from, to) {

    //Se crean dos sets (Sin repeticiones) a partir de ambos strings
    const fromUniques = new Set([...from]);
    const toUniques = new Set([...to]);

    //Si ambos sets miden lo mismo es porque para cada elemlento de from hay un elemento de to
    //También se verifica que los string de entrada tengan el mismo lenght
    return fromUniques.size === toUniques.size && from.length === to.length;
}
const from = 'BAL';
const to = 'LIB';
canReconfigure(from, to); // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

const from_2 = 'CON';
const to_2 = 'JUU';
canReconfigure(from_2, to_2); // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

const from_3 = 'MMM';
const to_3 = 'MID';
canReconfigure(from_3, to_3); // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

const from_4 = 'AA';
const to_4 = 'MID';
canReconfigure(from_4, to_4); // false -> no tiene la misma longitud
