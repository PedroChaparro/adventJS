const almacen = {
    estanteria1: {
        cajon1: {
            producto1: 'coca-cola',
            producto2: 'fanta',
            producto3: 'sprite',
        },
    },
    estanteria2: {
        cajon1: 'vacio',
        cajon2: {
            producto1: 'pantalones',
            producto2: 'camiseta', // <- ¡Está aquí!
        },
    },
};

const otroAlmacen = {
    baul: {
        fondo: {
            objeto: 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando',
        },
    },
};

function contains(store, product) {
    let items = [];

    //Función rcursiva para adentrarse en los contenedores
    const search_items = (container) => {
        //Por cada estructura interior del objeto
        Object.values(container).map((sub_structure) => {
            if (typeof sub_structure == 'object') {
                //Si la estructura es otro objeto, llama nuevamente al a función
                search_items(sub_structure);
            } else {
                //Si la estructura es un string, lo añade al array
                items.push(sub_structure); 
            }
        });
    };

    search_items(store);
    return(items.includes(product)); 
}

console.log(contains(almacen, 'camiseta')); // true
console.log(contains(otroAlmacen, 'gameboy')); // false
