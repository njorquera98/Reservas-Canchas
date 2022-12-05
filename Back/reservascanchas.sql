-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-12-2022 a las 16:10:39
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `reservascanchas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cancha`
--

CREATE TABLE `cancha` (
  `cancha_ID` int(5) NOT NULL,
  `num_cancha` int(5) NOT NULL,
  `tipo_cancha` varchar(50) NOT NULL,
  `capacidad` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cancha`
--

INSERT INTO `cancha` (`cancha_ID`, `num_cancha`, `tipo_cancha`, `capacidad`) VALUES
(1, 1, 'Tenis Arcilla', 4),
(2, 2, 'Tenis Arcilla', 4),
(3, 3, 'Tenis Arcilla', 4),
(4, 4, 'Tenis Arcilla', 4),
(5, 5, 'Tenis Arcilla', 4),
(6, 6, 'Tenis Arcilla', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `reserva_ID` int(11) NOT NULL,
  `user_ID_FK` int(11) NOT NULL,
  `cancha_ID_FK` int(11) NOT NULL,
  `hora_entrada` datetime NOT NULL,
  `hora_salida` datetime NOT NULL,
  `fecha` date NOT NULL,
  `participantes` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reserva`
--

INSERT INTO `reserva` (`reserva_ID`, `user_ID_FK`, `cancha_ID_FK`, `hora_entrada`, `hora_salida`, `fecha`, `participantes`) VALUES
(5, 11, 1, '2022-12-05 08:00:00', '2022-12-05 09:30:00', '2022-12-05', 'Daniel Espinoza\nMatias Sandoval'),
(6, 11, 2, '2022-12-06 08:00:00', '2022-12-06 09:30:00', '2022-12-05', 'Fernando\nDaniel'),
(7, 11, 3, '2022-12-05 09:40:00', '2022-12-05 11:10:00', '2022-12-05', 'Daniel Espinoza\nNicolas Jorquera'),
(9, 11, 5, '2022-12-07 09:40:00', '2022-12-07 11:10:00', '2022-12-05', 'Matias\nLuis'),
(10, 12, 3, '2022-12-07 08:00:00', '2022-12-07 09:30:00', '2022-12-05', 'Fernando\nMatias'),
(11, 12, 6, '2022-12-10 19:30:00', '2022-12-10 21:00:00', '2022-12-05', 'Dani\nFernando');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `user_ID` int(5) NOT NULL,
  `rol` varchar(20) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `rut` int(10) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `carrera` varchar(100) NOT NULL,
  `telefono` int(9) NOT NULL,
  `contrasena` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`user_ID`, `rol`, `nombre`, `apellido`, `rut`, `correo`, `carrera`, `telefono`, `contrasena`) VALUES
(11, 'administrador', 'Daniel', 'Espinoza', 199771655, 'danielespinoza3678@gmail.com', 'Ingenieria civil en computacion e informatica', 964251848, '123123'),
(12, 'alumno', 'Fernando', 'Fernandez', 19977165, 'dani@gmail.com', 'Ingenieria industrial', 64251848, '123123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cancha`
--
ALTER TABLE `cancha`
  ADD PRIMARY KEY (`cancha_ID`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`reserva_ID`,`user_ID_FK`,`cancha_ID_FK`),
  ADD KEY `reserva_ibfk_1` (`user_ID_FK`),
  ADD KEY `reserva_ibfk_2` (`cancha_ID_FK`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`user_ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reserva`
--
ALTER TABLE `reserva`
  MODIFY `reserva_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `user_ID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
