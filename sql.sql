create database Statistic;
USE Statistic;
CREATE TABLE t_stat ( 
    C_id int auto_increment primary key, 
    C_path varchar(255), 
    C_size int, 
    C_elapsed_time int, 
    C_date timestamp 
);
