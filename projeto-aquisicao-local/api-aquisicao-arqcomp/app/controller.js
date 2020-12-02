const express = require("express");
const { ArduinoDataTemp } = require("./newserial");
const { ArduinoDataHumidity } = require("./serialHumidity");
const { ArduinoDataSwitch } = require("./serialSwitch");
const { ArduinoDataLuminosity} = require("./serialLuminosidity");
const db = require("./database");
const sensores = require("./sensors");
const router = express.Router();


router.get("/", (request, response, next) => {
  let sum = ArduinoDataTemp.List.reduce((a, b) => a + b, 0);
  let average = (sum / ArduinoDataTemp.List.length).toFixed(2);
  let sumHour = ArduinoDataTemp.ListHour.reduce((a, b) => a + b, 0);
  let averageHour = (sumHour / ArduinoDataTemp.ListHour.length).toFixed(2);

  response.json({
    data: ArduinoDataTemp.List,
    total: ArduinoDataTemp.List.length,
    average: isNaN(average) ? 0 : average,
    dataHour: ArduinoDataTemp.ListHour,
    totalHour: ArduinoDataTemp.ListHour.length,
    averageHour: isNaN(averageHour) ? 0 : averageHour,
  });
});

router.get("/humidity", (request, response, next) => {
  let sum = ArduinoDataHumidity.List.reduce((a, b) => a + b, 0);
  let average = (sum / ArduinoDataHumidity.List.length).toFixed(2);
  let sumHour = ArduinoDataHumidity.ListHour.reduce((a, b) => a + b, 0);
  let averageHour = (sumHour / ArduinoDataHumidity.ListHour.length).toFixed(2);

  response.json({
    data: ArduinoDataHumidity.List,
    total: ArduinoDataHumidity.List.length,
    average: isNaN(average) ? 0 : average,
    dataHour: ArduinoDataHumidity.ListHour,
    totalHour: ArduinoDataHumidity.ListHour.length,
    averageHour: isNaN(averageHour) ? 0 : averageHour,
  });
});

router.get("/switch", (request, response, next) => {
  let sum = ArduinoDataSwitch.List.reduce((a, b) => a + b, 0);
  let average = (sum / ArduinoDataSwitch.List.length).toFixed(2);
  let sumHour = ArduinoDataSwitch.ListHour.reduce((a, b) => a + b, 0);
  let averageHour = (sumHour / ArduinoDataSwitch.ListHour.length).toFixed(2);

  response.json({
    data: ArduinoDataSwitch.List,
    total: ArduinoDataSwitch.List.length,
    average: isNaN(average) ? 0 : average,
    dataHour: ArduinoDataSwitch.ListHour,
    totalHour: ArduinoDataSwitch.ListHour.length,
    averageHour: isNaN(averageHour) ? 0 : averageHour,
  });
});

router.get("/luminosity", (request, response, next) => {
  let sum = ArduinoDataLuminosity.List.reduce((a, b) => a + b, 0);
  let average = (sum / ArduinoDataLuminosity.List.length).toFixed(2);
  let sumHour = ArduinoDataLuminosity.ListHour.reduce((a, b) => a + b, 0);
  let averageHour = (sumHour / ArduinoDataLuminosity.ListHour.length).toFixed(
    2
  );

  response.json({
    data: ArduinoDataLuminosity.List,
    total: ArduinoDataLuminosity.List.length,
    average: isNaN(average) ? 0 : average,
    dataHour: ArduinoDataLuminosity.ListHour,
    totalHour: ArduinoDataLuminosity.ListHour.length,
    averageHour: isNaN(averageHour) ? 0 : averageHour,
  });

});

router.get("/sendData", (request, response) => {
const temperature = ArduinoDataTemp.List[ArduinoDataTemp.List.length - 1];
const Humidity = ArduinoDataHumidity.List[ArduinoDataHumidity.List.length - 1];
//luminosidade = ArduinoDataLuminosity.List[ArduinoDataLuminosity.List.length -1]



db.conectar()
    .then(() => {
        var agora = new Date();
        var hora = agora.getHours();
        var minuto = agora.getMinutes();
        var segundo = agora.getSeconds();
        var momento = `${hora>9?'':'0'}${hora}:${minuto>9?'':'0'}${minuto}:${segundo>9?'':'0'}${segundo}`;
    
  
        var dia = agora.getDate();

        var mes = agora.getMonth() + 1;

        var diaMes = `${dia}/${mes}`;
        for(fk=1;fk<=5;fk++){
              let random = sensores.lm35().toFixed(2);
                const sql = `
                INSERT into dados (temp, diames, horario, fkSensor)
                values ('${random}', '${diaMes}', '${momento}','${fk}');`;
            return db.sql.query(sql).then(()=>{
                console.log("Registro inserido com sucesso! \n" + fk);
            });;
            
          }
        }
      )
    .catch((erro) => {
    console.error(`Erro ao tentar registrar aquisição na base: ${erro}`);
    })


response.sendStatus(200);
});



module.exports = router;
