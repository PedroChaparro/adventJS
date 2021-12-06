const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' },
];

function contarOvejas(ovejas) {
    const sheeps = ovejas.filter((sheep) => {
        return (
            sheep.color == 'rojo' && sheep.name.toLowerCase().includes('a') && sheep.name.toLowerCase().includes('n')
        );
    });

    return sheeps; 
}

