function checkIsSameTree(treeA, treeB) {
    //Si la suma de los árboles es la misma, son iguales 
    return getTreeTotalValue(treeA) === getTreeTotalValue(treeB);
}

//Función para obtener el valor total del árbol
function getTreeTotalValue(tree) {
    //Si hay un lado izquierdo // derecho, obtiene su valor recursivamente, de lo contrario, retorna 0
    const leftSideValue = tree.left === null ? 0 : getTreeTotalValue(tree.left);
    const rightSideValue = tree.right === null ? 0 : getTreeTotalValue(tree.right);

    //El valor del cada árbol y sub-arbol es el value y su izquierda y derecha
    return tree.value + leftSideValue + rightSideValue;
}

const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null },
};

checkIsSameTree(tree, tree); // true

const tree2 = {
    value: 1,
    left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
};

checkIsSameTree(tree, tree2); // false
checkIsSameTree(tree2, tree2); // true
