function canMouseEat(direction, game) {
    //Encontrar la posición actual del ratón
    const currentPosition = findMousePosition(game);

    //Verificar si puede comer
    switch (direction) {
        case 'up':
            //Para subir se le resta uno a la fila y la columna sigue siento la misma
            try {
                return game[currentPosition['row'] - 1][currentPosition['column']] == '*';
            } catch (e) {
                return false;
            }
            break;
        case 'down':
            //Para bajar se le suma uno a la fila y la columna sigue siendo la misma
            try {
                return game[currentPosition['row'] + 1][currentPosition['column']] == '*';
            } catch (e) {
                return false;
            }
            break;
        case 'left':
            //Para ir a la izquierda la fila sigue siendo la misma pero a la columna se le resta
            try {
                return game[currentPosition['row']][currentPosition['column'] - 1] == '*';
            } catch (e) {
                return false;
            }
            break;
        case 'right':
            //Para ir a la derecha la fila sigue siedo la misma pero a la columna se le suma
            try {
                return game[currentPosition['row']][currentPosition['column'] + 1] == '*';
            } catch (e) {
                return false;
            }
            break;
        default:
            return false;
            break;
    }
}

function findMousePosition(game) {
    const current_position = {
        row: undefined,
        column: undefined,
    };

    for (let i = 0; i < game.length; i++) {
        //Por cada fila se intenta buscar la posición del ratón
        const mouseIndex = game[i].indexOf('m');

        //Si se encuentra la posición se reemplaza en el objeto current_position
        if (mouseIndex != -1) {
            current_position['row'] = i;
            current_position['column'] = mouseIndex;
            break;
        }
    }

    return current_position;
}

const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*'],
];

canMouseEat('up', room); // false
canMouseEat('down', room); // true
canMouseEat('right', room); // false
canMouseEat('left', room); // false

const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*'],
];

canMouseEat('up', room2); // false
canMouseEat('down', room2); // false
canMouseEat('right', room2); // true
canMouseEat('left', room2); // false

const room3 = [
    ['m', ' ', ' ', ' '],
    ['*', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*'],
];

canMouseEat('up', room3); // false
canMouseEat('down', room3); // false
canMouseEat('right', room3); // true
canMouseEat('left', room3); // false
