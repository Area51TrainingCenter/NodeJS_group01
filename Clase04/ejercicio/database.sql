DROP DATABASE IF EXISTS historias;

CREATE DATABASE  IF NOT EXISTS historias;

USE historias;

CREATE TABLE IF NOT EXISTS `historias`.`historia` (
  `idHistoria` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nHistoria` int(11) DEFAULT NULL,
  `cContratante` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cCodigoAutorizacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cCodigoPoliza` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cNombresPaciente` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cApellidoPaternoPaciente` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cApellidoMaternoPaciente` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cTelefono` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nDNI` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `idMedico` int(11) DEFAULT NULL,
  `idEnfermero` int(11) DEFAULT NULL,
  `cTratamiento` longtext COLLATE utf8_unicode_ci,
  `cDireccion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cSintomas` longtext COLLATE utf8_unicode_ci,
  `cObservaciones` longtext COLLATE utf8_unicode_ci,
  PRIMARY KEY (`idHistoria`),
  UNIQUE KEY `nHistoria` (`nHistoria`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `historias`.`medico` (
  `idMedico` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cNombres` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cApellidoPaterno` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cApellidoMaterno` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cDNI` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nCMP` int(11) DEFAULT NULL,
  `nActivo` int(11) DEFAULT NULL,
  PRIMARY KEY (`idMedico`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `historias`.`enfermero` (
  `idEnfermero` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cNombres` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cApellidoPaterno` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cApellidoMaterno` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cDNI` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nActivo` int(11) DEFAULT NULL,
  PRIMARY KEY (`idEnfermero`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `historias`.`usuario` (
  `idUsuario` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cNombreUsuario` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cContrasenaUsuario` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cNombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cApellido` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nActivo` int(11) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `cNombreUsuario` (`cNombreUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

