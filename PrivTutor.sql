CREATE DATABASE PrivTutor_db
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


CREATE TABLE Student
(
    student_id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    acc_password VARCHAR(15),

    full_name VARCHAR(100),
    date_of_birth DATE,
    email VARCHAR(35) UNIQUE,

    balance INT
);

CREATE TABLE Teacher
(
    teacher_id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    acc_password VARCHAR(15),

    full_name VARCHAR(100),
    date_of_birth DATE,
    email VARCHAR(35) UNIQUE,

    degree VARCHAR(20),
    phone VARCHAR(10)
);

CREATE TABLE Course
(
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR(40),
    price INT,
    rating NUMERIC(2,1),
    duration INT,
    release_date DATE,
    -- foreign key --
    teacher_id INT REFERENCES Teacher(teacher_id)
);

CREATE TABLE Lesson
(
    lesson_id SERIAL PRIMARY KEY,
    lesson_name VARCHAR(40),
    duration INT,
    link_lesson TEXT,
    course_id INT REFERENCES Course(course_id)
);

CREATE TABLE Course_Student
(
    course_id INT REFERENCES Course(course_id),
    student_id INT REFERENCES Student(student_id),
    PRIMARY KEY (course_id, student_id)
);

INSERT INTO Student (username, acc_password, full_name, date_of_birth, email, balance) 
VALUES ('Ricon', 'A7@siuu', 'Tran Nam Do', '2005-08-29','ridocon23@gmail.com',550000),
('KingStone', 'gatcha24/7', 'Ly Nhat Nam', '2003-11-15','nhatnam15@gmail.com',849000),
('Surinxx', 'Thao@240802', 'Nguyen Thu Thao', '2002-10-26', 'thuthao2408@yahoo.com',235000);

INSERT INTO Teacher (username, acc_password, full_name, date_of_birth, email, degree, phone)
VALUES ('litlezeroos', 'AnBaToCom92', 'Tran Quang Huy', '1983-01-31','tqhuy3101@gmail.com', 'Expert in software', '0902921864'),
('misterRen', 'Ren123', 'Nguyen Van Trong', '1994-04-04','ngairen94@gmail.com', 'LOL coaching', '0903259037'),
('Thoconbebong', 'Stella@1208', 'Tran Mai Thanh Thuy', '1989-04-04','mtthuy89@gmail.com', 'PHD. in Math', '0932958648');

INSERT INTO Course (course_name, price, rating, duration, release_date, teacher_id)
VALUES ('Introduction to programming', '120000', '4.5', 48, '2022-12-20', 1),
('OOP programing', '120000', '4.5', 24, '2022-11-01', 1),
('Introduction to League of Legend', '52000', '4.9', 20, '2022-05-14', 2),
('How to handle with laning phase', '50000', '4.9', 24, '2022-05-14', 2),
('Discrete Mathematics', '254000', '4.8', 50, '2022-07-30', 3),
('Calculus I', '300000', '4.4', 50, '2022-01-03', 3);


INSERT INTO Lesson (lesson_name, duration, link_lesson, course_id)
VALUES ('Introduction', 7, 'https://www.youtube.com/watch?v=I_rY3JzZlJg&list=PLaQIMoWjnWPrerMILQlmhhrGxfxomJqXl', 1),
('Create Project Solution on VS', 9, 'https://www.youtube.com/watch?v=5Bzr4MPM2cM&list=PLaQIMoWjnWPrerMILQlmhhrGxfxomJqXl&index=6', 1),
('Input and Output', 19, 'https://www.youtube.com/watch?v=ofrB8_zEAC4&list=PLaQIMoWjnWPrerMILQlmhhrGxfxomJqXl&index=12', 1),
('Array', 13, 'https://www.youtube.com/watch?v=cgKiUF98fLo', 1),
('Array Practice', 13, 'https://www.youtube.com/watch?v=b8-F1w25sVo', 1),
('Condition Sentence', 10, 'https://youtu.be/QVfTsIEt5G4', 1),

('Intro to OOP', 6, 'https://youtu.be/DWvYJpZnat8', 2),
('Class', 10, 'https://youtu.be/qmd2iXD1v10', 2),
('Object', 8, 'https://youtu.be/ErGHKd6oxEQ', 2),
('Property and Method', 11, 'https://youtu.be/MgrFoQYHPmk', 2),
('Getter and Setter', 13, 'https://youtu.be/M46igUY2mmI', 2),
('Constructor', 9, 'https://youtu.be/Bm0C_ieZ6A4', 2),
('Inheritance', 7, 'https://youtu.be/bsTG50k3b3g', 2),
('Inheritance with code', 9, 'https://youtu.be/uXalSKIxS6Y', 2),

('League guide for beginners', 25, 'https://youtu.be/u9JdENUoGik', 3),
('Beginners guide for ADC', 14, 'https://youtu.be/Ci-LYjHBk4U', 3),
('Beginners guide for Mid lane', 15, 'https://youtu.be/zGKL1KXNInI', 3),
('Beginners guide for Jungler', 20, 'https://youtu.be/ykpyhtOYIJQ', 3),
('Beginners guide for Top lane', 11, 'https://youtu.be/mWirtlXlb2w', 3),
('Beginners guide for SP', 12, 'https://youtu.be/I9oTNMjAMh8', 3),

('Play SP like CoreJJ part1', 6, 'https://youtu.be/v-ec5astbE0', 4),
('Mindset and Roaming', 8, 'https://youtu.be/_U61tI1E9e0', 4),
('Vision control', 13, 'https://youtu.be/6cXqzH2vMH8', 4),
('Farming tips', 10, 'https://youtu.be/jOSyf1NQspo', 4),
('Wave Control Guide', 16, 'https://youtu.be/p9ZUxaCpvjc', 4),
('Trading Guide', 15, 'https://youtu.be/L7qPSGmS9ik', 4),
('Macro Guide', 15, 'https://youtu.be/H9OB_aXv3ts', 4),
('Jungler Macro and Ganking', 16, 'https://youtu.be/TFFz8OILKPM',4),


('Set theory', 17, 'https://www.youtube.com/watch?v=tyDKR4FG3Yw&list=PLDDGPdw7e6Ag1EIznZ-m-qXu4XX3A0cIz',5),
('Cartesian products on sets', 11, 'https://youtu.be/NnEkVooAsxk',5),
('Subset and power set', 15, 'https://youtu.be/H5D6EAezsXQ',5),
('Propositional Logic', 11, 'https://youtu.be/itrXYg41-V0',5),
('Truth Table', 11, 'https://youtu.be/UiGu57JzLkE',5),
('Logical Laws', 15, 'https://youtu.be/eihhu72YdpQ',5),

('Intro to limit', 16, 'https://youtu.be/PaBnLWc_17g',6),
('Limit Laws', 12, 'https://youtu.be/0ByO2ToZ7AU',6),
('Finding Limit', 16, 'https://youtu.be/CSALbevEMfs',6),
('Continuity', 15, 'https://youtu.be/mviEiFLm1mg',6),
('Continuity Law', 14, 'https://youtu.be/V1mRyKQcaRo',6),
('Definition of Derivative', 6, 'https://youtu.be/qL2vr0Gi6e8',6);


INSERT INTO Course_Student (student_id, course_id)
VALUES(1,3), (1,4), 
(2,1), (2,5), (2,4),
(3,2), (3,6), (3,4), (3,5);



SELECT * FROM Student;
SELECT * FROM Course;
SELECT * FROM Teacher;
SELECT * FROM Lesson;
SELECT * FROM Course_Student;


DROP TABLE Student
DROP TABLE Teacher
DROP TABLE Course
DROP TABLE Lesson
DROP TABLE Course_Student