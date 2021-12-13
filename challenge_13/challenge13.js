function wrapGifts(gifts) {
    let output = [];

    gifts.length == 0
        ? (output = [])
        : (output = ((gifts) => {

            const tops = '*'.repeat(gifts[0].length +2); //"Tapas de la caja"

            const wraped = [tops]; //Se añade una taña al inicio
            gifts.map((items) => {
                items = '*' + items + '*';
                wraped.push(items); //A los objetos se les añade un asterisco al inicio y al final
            });
            wraped.push(tops);  //Se añade una tapa al final

            return wraped;
        })(gifts));

    return output;
}

console.table(wrapGifts([]));
console.table(wrapGifts(['📷', '⚽️']));
console.table(wrapGifts(['🏈🎸', '🎮🧸']));
console.table(wrapGifts(['📷']));
