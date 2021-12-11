function groupBy(collection, it) {
    let output = {};

    collection.map((item) => {
        //Si el parámetro it es una función, se aplica a cada alemento, si es una propiedad, se accede. 
        let key = typeof it === 'function' ? it(item) : item[it];

        if (output[key] == undefined) { 
            //Si aún no existe un array para esa llave, se crea
            output[key] = [];
        }
        
        //Finalmente se añade en la "key" correspondiente
        output[key].push(item);
    });

    return output;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(['one', 'two', 'three'], 'length'));
console.log(groupBy([{ age: 23 }, { age: 24 }], 'age'));
