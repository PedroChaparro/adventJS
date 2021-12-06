const carta = 'bici coche balón _playstation bici coche peluche';

function listGifts(letter) {
    // s+ (uno o más espacios en blanco) /g (reemplaza todas las ocurrencias)
    letter = letter.replace(/\s+/g, " ");
    const words = letter.split(' ');

    words.map((word) => {
        //Por cada palabra se eliminan sus espacios en blanco y si comienza por _ se elimina
        let toy = word.trim();
        
        if (toy[0] == '_' || toy === '') { 
            words.splice(words.indexOf(toy), 1);
        }
    });

    //Contar cuántas veces aparece cada palabra
    const uniqueValues = Array.from(new Set(words));    //Se crea un array a partir de un set (sin elementos repetidos)
    const count = {} //Objeto a retornar

    uniqueValues.map((value) => { //Por cada valor único
        count[value] = words.filter( word => word == value).length; //La cantidad de repeticiones es la longitud de la lista que solo contiene esa palabra
    }); 

    return count; 
}

console.log(listGifts(carta)); 
