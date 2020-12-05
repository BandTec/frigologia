var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Leitura = require('../models').Leitura;

/* Recuperar as últimas N leituras */
router.get('/ultimas', function(req, res, next) {
	
	// quantas são as últimas leituras que quer? 8 está bom?
	// const limite_linhas = 7;
	// var idsensor = req.params.idsensor;
	// console.log(`Recuperando as últimas ${limite_linhas} leituras`);
	
	// const instrucaoSql = `select idDados, temp, diames, horario, fkSensor from dados where fkSensor = ${idsensor} order by idDados desc`;

	const instrucaoSql = `select distinct idFreezer, idSensor from freezer inner join sensor on fkFreezer = idFreezer order by idFreezer desc;
`;

	sequelize.query(instrucaoSql, {
		model: Leitura,
		mapToModel: true 
	  })
	  .then(resultado => {
			console.log(`Encontrados: ${resultado.length}`);
			res.json(resultado);
	  }).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
	  });
});

router.get('/ultima-leitura/:idfreezer:idsensor', function(req, res, next) {
	
	// quantas são as últimas leituras que quer? 8 está bom?
	// const limite_linhas = 7;
	var idfreezer = req.params.idfreezer;
	var idsensor = req.params.idsensor;
	// console.log(`Recuperando as últimas ${limite_linhas} leituras`);
	
	const instrucaoSql = `select top 1 idFreezer, idSensor, idDados, temp, diames, horario, fkEstabelecimento from freezer inner join sensor on fkFreezer = idFreezer
    inner join dados on fkSensor = idSensor where idFreezer = ${idfreezer} and fkSensor = ${idsensor} order by dados.idDados desc`;

	// const instrucaoSQL = `select * from freezer inner join sensor on fkFreezer = idFreezer
    // inner join dados on fkSensor = idSensor order by dados.temp desc;`;

	sequelize.query(instrucaoSql, {
		model: Leitura,
		mapToModel: true 
	  })
	  .then(resultado => {
			console.log(`Encontrados: ${resultado.length}`);
			res.json(resultado);
	  }).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
	  });
});



// tempo real (último valor de cada leitura)
router.get('/tempo-real', function (req, res, next) {
	
	console.log(`Recuperando a última leitura`);

	const instrucaoSql = `select top 1 temperatura, umidade, FORMAT(momento,'HH:mm:ss') as momento_grafico  
						from leitura order by id desc`;

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});


// estatísticas (max, min, média, mediana, quartis etc)
router.get('/estatisticas', function (req, res, next) {
	
	console.log(`Recuperando as estatísticas atuais`);

	const instrucaoSql = `select 
							max(temperatura) as temp_maxima, 
							min(temperatura) as temp_minima, 
							avg(temperatura) as temp_media,
							max(umidade) as umidade_maxima, 
							min(umidade) as umidade_minima, 
							avg(umidade) as umidade_media 
						from leitura`;

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});


module.exports = router;
