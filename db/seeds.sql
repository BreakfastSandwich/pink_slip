-- Active: 1699996873746@@127.0.0.1@3306@employee_db
INSERT INTO departments (department_name)
VALUES ("sales"),
       ("apparel"),
       ("outdoors"),
       ("customer_service"),
       ("receiving")
       

INSERT INTO roles (title, department_id, salary)
VALUES ("cashier", 1, 30000),
       ("sales_rep", 2, 40000),
       ("sales_rep", 3, 30000),
       ("rep", 4, 50000),
       ("associate", 3, 40000)
       

INSERT INTO employees (first_name, last_name,role_id,manager_id)
VALUES ("John", "Smith", 1, Null),
       ("Jane", "Doe", 1, 1),
       ("John", "Doe", 2, 1),
       ("Sam", "Doe", 2, Null),
       ("Sue", "Doe", 3, 4),
       ("Teri", "Doe", 3, 4),
       ("Jeff", "Doe", 3, 4)