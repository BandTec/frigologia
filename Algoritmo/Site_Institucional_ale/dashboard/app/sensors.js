// Arquivo para criar as functions dos sensores
// -Aumentar e diminuir o range min/max dos sensores



// Function do sensores de temepratura lm35
function lm35(min, max) {
    // Range min/max do sensor
    min = typeof min == 'undefined' ? 0 : min; 
    max = typeof max == 'undefined' ? 7 : max;
    
    // Cria variavel random e diz que ela vai retornar um numero random entre o range
    let random = Math.random() * (max - min) + min;

    // Retorna a var random
    return random
}


// Outros sensores que não vamos usar no momento ---------
function trc5000() {
    min = 0;
    max = 1;
    
    let random = Math.random() * (max - min) + min;
    
    if (random >= 0.7) {
        return 1
    } else if (random <= 0.7) {
        return 0
    }
}

function ldr(){
    min = 0;
    max = 1023

    let random = Math.floor(Math.random()*(max-min+1)+min);

    return random
}

function dht11(options){

    minHumidity = options.minHum;
    maxHumidity = options.maxHum;

    minTemperature = options.minTemp;
    maxTemperature = options.maxTemp;

    if (minHumidity < 20 || maxHumidity > 100) {
        throw new Error('Os valores minímos e máximos para umidade são 20% e 100% respectivamente.')
    }

    if (minTemperature < 0 || maxTemperature > 50) {
        throw new Error('Os valores minímos e máximos para temperatura são 0 e 50 respectivamente.')
    }

    minTemperature = typeof minTemperature == 'undefined' ? 18 : minTemperature;
    maxTemperature = typeof maxTemperature == 'undefined' ? 25 : maxTemperature;

    minHumidity = typeof minHumidity == 'undefined' ? 20 : minHumidity;
    maxHumidity = typeof maxHumidity == 'undefined' ? 80 : maxHumidity;

    let randomHumidity = Math.floor(Math.random()*(maxHumidity-minHumidity+1)+minHumidity);
    
    let randomTemperature = Math.random() * (maxTemperature - minTemperature) + minTemperature;
    
    return [randomHumidity, randomTemperature]
}


module.exports = {lm35, trc5000, ldr, dht11};
