function getCoins(change) {
    const coins = [1, 2, 5, 10, 20, 50];    //Monedas disponibles
    const givenCoins = [0, 0, 0, 0, 0, 0];  //Array de monedas que se darán
    let actual_index = coins.length - 1;   

    while (change != 0) {
        //Cantidad de monedas mínimas en la iteración actual
        let min_actual_coin = Math.floor(change / coins[actual_index]);
        change -= min_actual_coin * coins[actual_index];    //Se actualiza el valor de change
        givenCoins[actual_index] = min_actual_coin; //Se actualiza el array a retornar

        actual_index--;
    }

    return givenCoins;
}

getCoins(51); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
