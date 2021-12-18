function countPackages(carriers, carrierID) {

    let accumulated = 0;

    //Empleados que ya se contaron
    const already_counted = [];

    //Función recursiva para tomar los paquetes de un empleado y sus subordinados
    const get_packages_ammount = (carrier_name) => {
        //Si el empleado aún no se ha contado
        if (already_counted.indexOf(carrier_name) == -1) {
            //Encuentra el tarnsportista
            const current_carrier = carriers.filter((carrier) => carrier[0] == carrier_name);

            //Suma los paquetes del transportista y lo agrega a la lista already_counted
            accumulated += current_carrier[0][1];
            already_counted.push(current_carrier[0][1]);

            //Por cada subordinado, ejecuta la función recursivamente
            current_carrier[0][2].map((subordinate) => {
                get_packages_ammount(subordinate);
            });
        }
    };

    get_packages_ammount(carrierID);

    return accumulated;
}

const carriers = [
    ['dapelu', 5, ['midu', 'jelowing']],
    ['midu', 2, []],
    ['jelowing', 2, []],
];

countPackages(carriers, 'dapelu');

const carriers2 = [
    ['lolivier', 8, ['camila', 'jesuspoleo']],
    ['camila', 5, ['sergiomartinez', 'conchaasensio']],
    ['jesuspoleo', 4, []],
    ['sergiomartinez', 4, []],
    ['conchaasensio', 3, ['facundocapua', 'faviola']],
    ['facundocapua', 2, []],
    ['faviola', 1, []],
];

countPackages(carriers2, 'camila');
