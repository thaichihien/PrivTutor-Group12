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
    student_id VARCHAR PRIMARY KEY,

    acc_password VARCHAR,
    full_name VARCHAR(100),
    date_of_birth DATE,
    email VARCHAR(35) UNIQUE,
    balance INT
);
CREATE TABLE Teacher
(
    teacher_id VARCHAR PRIMARY KEY,

    acc_password VARCHAR,
    full_name VARCHAR(100),
    date_of_birth DATE,
    email VARCHAR(35) UNIQUE,
    degree VARCHAR(20),
    phone VARCHAR(10)
);
CREATE TABLE Course
(
    course_id VARCHAR PRIMARY KEY,

    course_name VARCHAR,
    price INT,
    rating NUMERIC(2,1),
    duration INT,
    release_date DATE,
    logoCourseURL TEXT,
	description TEXT,
    -- foreign key --
    teacher_id VARCHAR REFERENCES Teacher(teacher_id)
);
CREATE TABLE Lesson
(
    lesson_id SERIAL PRIMARY KEY,
    lesson_name VARCHAR,
    duration INT,
    link_lesson TEXT,
    course_id VARCHAR REFERENCES Course(course_id)
);
CREATE TABLE Course_Student
(
    course_id VARCHAR REFERENCES Course(course_id),
    student_id VARCHAR REFERENCES Student(student_id),
	rating NUMERIC(2,1),
    comment TEXT,
    progress INT,
    PRIMARY KEY (course_id, student_id)
);

INSERT INTO Student (student_id, acc_password, full_name, date_of_birth, email, balance) VALUES 
('ST1', 'A7siuu', 'Tran Nam Do', '2005-08-29','ridocon23@gmail.com',550000),
('ST2', 'gatcha24/7', 'Ly Nhat Nam', '2003-11-15','nhatnam15@gmail.com',849000),
('ST3', 'Thao240802', 'Nguyen Thu Thao', '2002-10-26', 'thuthao2408@yahoo.com',235000);

INSERT INTO Teacher (teacher_id, acc_password, full_name, date_of_birth, email, degree, phone) VALUES 
('TT1', 'AnBaToCom92', 'Tran Quang Huy', '1983-01-31','tqhuy3101@gmail.com', 'Expert in software', '0902921864'),
('TT2', 'Ren123', 'Nguyen Van Trong', '1994-04-04','ngairen94@gmail.com', 'LOL coaching', '0903259037'),
('TT3', 'Stella1208', 'Tran Mai Thanh Thuy', '1989-04-04','mtthuy89@gmail.com', 'PHD. in Math', '0932958648');

INSERT INTO Course (course_id, course_name, price, rating, duration, release_date, logoCourseURL, description, teacher_id) VALUES 
('PG22','Introduction to programming C++', '120000', '4.5', 48, '2022-12-20', '/img/Introduction to Programming C++.png', 
 'Learn to program with one of the most powerful programming languages that exists today with the modern C++','TT1'),
('OP22','OOP programing', '120000', '4.5', 24, '2022-11-01', '/img/Object-Oriented-Programming.png',
 'Learn Java In This Course And Master The Art Of OOP Programming And Patterns','TT1'),
('LOL1','Introduction to League of Legend', '52000', '4.9', 20, '2022-05-14', '/img/Intro to LOL.jpg', 
 'Most basic course for League newbies with detailed explainations about game mechanics and champion power spikes','TT2'),
('LOL2','Laning phase like pros', '50000', '4.9', 24, '2022-05-14', '/img/Laning.png', 
 'Learn how to play League like a professional players and handle well with every matchup in all lanes in games','TT2'),
('DCM1','Discrete Mathematics', '254000', '4.8', 50, '2022-07-30', '/img/Discrete Math.jpg', 
'Student can master the logic rules, set theory, permutation and combination rules in counting objects','TT3'),
('CAL1','Calculus I', '300000', '4.4', 50, '2022-01-03', '/img/Calculus I.jpg',
'Students learn how to calculate differentiation and integration, also dealing with problems where variables change with time.','TT3');

INSERT INTO Lesson (lesson_name, duration, link_lesson, course_id)
VALUES ('Introduction', 7, 'https://www.youtube.com/watch?v=I_rY3JzZlJg&list=PLaQIMoWjnWPrerMILQlmhhrGxfxomJqXl', 'PG22'),
('Create Project Solution on VS', 9, 'https://www.youtube.com/watch?v=5Bzr4MPM2cM&list=PLaQIMoWjnWPrerMILQlmhhrGxfxomJqXl&index=6', 'PG22'),
('Input and Output', 19, 'https://www.youtube.com/watch?v=ofrB8_zEAC4&list=PLaQIMoWjnWPrerMILQlmhhrGxfxomJqXl&index=12', 'PG22'),
('Array', 13, 'https://www.youtube.com/watch?v=cgKiUF98fLo', 'PG22'),
('Array Practice', 13, 'https://www.youtube.com/watch?v=b8-F1w25sVo', 'PG22'),
('Condition Sentence', 10, 'https://youtu.be/QVfTsIEt5G4', 'PG22'),

('Intro to OOP', 6, 'https://youtu.be/DWvYJpZnat8', 'OP22'),
('Class', 10, 'https://youtu.be/qmd2iXD1v10', 'OP22'),
('Object', 8, 'https://youtu.be/ErGHKd6oxEQ', 'OP22'),
('Property and Method', 11, 'https://youtu.be/MgrFoQYHPmk', 'OP22'),
('Getter and Setter', 13, 'https://youtu.be/M46igUY2mmI', 'OP22'),
('Constructor', 9, 'https://youtu.be/Bm0C_ieZ6A4', 'OP22'),
('Inheritance', 7, 'https://youtu.be/bsTG50k3b3g', 'OP22'),
('Inheritance with code', 9, 'https://youtu.be/uXalSKIxS6Y', 'OP22'),

('League guide for beginners', 25, 'https://youtu.be/u9JdENUoGik', 'LOL1'),
('Beginners guide for ADC', 14, 'https://youtu.be/Ci-LYjHBk4U', 'LOL1'),
('Beginners guide for Mid lane', 15, 'https://youtu.be/zGKL1KXNInI', 'LOL1'),
('Beginners guide for Jungler', 20, 'https://youtu.be/ykpyhtOYIJQ', 'LOL1'),
('Beginners guide for Top lane', 11, 'https://youtu.be/mWirtlXlb2w', 'LOL1'),
('Beginners guide for SP', 12, 'https://youtu.be/I9oTNMjAMh8', 'LOL1'),

('Play SP like CoreJJ part1', 6, 'https://youtu.be/v-ec5astbE0', 'LOL2'),
('Mindset and Roaming', 8, 'https://youtu.be/_U61tI1E9e0', 'LOL2'),
('Vision control', 13, 'https://youtu.be/6cXqzH2vMH8', 'LOL2'),
('Farming tips', 10, 'https://youtu.be/jOSyf1NQspo', 'LOL2'),
('Wave Control Guide', 16, 'https://youtu.be/p9ZUxaCpvjc', 'LOL2'),
('Trading Guide', 15, 'https://youtu.be/L7qPSGmS9ik', 'LOL2'),
('Macro Guide', 15, 'https://youtu.be/H9OB_aXv3ts', 'LOL2'),
('Jungler Macro and Ganking', 16, 'https://youtu.be/TFFz8OILKPM','LOL2'),

('Set theory', 17, 'https://www.youtube.com/watch?v=tyDKR4FG3Yw&list=PLDDGPdw7e6Ag1EIznZ-m-qXu4XX3A0cIz','DCM1'),
('Cartesian products on sets', 11, 'https://youtu.be/NnEkVooAsxk','DCM1'),
('Subset and power set', 15, 'https://youtu.be/H5D6EAezsXQ','DCM1'),
('Propositional Logic', 11, 'https://youtu.be/itrXYg41-V0','DCM1'),
('Truth Table', 11, 'https://youtu.be/UiGu57JzLkE','DCM1'),
('Logical Laws', 15, 'https://youtu.be/eihhu72YdpQ','DCM1'),

('Intro to limit', 16, 'https://youtu.be/PaBnLWc_17g','CAL1'),
('Limit Laws', 12, 'https://youtu.be/0ByO2ToZ7AU','CAL1'),
('Finding Limit', 16, 'https://youtu.be/CSALbevEMfs','CAL1'),
('Continuity', 15, 'https://youtu.be/mviEiFLm1mg','CAL1'),
('Continuity Law', 14, 'https://youtu.be/V1mRyKQcaRo','CAL1'),
('Definition of Derivative', 6, 'https://youtu.be/qL2vr0Gi6e8','CAL1');

INSERT INTO Course_Student (student_id, course_id, rating, comment, progress)
VALUES('ST1','LOL1',5.0,'5 star about the quality of the course',100), 
('ST1','LOL2',4.9,'clear explaination, thanks a lot Mr.Ren',100),
('ST2','PG22',4.0,'a little bit unclear about function lesson, too few exercises',98), 
('ST2','DCM1',5.0,'10 marks for all sides',100), 
('ST2','LOL2', null,null,30),
('ST3','OP22',4.8,'Great course ever, thank you so much',95), 
('ST3','DCM1', 4.5, 'a little bit confusion in some lesson',98), 
('ST3', 'CAL1', 4.2, null,95);

SELECT * FROM Student;
SELECT * FROM Course;
SELECT * FROM Teacher;
SELECT * FROM Lesson;
SELECT * FROM Course_Student;


DROP TABLE Course_Student
DROP TABLE Lesson
DROP TABLE Course
DROP TABLE Student
DROP TABLE Teacher