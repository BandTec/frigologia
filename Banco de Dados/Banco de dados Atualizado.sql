create database Frigologia;
use Frigologia;

create table tbDados (
idDados int primary key,
temp varchar(5),
dia date,
hora time,
fkSensor int,
foreign key (fkSensor) references tbSensor (idSensor)
);

insert into tbDados values (1,'0°C','2020-10-01','20:00:00',1),
						   (2,'6°C','2020-05-05','05:30:00',2),
                           (3,'-1°C','2020-09-08','01:00:00',3),
                           (4,'4°C','2020-10-02','15:00:00',4),
                           (5,'2°C','2020-02-15','06:00:00',5),
                           (6,'5°C','2020-09-04','19:30:00',6),
                           (7,'0°C','2020-08-08','20:30:00',7),
                           (8,'1°C','2020-05-09','07:00:00',8),
                           (9,'4°C','2020-04-08','21:00:00',9),
                           (10,'-3°C','2020-10-24','23:30:00',10);
                           

create table tbSensor (
idSensor int primary key,
fkFreezer int,
foreign key (fkFreezer) references tbFreezer (idFreezer)
);

insert into tbSensor values (1,1),
							(2,2),
							(3,3),
                            (4,4),
                            (5,5),
                            (6,6),
							(7,7),
                            (8,8),
                            (9,9),
                            (10,10);

create table tbFreezer(
idFreezer int primary key,
tipo varchar(10),
tamanho varchar(10),
fkEstabelecimentoFreezer int,
foreign key (fkEstabelecimentoFreezer) references tbEstabelecimento (idEstabelecimento)
);

insert into tbFreezer values (1, 'horizontal', 100, 4),
						     (2, 'vertical', 70, 5),
					         (3, 'vertical', 50, 7),
						     (4, 'horizontal', 300, 1),
						     (5, 'horizontal', 200, 4),
                             (6,'vertical',200,2),
                             (7,'horizontal',50,3),
                             (8,'vertical',200,4),
                             (9,'vertical',100,7),
                             (10,'horizontal',150,6);


create table tbEstabelecimento(
idEstabelecimento int primary key,
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

insert into tbEstabelecimento values (1, 'Extra', 'Supermercado', '04.039.570/0001-46', 'R. Samuel Klabin','193','Vila Leopoldina','São Paulo','05077-015','11 98765-4321'),
								     (2, 'Carrefour', 'Supermercado', '75.666.798/0001-04', 'Shopping Tamboré Av. Piracema', '669', 'Tamboré', 'Barueri', '06460-030','11 91234-5678'),
                                     (3, 'Wallmart', 'Supermercado', '54.866.381/0001-15', 'Alameda Araguaia', '2751', 'Tamboré', 'Barueri', '06455-906','11 91324-5678'),
                                     (4, 'Açougue Swift', 'Açougue', '28.172.627/0001-49', 'Rua Orfanato ','62', 'Vila Prudente', 'São Paulo' ,'03131-010','11 91333-1244' ),
                                     (5, 'Açougue Tennese', 'Açougue', '48.375.273/0001-19', 'Estr. das Lágrimas', '1396', 'Cidade Nova Heliópolis', 'São Paulo', '04244-000','11 91895-4568'),
                                     (6, 'Pão de açucar', 'Supermercado', '10.122.258/0001-28','Rua Juventus', '337', 'Parque da Mooca', 'São Paulo',  '03124-020','11 96385-7421'),
                                     (7, 'Açougue Mencarini', 'Açougue', '33.322.993/0001-99','Av Marginal Direita do Tietê', '500', 'Vila Jaguara','São Paulo','05118-100','11 95124-9857');

create table tbUsuario(
idUsuario int primary key,
email varchar(40),
senha varchar(40),
fkEstabelecimentoUsuario int,
foreign key (fkEstabelecimentoUsuario) references tbEstabelecimento (idEstabelecimento)
);
 
insert into tbUsuario values (1, 'renato.paulino@bandtec.com.br', 'qualquercoisa', 1),
						     (2, 'lucas.ferreira@bandtec.com.br', 'qualquercoisa1', 2),
                             (3, 'dennis.barbosa@bandtec.com.br', 'qualquercoisa2', 3),
                             (4, 'jose.fabiano@bandtec.com.br', 'qualquercoisa3', 4),
						     (5, 'felipe.kling@bandtec.com.br', 'qualquercoisa4', 4),
                             (6, 'david.rafael@bandtec.com.br', 'qualquercoisa5', 4),
                             (7, 'gabriel.asilva@bandtec.com.br', 'qualquercoisa6', 4),
                             (8, 'eduardo.verri@bandtec.com.br', 'qualquercoisa7',5),
                             (9,'celia.taniwaki@bandtec.com.br','qualquercoisa8',5),
                             (10,'thiago.bonacelli@bandtec.com.br','qualquercoisa9',6),
                             (11,'fernando.brandão@bandtec.com.br','qualquercoisa10',6),
                             (12,'rock.Balboa@bandtec.com.br', 'qualquercoisa11', 7),
                             (13,'luis.inacio@bandtec.com.br','qualquercoisa12',7);

select * from estabelecimento;
select * from freezer;
select * from usuario;
drop database Frigologia;