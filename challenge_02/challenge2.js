const carta = 'bici coche balón _playstation bici coche peluche'; 

function listGifts(letter) {
    letter = letter.replace(/\s+/g, ' ');   //Eliminar más de un espacio en blanco ENTRE LAS PALABRAS
    letter = letter.trim(); //Eliminar uno o más espacios en blanco AL INICIO Y FINAL DEL STRING

    const words = letter.split(' ');
    const count = {}; 

    words.map((word) => {
        //Por cada palabra se eliminan sus espacios en blanco y si comienza por _ se elimina
        if (word[0] != '_') {
            //Si no está tachada, la agrega al objeto a retornar 
            count[word] == undefined ? count[word] = 1 : count[word]++;     //Si no existe la llave, la crea e inicia el contador como 1
        }
    });

    return count;
}

let obtained = listGifts(carta);
console.log(obtained); 