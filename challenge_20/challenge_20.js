function pangram(letter) {
    //Si incluye la ñ comienza valiendo 1
    let letters_count = letter.includes('ñ') ? 1 : 0;

    //Se pasa a minúscula y se quitan las tíldes o cualquier otro signo
    letter = letter
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    //Se quitan todos los caracteres que no sean una letra
    letter = letter.replace(/[^a-zA-Z ]/g, '');
    //Se eliminan las letras duplicadas y los espacios en blanco
    letter = letter.replace(/(.)(?=.*\1)/g, '').replace(' ', '');

    letters_count += letter.length;

    return letters_count == 27 ? true : false;
}

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')); // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibe!')); // true

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')); // false
console.log(pangram('De la a a la z, nos faltan letras')); // false
