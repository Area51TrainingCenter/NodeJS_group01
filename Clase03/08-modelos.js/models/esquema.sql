DROP DATABASE IF EXISTS peliculas;

CREATE DATABASE  IF NOT EXISTS peliculas;

USE peliculas;

CREATE TABLE IF NOT EXISTS `peliculas`.`pelicula` (
  `idpelicula` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(200) NULL,
  `anno` INT NULL,
  PRIMARY KEY (`idpelicula`));