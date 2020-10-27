// Arquivo de controller
// -Gerar media

const express = require('express');
const { ArduinoData } = require('./newserial')
const router = express.Router();

// As 5 linhas abaixo são usadas para calcular a media
router.get('/', (request, response, next) => {

    let sum = ArduinoData.List.reduce((a, b) => a + b, 0);
    // Esse .tofixed(2) é utilizado para ter apenas 2 numeros depois da virgula
    let average = (sum / ArduinoData.List.length).toFixed(2);
	let sumHour = ArduinoData.ListHour.reduce((a, b) => a + b, 0);
	let averageHour = (sumHour / ArduinoData.ListHour.length).toFixed(2);

    // As 7 linhas abaixo são usadas para 'empacotar' a media em um .json para enviar para o html
    response.json({
        data: ArduinoData.List,
        total: ArduinoData.List.length,
        average: isNaN(average) ? 0 : average,
		dataHour: ArduinoData.ListHour.toFixed,
		totalHour: ArduinoData.ListHour.length,
		averageHour: isNaN(averageHour) ? 0 : averageHour
    });

});

module.exports = router;