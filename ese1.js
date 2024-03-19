// CREATE TABLE employees (
//     id INT PRIMARY KEY,
//     name VARCHAR(100),
//     department VARCHAR(100),
//     salary DECIMAL(10, 2)
// );

//Write an SQL query to retrieve the names of employees 
//who belong to the 'Sales' department and have a salary greater than $50000.

// SELECT * FROM employees WHERE salary> 50000 AND department="sales"

// INSERT INTO students (id, name, age, grade)
// VALUES
//     (1, 'John Smith', 17, 'A'),
//     (2, 'Emily Johnson', 18, 'B'),
//     (3, 'Michael Brown', 19, 'C'),
//     (4, 'Emma Davis', 17, 'A'),
//     (5, 'Daniel Wilson', 20, 'B');

// CREATE TABLE students (
//     id INT PRIMARY KEY,
//     name VARCHAR(100),
//     age INT,
//     grade VARCHAR(2)
// );

// SELECT name FROM students WHERE age>=18


// INSERT INTO orders (order_id, customer_id, order_date, total_amount)
// VALUES
//     (1, 101, '2024-01-05', 150.50),
//     (2, 102, '2024-01-12', 75.20),
//     (3, 103, '2024-02-02', 200.00),
//     (4, 104, '2024-01-28', 300.75),
//     (5, 105, '2024-02-15', 125.30);


// CREATE TABLE orders (
//     order_id INT PRIMARY KEY,
//     customer_id INT,
//     order_date DATE,
//     total_amount DECIMAL(10, 2)
// );

// Write an SQL query to retrieve the total number of orders placed in the month of January 2024.

// SELECT COUNT(*) 
// FROM orders 
// WHERE EXTRACT(MONTH FROM order-date)= 1 AND EXTRACT(YEAR FROM order-date)=2024 (prende tutti i dati del mese di gennaio nel 2024)

// CREATE TABLE employees (
//     emp_id INT PRIMARY KEY,
//     emp_name VARCHAR(100),
//     hire_date DATE
// );

// Write an SQL query to retrieve the names of employees who were hired in 2023.

// SELECT emp_name 
// FROM employees 
// WHERE EXTRACT(YEAR FROM hire_date)=2023


// CREATE TABLE products (
//     product_id INT PRIMARY KEY,
//     product_name VARCHAR(100),
//     price DECIMAL(10, 2),
//     stock_quantity INT
// );

// Write an SQL query to retrieve the names of products with a stock quantity less than 10.

// SELECT product_name 
// FROM products
// WHERE stock_quantity<10


// CREATE TABLE orders (
//     order_id INT PRIMARY KEY,
//     customer_id INT,
//     order_date DATE,
//     total_amount DECIMAL(10, 2)
// );

// Write an SQL query to retrieve the total amount of orders placed by each customer.

// SELECT customer_id,SUM(total_amount) AS total
// FROM orders
// GROUP BY customer_id


// INSERT INTO employees (emp_id, emp_name, dept_id, salary)
// VALUES
//     (1, 'Alice Johnson', 101, 60000.00),
//     (2, 'Bob Smith', 102, 55000.00),
//     (3, 'Charlie Brown', 103, 62000.00),
//     (4, 'Diana Wilson', 101, 58000.00),
//     (5, 'Eva Davis', 104, 63000.00);

//     CREATE TABLE departments (
//         dept_id INT PRIMARY KEY,
//         dept_name VARCHAR(100)
//     );

// CREATE TABLE employees (
//     emp_id INT PRIMARY KEY,
//     emp_name VARCHAR(100),
//     dept_id INT,
//     salary DECIMAL(10, 2)
// );
// INSERT INTO departments (dept_id, dept_name)
// VALUES
//     (101, 'Finance'),
//     (102, 'Marketing'),
//     (103, 'HR'),
//     (104, 'Sales'),
//     (105, 'IT');

// Write an SQL query to retrieve the employee names along with their department names.

// SELECT emp.emp_name,dept.dept_name 
// FROM employees emp
// JOIN departments dept ON emp.dept_id = dept.dept_id