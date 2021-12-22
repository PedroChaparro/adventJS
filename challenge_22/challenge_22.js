function countDecorations(bigTree) {
    const countDecoration = (Tree) => {
        const value = Tree.value;

        //Siempre va recursivamente hacia la izquierda o derecha siempre y cuando no sean nulos
        const left = Tree.left == null ? 0 : countDecoration(Tree.left);
        const right = Tree.right == null ? 0 : countDecoration(Tree.right);

        return value + left + right;
    };

    return countDecoration(bigTree);
}

const tree = {
    value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
    left: {
        value: 2, // el nodo izquierdo necesita dos decoraciones
        left: null, // no tiene más ramas
        right: null, // no tiene más ramas
    },
    right: {
        value: 3, // el nodo de la derecha necesita tres decoraciones
        left: null, // no tiene más ramas
        right: null, // no tiene más ramas
    },
};

countDecorations(tree); // 5
