create database Frigologia;
use Frigologia;

create table tbEstabelecimento(
idEstabelecimento int primary key auto_increment,
nomeEstabelecimento varchar(40),
categoria varchar(40),
cnpj char (18),
rua varchar(50),
numero varchar(5),
bairro varchar (50),
municipio varchar(30),
CEP char(9),
telefone char(13)
);
insert into tbEstabelecimento values (1,'Extra', 'Supermercado', '04.039.570/0001-46', 'R. Samuel Klabin','193','Vila Leopoldina','São Paulo',
'05077-015','11 98765-4321');

create table tbUsuario(
idUsuario int primary key auto_increment,
email varchar(40),
senha varchar(40),
fkEstabelecimentoUsuario int,
foreign key (fkEstabelecimentoUsuario) references tbEstabelecimento (idEstabelecimento)
);
  
insert into tbUsuario values (1,'renato.paulino@bandtec.com.br', 'qualquercoisa', 1);

create table tbFreezer(
idFreezer int primary key auto_increment,
tipo varchar(10),
tamanho varchar(10),
fkEstabelecimentoFreezer int,
foreign key (fkEstabelecimentoFreezer) references tbEstabelecimento (idEstabelecimento)
);
insert into tbFreezer values (null,'horizontal', 100, 1);
insert into tbFreezer values (null,'horizontal', 120, 1);


create table tbSensor (
idSensor int primary key auto_increment,
fkFreezer int,
foreign key (fkFreezer) references tbFreezer (idFreezer)
);

insert into tbSensor values (null,1);
insert into tbSensor values (null,2); 
 
create table tbDados (
idDados int primary key auto_increment,
temp double(10,2),
dia char(4),
hora char(8),
fkSensor int,
foreign key (fkSensor) references tbSensor (idSensor)
);








				
 
select * from estabelecimento;
select * from freezer;
select * from usuario;
drop database Frigologia;