function shouldBuyFidelity(times) {
    // ¡No olvides compartir tu solución en redes! 
    const calc_potencia = (times)=>{    //Función para calcular la sumatoria de las potencias de 0.75
        let acumulado = 0; 
        for(let i=1; i<=times; i++){
            acumulado+=Math.pow(0.75, i);
        }
        return acumulado; 
    }

    const normal_price = 12*times;
    const fidelity_card_price = 250 + (12) * calc_potencia(times); 

    return fidelity_card_price < normal_price;
}
 
console.log(shouldBuyFidelity(1)); 
console.log(shouldBuyFidelity(100)); 