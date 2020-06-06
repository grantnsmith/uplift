-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'apassword';
-- flush privileges;

DROP DATABASE IF EXISTS trackerDB;
CREATE database trackerDB;

USE trackerDB;

CREATE TABLE employee (
   id INT AUTO_INCREMENT NOT NULL,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(30) NOT NULL,
   role_id INT(10) NULL,
   manager_id INT(10) NULL,
   PRIMARY KEY (id)
);
 
CREATE TABLE roles (
   id INT AUTO_INCREMENT NOT NULL,
   title VARCHAR(30) NOT NULL,
   salary DECIMAL(10, 5) NULL,
   department_id INT(10),
   PRIMARY KEY (id)
);


CREATE TABLE department (
   id INT AUTO_INCREMENT NOT NULL,
   namesOf VARCHAR(30) NOT NULL,
   PRIMARY KEY (id)
);



-- SELECT * FROM employee;
-- SELECT * FROM department;
-- SELECT * FROM roles;



