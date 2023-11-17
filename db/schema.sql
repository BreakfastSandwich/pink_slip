-- Active: 1699996873746@@127.0.0.1@3306
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
  ID INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(255) NOT NULL,
   PRIMARY KEY (id)
 );

 CREATE TABLE roles (
  ID INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  department_ID INT NOT NULL,
  salary DECIMAL NOT NULL,  
  Foreign Key (department_ID) REFERENCES departments(ID),
PRIMARY KEY (id)
 );

CREATE TABLE employees (
  ID  INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
   PRIMARY KEY (id),
  Foreign Key (role_id) REFERENCES roles(ID)
 
  );

  


 