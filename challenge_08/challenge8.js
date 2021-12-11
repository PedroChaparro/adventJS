function maxProfit(prices) {
    //Si al ordenar el Array y revertirlo es igual al que se ingresó es porque todos los precios eran descendientes
    const temp_array = [...prices];
    temp_array.sort((a, b) => (a > b ? 1 : -1)).reverse();

    if (JSON.stringify(prices) == JSON.stringify(temp_array)) {
        return -1;
    } else {
        //En caso de que la condición anterior no se cumpliera, debe haber alguna posibilidad de ganancia
        let purchaseIndex = 0;
        let soldIndex = purchaseIndex + 1;

        // ### SOLUCIÓN ABIERTA A MEJORAS (YA QUE SE USA UN MÉTODO BURBUJA, PERO GARANTIZA QUE SÍ O SÍ SE ENCONTRARÁ EL MEJOR PROFIT)
        for (let i = 0; i < prices.length; i++) {
            //Iteración para buscar un mejor precio de compra
            for (let j = i + 1; j < prices.length; j++) {
                //Iteración para buscar un mejor precio de venta

                let previousProfit = prices[soldIndex] - prices[purchaseIndex];
                let newProfit = prices[j] - prices[i];

                if (newProfit > previousProfit) {
                    //Si se consigue un mejor profit, se reemplazan los valores
                    purchaseIndex = i;
                    soldIndex = j;
                }
            }
        }

        return prices[soldIndex] - prices[purchaseIndex];
    }
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
console.log(maxProfit(pricesBtc));

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
console.log(maxProfit(pricesEth));

const pricesDoge = [18, 15, 12, 11, 9, 7];
console.log(maxProfit(pricesDoge));

const pricesAda = [3, 3, 3, 3, 3];
console.log(maxProfit(pricesAda));
