function decodeNumber(symbols) {
    const values = {
        '.': 1,
        ',': 5,
        ':': 10,
        ';': 50,
        '!': 100,
    };

    let accumulated_value = 0; //Suma de los valores

    let previous_value = values[symbols[0]];
    let actual_value = undefined;
    for (let i = 1; i < symbols.length; i++) {
        actual_value = values[symbols[i]];
        if(actual_value == undefined){
            //Si se encuentra con algún símbolo desconocido, retorna NaN
            return NaN; 
        }

        //Si el de la izquierda es mayor o igual, se suma, de lo contrario, se resta
        accumulated_value =
            previous_value >= actual_value ? accumulated_value + previous_value : accumulated_value - previous_value;

        //Se sigue iterando
        previous_value = actual_value;
    }

    //Se suma el último valor a la derecha
    accumulated_value += previous_value;

    return accumulated_value;
}

decodeNumber('...'); // 3
decodeNumber('.,'); // 4 (5 - 1)
decodeNumber(',.'); // 6 (5 + 1)
decodeNumber(',...'); // 8 (5 + 3)
decodeNumber('.........!'); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumber('.;'); // 49 (50 - 1)
decodeNumber('..,'); // 5 (-1 + 1 + 5)
decodeNumber('..,!'); // 95 (1 - 1 - 5 + 100)
decodeNumber('.;!'); // 49 (-1 -50 + 100)
decodeNumber('!!!'); // 300
decodeNumber(';!'); // 50
decodeNumber(';.W'); // NaN
