create database floreria;
use floreria;

create table flores(
id int primary key not null auto_increment,
nombre varchar (25) not null,
tipo varchar (10) not null,
cantidad_disponible int not null,
precio int not null
);

create table catalogo(
id int primary key not null auto_increment,
id_flor int not null,
FOREIGN KEY (id_flor) REFERENCES flores(id) on delete cascade
);

create table vendedor(
id int not null primary key auto_increment,
nombre varchar (50) not null,
apellidos varchar (100) not null,
password varchar (20) not null,
telefono varchar (10) not null
);

create table comprador(
id int not null primary key auto_increment,
nombre varchar (50) not null,
apellido varchar (100) not null,
password varchar (20) not null,
telefono varchar (10) not null
);

create table pedidos(
id int primary key not null  auto_increment,
id_comprador int not null,
id_flor int not null,
cantidad_pedida int not null,
FOREIGN KEY (id_comprador) REFERENCES comprador(id) on delete cascade,
FOREIGN KEY (id_flor) REFERENCES flores(id) on delete cascade
);

drop table catalogo;
drop table vendedor;
drop table comprador;
drop table pedidos;
drop table flores;

insert into vendedor (nombre, apellidos, password, telefono) values ('Jesus', 'Velazquez', 'H0l4123', 9614481328);