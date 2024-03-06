-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema newspaper
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema newspaper
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `newspaper` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `newspaper` ;

-- -----------------------------------------------------
-- Table `newspaper`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `newspaper`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `newspaper`.`news`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `newspaper`.`news` (
  `idnews` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(200) NOT NULL,
  `image` VARCHAR(200) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idnews`),
  INDEX `fk_news_user_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_news_user`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `newspaper`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
