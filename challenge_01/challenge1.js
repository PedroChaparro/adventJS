const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' },
];

function contarOvejas(ovejas) {
    
    //Expresión regular para verificar que contenga la a y la n (sin importar mayúsculas)
    const regEx = new RegExp(/(?=.*a)(?=.*n)/, 'gi'); 

    const sheeps = ovejas.filter((sheep) => {
        return (
            sheep.color == 'rojo' && regEx.test(sheep.name)
            /* sheep.color == 'rojo' && sheep.name.toLowerCase().includes('a') && sheep.name.toLowerCase().includes('n') */
        );
    });

    return sheeps; 
}

console.log(contarOvejas(ovejas)); 