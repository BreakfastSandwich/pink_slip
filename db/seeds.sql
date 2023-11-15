-- Active: 1699996873746@@127.0.0.1@3306@employee_db
INSERT INTO departments (department_name)
VALUES ("John"),
       ("Jane"),
       ("John"),
       ("Sam"),
       ("Sue"),
       ("Teri"),
       ("Jeff")

INSERT INTO roles (title, department_id, salary)
VALUES ("John", 1, 30),
       ("Jane", 1, 20),
       ("John", 2, 30),
       ("Sam", 2, 50),
       ("Sue", 3, 10),
       ("Teri", 3, 20),
       ("Jeff", 3, 15)


INSERT INTO employees (first_name, last_name,role_id,manager_id)
VALUES ("John", "Smith", 1, Null),
       ("Jane", "Doe", 1, 1),
       ("John", "Doe", 2, 1),
       ("Sam", "Doe", 2, Null),
       ("Sue", "Doe", 3, 4),
       ("Teri", "Doe", 3, 4),
       ("Jeff", "Doe", 3, 4)