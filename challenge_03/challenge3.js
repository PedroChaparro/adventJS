const letter = 'bici coche (balón) bici coche peluche'; 

function isValid(letter){

    let open_parenthesis_count = 0; 
    let close_parenthesis_count = 0; 

    open_parenthesis_count = Array.from(letter).filter((word) => word == '(').length; 
    close_parenthesis_count = Array.from(letter).filter((word) => word == ')').length; 

    const parenthesis_condition = ((open_parenthesis_count === close_parenthesis_count) && open_parenthesis_count != 0) ? true : false; 
    const second_condition = letter.replace(/[\[\]{}]/g, '') === letter; //Si contiene alguna llave o corchete, la invalida
    const empty_parenthesis_condition = letter = letter.replace(/\(\s*\)/g, '') == letter;    //Si llegan a ser diferentes es porque habían paréntesis vacíoss

    return parenthesis_condition && second_condition && empty_parenthesis_condition; //Ambas condiciones se deben cumplir para ser true

}

console.log(isValid(letter)); 