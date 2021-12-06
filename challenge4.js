function createXmasTree(height) {
    let tree = '';
    let log = '';
    log = addSymbol(log, '_', height - 1) + '#' + addSymbol(log, '_', height - 1);

    for (let i = 1; i <= height; i++) {
        tree = addSymbol(tree, '_', height - i); //Por cada iteración primero se añade el padding izquierdo
        tree = addSymbol(tree, '*', 1 + 2 * (i - 1)); //Se añade la cantidad de asterizcos para cada altura
        tree = addSymbol(tree, '_', height - i); //Por último se añade el padding derecho
        tree += '\n';
    }

    //Finalmente se añade el tronco del árbol
    tree += log + '\n' + log;
    return tree;
}

function addSymbol(tree, symbol, ammount) {
    return (tree += symbol.repeat(ammount));
}

console.log(createXmasTree(7));
