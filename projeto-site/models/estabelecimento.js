'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Estabelecimento = sequelize.define('Estabelecimento',{
		idEstabelecimento: {
			field: 'idEstabelecimento',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeEstabelecimento: {
			field: 'nomeEstabelecimento',
			type: DataTypes.STRING,
			allowNull: false
		},
		categoria: {
			field: 'categoria',
			type: DataTypes.STRING,
			allowNull: false
		},
		cnpj: {
			field:'cnpj',
			type:DataTypes.CHAR,
			allowNull: false
        },
        rua: {
			field: 'rua',
			type: DataTypes.STRING,
			allowNull: false
        },
        numero: {
			field:'numero',
			type:DataTypes.INTEGER,
			allowNull: false
        }
	}, 
	{
		tableName: 'estabelecimento', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Estabelecimento;
};
