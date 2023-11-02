DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employees (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL
  );

   CREATE TABLE roles (
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  department_id INT NOT NULL,
  salary DECIMAL NOT NULL,
 );

  CREATE TABLE managers (
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
   );

 CREATE TABLE departments (
  id INT NOT NULL,
  department_name VARCHAR(255) NOT NULL,
 );