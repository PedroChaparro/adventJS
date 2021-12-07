const carta = '   balon _play3   _play4 balon bici   bici   '; 

function listGifts(letter) {
    letter = letter.replace(/\s+/g, ' ');   //Eliminar más de un espacio en blanco ENTRE LAS PALABRAS
    letter = letter.trim(); //Eliminar uno o más espacios en blanco AL INICIO Y FINAL DEL STRING

    const words = letter.split(' ');
    const final_letter = []; //Array en el que se almacenarán las palabras válidas (que no estén tachadas)

    words.map((word) => {
        //Por cada palabra se eliminan sus espacios en blanco y si comienza por _ se elimina
        if (word[0] != '_') {
            //Si no está tachada la incluye a la lista final
            final_letter.push(word);
        }
    });

    //-- Para Contar cuántas veces aparece cada palabra
    const uniqueValues = Array.from(new Set(final_letter)); //Se crea un array a partir de un set (sin elementos repetidos)
    const count = {}; //Objeto a retornar

    uniqueValues.map((value) => {
        //Por cada valor único
        count[value] = final_letter.filter((word) => word == value).length; //La cantidad de repeticiones es la longitud de la lista que solo contiene esa palabra
    });

    return count;
}

let obtained = listGifts(carta);

const expected = {
    bici: 2,
    coche: 2,
    balón: 1,
    peluche: 1,
};


console.log(obtained);
console.log(expected);  
console.log(obtained ==  expected); 