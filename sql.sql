DROP database statistic;
create database statistic;
USE statistic;
CREATE TABLE t_stat ( 
    c_id int auto_increment primary key, 
    c_path text, 
    c_size bigint, 
    c_elapsed_time int, 
    c_date timestamp DEFAULT cURRENT_TIMESTAMP ON UPDATE cURRENT_TIMESTAMP,
    c_size_string varchar(255)
);
