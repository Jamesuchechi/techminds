
### **PHP Handbook for Beginners with Examples and Projects**

---

### 1. **Introduction to PHP**

**Project 1: "Hello World" Webpage**

A basic introduction to PHP would be to create a simple webpage that outputs "Hello World" using PHP. This will help you get familiar with PHP syntax and how it works in a web environment.

**Steps:**
1. Create a new file `index.php`.
2. Write the following code:

```php
<?php
  echo "Hello, World!";
?>
```

**What you learned:**
- PHP syntax
- How to embed PHP inside HTML
- How to view output in a web browser

---

### 2. **Basic PHP Syntax**

**Project 2: Display User's Name**

In this project, you'll use PHP variables and the `echo` statement to display dynamic content based on user input.

**Steps:**
1. Create a form (`form.html`) where users can enter their name.
2. Create a PHP file (`welcome.php`) to handle the form submission.

```html
<!-- form.html -->
<form action="welcome.php" method="POST">
    Enter your name: <input type="text" name="name">
    <input type="submit" value="Submit">
</form>
```

```php
<!-- welcome.php -->
<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    echo "Welcome, " . htmlspecialchars($name) . "!";
  }
?>
```

**What you learned:**
- Handling user input with forms
- Using the `$_POST` superglobal
- Basic form handling and output

---

### 3. **Operators**

**Project 3: Simple Calculator**

Create a simple calculator that performs basic arithmetic operations. This will help you practice working with PHP operators.

**Steps:**
1. Create a form where users can input two numbers and choose an operation.
2. Process the input in a PHP script to calculate the result.

```html
<!-- calculator.html -->
<form action="calculator.php" method="POST">
    First number: <input type="number" name="num1"><br>
    Second number: <input type="number" name="num2"><br>
    Operation: 
    <select name="operation">
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
    </select><br>
    <input type="submit" value="Calculate">
</form>
```

```php
<!-- calculator.php -->
<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $operation = $_POST['operation'];

    if ($operation == "add") {
      $result = $num1 + $num2;
    } elseif ($operation == "subtract") {
      $result = $num1 - $num2;
    } elseif ($operation == "multiply") {
      $result = $num1 * $num2;
    } elseif ($operation == "divide") {
      if ($num2 != 0) {
        $result = $num1 / $num2;
      } else {
        $result = "Cannot divide by zero";
      }
    }

    echo "Result: " . $result;
  }
?>
```

**What you learned:**
- Using arithmetic operators in PHP
- Conditional statements to handle different operations
- Handling form input and displaying results

---

### 4. **Control Structures**

**Project 4: Simple Voting System**

In this project, we will use if-else and switch statements to determine if a user is eligible to vote and show a message accordingly.

**Steps:**
1. Create a form to input the user's age.
2. Based on the age, check if the user is eligible to vote using control structures.

```html
<!-- vote_form.html -->
<form action="vote_check.php" method="POST">
    Enter your age: <input type="number" name="age">
    <input type="submit" value="Check Eligibility">
</form>
```

```php
<!-- vote_check.php -->
<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $age = $_POST['age'];

    if ($age >= 18) {
      echo "You are eligible to vote!";
    } else {
      echo "You are not eligible to vote.";
    }
  }
?>
```

**What you learned:**
- Implementing conditional logic (`if-else`)
- Handling user input from forms
- Displaying appropriate messages based on conditions

---

### 5. **Functions**

**Project 5: Temperature Converter**

In this project, we'll create a function to convert temperatures from Celsius to Fahrenheit and vice versa.

**Steps:**
1. Create a simple form to input a temperature and select the conversion direction.
2. Write a PHP function to handle the conversion logic.

```html
<!-- converter_form.html -->
<form action="converter.php" method="POST">
    Enter temperature: <input type="number" name="temperature">
    Convert from: 
    <select name="unit_from">
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
    </select><br>
    Convert to: 
    <select name="unit_to">
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
    </select><br>
    <input type="submit" value="Convert">
</form>
```

```php
<!-- converter.php -->
<?php
  function convertTemperature($temp, $from, $to) {
    if ($from == "celsius" && $to == "fahrenheit") {
      return ($temp * 9/5) + 32;
    } elseif ($from == "fahrenheit" && $to == "celsius") {
      return ($temp - 32) * 5/9;
    }
    return $temp; // No conversion needed if same unit
  }

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $temperature = $_POST['temperature'];
    $unit_from = $_POST['unit_from'];
    $unit_to = $_POST['unit_to'];

    $converted_temp = convertTemperature($temperature, $unit_from, $unit_to);
    echo "Converted temperature: " . $converted_temp;
  }
?>
```

**What you learned:**
- Defining and calling functions in PHP
- Using function parameters and return values
- Handling form input and performing calculations

---

### 6. **Arrays**

**Project 6: Display Student Names**

In this project, we'll create an associative array to store student names and their grades. Then, we'll display this information in an HTML table.

**Steps:**
1. Create an array of students with their names and grades.
2. Display the students' information in a table.

```php
<!-- students.php -->
<?php
  $students = [
    "John" => "A",
    "Jane" => "B",
    "Sam" => "C",
    "Alice" => "A"
  ];

  echo "<table border='1'>
          <tr>
            <th>Name</th>
            <th>Grade</th>
          </tr>";

  foreach ($students as $name => $grade) {
    echo "<tr>
            <td>$name</td>
            <td>$grade</td>
          </tr>";
  }

  echo "</table>";
?>
```

**What you learned:**
- Working with arrays (associative arrays)
- Looping through arrays with `foreach`
- Displaying dynamic content using PHP

---

### 7. **Superglobals**

**Project 7: Simple Login Form**

In this project, we’ll use the `$_SESSION` superglobal to create a simple login system where users are greeted by name after logging in.

**Steps:**
1. Create a form for users to input their username.
2. Use `$_SESSION` to store the username and display a greeting after they log in.

```html
<!-- login_form.html -->
<form action="login.php" method="POST">
    Username: <input type="text" name="username">
    <input type="submit" value="Login">
</form>
```

```php
<!-- login.php -->
<?php
  session_start();

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $_SESSION['username'] = $_POST['username'];
    echo "Welcome, " . $_SESSION['username'] . "!";
  }
?>
```

**What you learned:**
- Using `$_SESSION` to store and retrieve data
- Handling form submissions with `$_POST`
- Simple login system using PHP

---

We'll cover **working with forms**, **connecting to a database**, **error handling**, **file handling**, **PHP and security**, and more. These additional examples will further solidify your understanding of PHP.

---

### 8. **Forms and User Input**

#### Project 8: Form Validation

In this project, we will create a form for users to submit their email address and use PHP to validate the email input. If the email is valid, we’ll display a success message, otherwise, we’ll show an error.

**Steps:**
1. Create an HTML form for email input.
2. Use PHP to validate the email using `filter_var()` and give appropriate feedback.

```html
<!-- email_form.html -->
<form action="validate_email.php" method="POST">
    Enter your email: <input type="text" name="email">
    <input type="submit" value="Submit">
</form>
```

```php
<!-- validate_email.php -->
<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
      echo "The email address '$email' is valid!";
    } else {
      echo "The email address '$email' is not valid.";
    }
  }
?>
```

**What you learned:**
- Validating user input with built-in PHP functions like `filter_var()`
- Handling form submissions and showing feedback
- Understanding the importance of input validation

---

### 9. **Working with Files**

#### Project 9: Read and Write to a File

In this project, we will create a simple application to write user input to a file and then display the contents of that file.

**Steps:**
1. Create an HTML form for the user to input some text.
2. Use PHP to write the text to a file.
3. Read the file and display its contents.

```html
<!-- file_form.html -->
<form action="file_operations.php" method="POST">
    Enter some text: <textarea name="content"></textarea><br>
    <input type="submit" value="Submit">
</form>
```

```php
<!-- file_operations.php -->
<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $content = $_POST['content'];

    // Write to a file
    file_put_contents("user_input.txt", $content);

    // Read from the file and display contents
    echo "<h3>Contents of the file:</h3>";
    echo nl2br(file_get_contents("user_input.txt"));
  }
?>
```

**What you learned:**
- Using `file_put_contents()` to write to a file
- Using `file_get_contents()` to read from a file
- Handling user input and file operations

---

### 10. **Introduction to MySQL with PHP**

#### Project 10: Simple CRUD Application (Create, Read, Update, Delete)

In this project, we will connect PHP to a MySQL database and perform CRUD operations. We will create a simple database of users, and users can be added, displayed, and deleted.

**Steps:**
1. Create a database `php_users` in MySQL with a table `users`.
2. Use PHP to connect to MySQL and perform CRUD operations.

**SQL to Create Database and Table:**
```sql
CREATE DATABASE php_users;
USE php_users;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);
```

**PHP Code to Connect to MySQL and Add Users:**

```php
<!-- connect.php (DB connection) -->
<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "php_users";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
?>
```

**Add User:**
```php
<!-- add_user.php -->
<?php
  include 'connect.php';

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];

    $sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
    
    if ($conn->query($sql) === TRUE) {
      echo "New user added successfully!";
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }
  }
?>

<form action="add_user.php" method="POST">
    Name: <input type="text" name="name"><br>
    Email: <input type="email" name="email"><br>
    <input type="submit" value="Add User">
</form>
```

**Display Users:**
```php
<!-- display_users.php -->
<?php
  include 'connect.php';

  $sql = "SELECT * FROM users";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      echo "Name: " . $row['name'] . " - Email: " . $row['email'] . "<br>";
    }
  } else {
    echo "0 results";
  }

  $conn->close();
?>
```

**What you learned:**
- Connecting to MySQL with PHP using MySQLi
- Performing CRUD operations (Create, Read)
- Displaying data from a database

---

### 11. **Error Handling and Debugging**

#### Project 11: Error Logging System

In this project, we will demonstrate error handling using `try-catch` blocks and logging errors to a file. This will help you understand how to handle exceptions in PHP.

**Steps:**
1. Set up error reporting in PHP.
2. Use `try-catch` to handle exceptions.

```php
<!-- error_handling.php -->
<?php
  ini_set('display_errors', 1);
  error_reporting(E_ALL);

  try {
    $file = fopen("non_existent_file.txt", "r");
    if (!$file) {
      throw new Exception("File not found!");
    }
    // Additional code to work with the file
  } catch (Exception $e) {
    // Log the error to a file
    error_log($e->getMessage(), 3, "error_log.txt");
    echo "Something went wrong. Please try again later.";
  }
?>
```

**What you learned:**
- Setting up error reporting in PHP
- Using `try-catch` blocks for error handling
- Logging errors to a file

---

### 12. **PHP and Security**

#### Project 12: Preventing SQL Injection

In this project, we will demonstrate how to prevent SQL injection by using prepared statements.

**Steps:**
1. Create a login form where users enter their username and password.
2. Use prepared statements to query the database securely.

```php
<!-- login_secure.php -->
<?php
  include 'connect.php';

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Using prepared statements to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
      echo "Login successful!";
    } else {
      echo "Invalid username or password.";
    }

    $stmt->close();
  }
?>

<form action="login_secure.php" method="POST">
    Username: <input type="text" name="username"><br>
    Password: <input type="password" name="password"><br>
    <input type="submit" value="Login">
</form>
```

**What you learned:**
- Using prepared statements to prevent SQL injection
- Binding parameters to SQL queries with MySQLi
- Handling user authentication securely

---

### 13. **Best Practices**

#### Project 13: Organizing a PHP Project

In this project, we will demonstrate how to organize your PHP project for better maintainability. The project structure could look like this:

```
/my_php_project
    /includes
        - db_connect.php
        - functions.php
    /public
        - index.php
        - login.php
    /assets
        - style.css
        - script.js
```

**What you learned:**
- Structuring PHP projects for better readability and maintainability
- Including files using `include` and `require`
- Using CSS and JavaScript with PHP

---

### 14. **Conclusion and Next Steps**

#### Further Learning Resources
- **Official PHP Documentation**: https://www.php.net/docs.php
- **PHP The Right Way**: https://phptherightway.com/
- **Online Communities**: Stack Overflow, Reddit, PHP forums

#### PHP Frameworks
- **Laravel**: A modern PHP framework that simplifies web development with MVC architecture.
- **Symfony**: A flexible and powerful framework that is used by many large-scale applications.

---
Great! Let's continue expanding with more advanced topics that will give you a deeper understanding of PHP. We'll cover **object-oriented programming (OOP)**, **working with APIs**, **sessions and cookies**, **file uploads**, **email handling**, and more advanced security practices.

---

### 15. **Object-Oriented Programming (OOP) in PHP**

#### Project 14: Building a Simple "Car" Class

Object-Oriented Programming (OOP) helps organize code into reusable classes. Let’s start by creating a simple `Car` class with properties and methods to demonstrate the basics of OOP.

**Steps:**
1. Create a `Car` class with properties like `make`, `model`, and `year`.
2. Add methods to get and set these properties.
3. Instantiate the `Car` class and display its properties.

```php
<!-- car.php -->
<?php
class Car {
    // Properties
    public $make;
    public $model;
    public $year;

    // Constructor to initialize properties
    public function __construct($make, $model, $year) {
        $this->make = $make;
        $this->model = $model;
        $this->year = $year;
    }

    // Method to display car info
    public function displayInfo() {
        echo "Car: " . $this->year . " " . $this->make . " " . $this->model . "<br>";
    }
}

// Create a new car object
$myCar = new Car("Toyota", "Corolla", 2020);
$myCar->displayInfo();
?>
```

**What you learned:**
- Creating classes and objects in PHP
- Using a constructor to initialize object properties
- Defining methods for functionality

---

#### Project 15: Inheritance and Polymorphism

In this project, we’ll demonstrate inheritance, where a subclass extends the functionality of a parent class. We’ll create a `Vehicle` class and a `Car` subclass that inherits from `Vehicle`.

**Steps:**
1. Create a `Vehicle` class with common properties like `color`.
2. Create a `Car` class that extends `Vehicle` and adds additional properties and methods.

```php
<!-- vehicle.php -->
<?php
// Parent class
class Vehicle {
    public $color;

    public function __construct($color) {
        $this->color = $color;
    }

    public function displayColor() {
        echo "This vehicle is " . $this->color . "<br>";
    }
}

// Child class
class Car extends Vehicle {
    public $make;
    public $model;

    public function __construct($color, $make, $model) {
        parent::__construct($color); // Call parent constructor
        $this->make = $make;
        $this->model = $model;
    }

    // Method overriding
    public function displayInfo() {
        echo "Car: " . $this->make . " " . $this->model . " - Color: " . $this->color . "<br>";
    }
}

// Instantiate a Car object
$myCar = new Car("Red", "Honda", "Civic");
$myCar->displayColor(); // From parent class
$myCar->displayInfo(); // Overridden method from child class
?>
```

**What you learned:**
- Inheritance: how one class can inherit properties and methods from another
- Method overriding: how a subclass can change or extend functionality from the parent class

---

### 16. **Working with APIs**

#### Project 16: Consuming a REST API

In this project, we'll fetch data from a public API (such as JSONPlaceholder) and display it in a structured format.

**Steps:**
1. Use PHP’s `file_get_contents()` or cURL to fetch data from an external API.
2. Decode the JSON response and display it.

```php
<!-- api_consume.php -->
<?php
  $url = "https://jsonplaceholder.typicode.com/posts"; // Example API
  $response = file_get_contents($url);
  $data = json_decode($response, true); // Decode JSON to array

  foreach ($data as $post) {
    echo "Title: " . $post['title'] . "<br>";
    echo "Body: " . $post['body'] . "<br><hr>";
  }
?>
```

**What you learned:**
- Fetching data from an external API using `file_get_contents()` or cURL
- Decoding JSON data and handling it in PHP
- Displaying API data dynamically on a webpage

---

### 17. **Sessions and Cookies**

#### Project 17: Implementing User Authentication with Sessions

In this project, we'll implement a simple login system where we store the user’s login status in a session.

**Steps:**
1. Create a login form that checks the user's credentials.
2. Use PHP sessions to track the user’s login state across pages.

```php
<!-- login_form.php -->
<form action="login_process.php" method="POST">
    Username: <input type="text" name="username"><br>
    Password: <input type="password" name="password"><br>
    <input type="submit" value="Login">
</form>
```

```php
<!-- login_process.php -->
<?php
  session_start();

  // Example hardcoded credentials
  $correct_username = "admin";
  $correct_password = "1234";

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username === $correct_username && $password === $correct_password) {
      $_SESSION['loggedin'] = true;
      echo "You are logged in! <br><a href='profile.php'>Go to profile</a>";
    } else {
      echo "Invalid credentials.";
    }
  }
?>
```

```php
<!-- profile.php -->
<?php
  session_start();

  if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    echo "Please log in first.";
    exit;
  }

  echo "Welcome to your profile!";
?>
```

**What you learned:**
- Starting and using sessions to track user states
- Redirecting users based on their session status
- Simple authentication system using PHP sessions

---

### 18. **File Uploads**

#### Project 18: Handling File Uploads

In this project, we’ll create a simple form that allows users to upload images. We’ll process the uploaded file using PHP and store it on the server.

**Steps:**
1. Create a form to upload a file.
2. Handle the uploaded file in PHP and store it in a designated folder.

```html
<!-- upload_form.html -->
<form action="upload.php" method="POST" enctype="multipart/form-data">
    Select image to upload:
    <input type="file" name="image" id="image">
    <input type="submit" value="Upload Image">
</form>
```

```php
<!-- upload.php -->
<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["image"])) {
    $file_name = $_FILES["image"]["name"];
    $file_tmp = $_FILES["image"]["tmp_name"];
    $target_dir = "uploads/";

    // Check if file is an image
    $check = getimagesize($file_tmp);
    if ($check !== false) {
      // Move the uploaded file to the target directory
      if (move_uploaded_file($file_tmp, $target_dir . $file_name)) {
        echo "File has been uploaded successfully.";
      } else {
        echo "Sorry, there was an error uploading your file.";
      }
    } else {
      echo "File is not an image.";
    }
  }
?>
```

**What you learned:**
- Handling file uploads with `$_FILES`
- Validating uploaded files (checking if they’re images)
- Storing files on the server securely

---

### 19. **Sending Emails with PHP**

#### Project 19: Send Email Using PHP

In this project, we will send an email using PHP’s `mail()` function. We'll send a welcome email after a user submits a contact form.

**Steps:**
1. Create a form where users enter their name and email address.
2. Use PHP to send a confirmation email to the user.

```html
<!-- contact_form.html -->
<form action="send_email.php" method="POST">
    Name: <input type="text" name="name"><br>
    Email: <input type="email" name="email"><br>
    <input type="submit" value="Send Message">
</form>
```

```php
<!-- send_email.php -->
<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];

    $subject = "Thank you for contacting us, " . $name;
    $message = "Dear " . $name . ",\n\nThank you for reaching out. We will get back to you soon.";
    $headers = "From: no-reply@example.com";

    if (mail($email, $subject, $message, $headers)) {
      echo "Email sent successfully!";
    } else {
      echo "There was an error sending your email.";
    }
  }
?>
```

**What you learned:**
- Using PHP's `mail()` function to send emails
- Handling form submissions to send dynamic emails
- Basic email sending functionality

---

### 20. **Security Best Practices**

#### Project 20: Password Hashing and Verification

In this project, we will demonstrate how to securely store user passwords by hashing them before storing them in a database.

**Steps:**
1. Use `password_hash()` to hash the user's password.
2. Use `password_verify()` to check the password during login.

```php
<!-- signup.php -->
<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $password = $_POST['password'];

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Store $hashed_password in the database (simulated here)
    echo "User registered successfully with hashed password: " . $hashed_password;
  }
?>

<form action="signup.php" method="POST">
    Password: <input type="password" name="password"><br>
    <input type="submit" value="Register">
</form>
```

```php
<!-- login.php -->
<?php
  // Simulate the hashed password from the database
  $stored_hash = '$2y$10$e8E1JfRUyZT8DdNCh4diNOinxei7L2NoK7I8lETyhdF0s2.w3iylG'; // Example hash

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $password = $_POST['password'];

    // Verify the password with the stored hash
    if (password_verify($password, $stored_hash)) {
      echo "Login successful!";
    } else {
      echo "Invalid password.";
    }
  }
?>

<form action="login.php" method="POST">
    Password: <input type="password" name="password"><br>
    <input type="submit" value="Login">
</form>
```

**What you learned:**
- Using `password_hash()` to hash passwords securely
- Using `password_verify()` to check the entered password against the hashed password
- Enhancing security by avoiding plain-text passwords

---

### Conclusion and Next Steps

This extended section of the PHP handbook covers essential advanced topics that will help you understand PHP in-depth. You’ve learned how to work with object-oriented principles, interact with APIs, implement user authentication, handle file uploads, and secure your applications with best practices like password hashing.

#### Advanced Resources
- **PHP: The Good Parts**: https://phptherightway.com/
- **Composer**: Learn about dependency management for PHP: https://getcomposer.org/

---

Absolutely! Let's create some **student projects** and **tasks** that will help beginners practice and solidify their PHP skills. These projects will cover a wide range of topics and will be perfect for applying the concepts you’ve learned.

### 21. **Student Projects and Tasks**

#### Project 1: **Simple Contact Form**
**Objective:** Create a simple contact form where users can input their name, email, and message. Upon submission, display a confirmation message with the submitted information.

**Steps:**
1. Create an HTML form with fields for name, email, and message.
2. Use PHP to process the form data and display it on the same page.
3. Add basic validation to ensure that all fields are filled out.

**Task 1:**
- Implement basic form validation to ensure the email is in the correct format.
- Display an error message if the form is not submitted correctly.

---

#### Project 2: **Basic User Registration System**
**Objective:** Create a registration form where users can sign up with their username, email, and password. Upon successful registration, store the user's details in a database, hashing their password.

**Steps:**
1. Create a registration form that accepts username, email, and password.
2. Use `password_hash()` to hash the password before storing it in a database.
3. Store the user’s details in a database table (create a table called `users`).
4. After successful registration, display a confirmation message.

**Task 2:**
- Implement password confirmation (e.g., a "Confirm Password" field).
- Display an error message if passwords don’t match.
- Add form validation (e.g., checking for a valid email format).

---

#### Project 3: **Login and Logout System**
**Objective:** Build a simple login system where users can log in with their username/email and password. Use sessions to keep users logged in until they choose to log out.

**Steps:**
1. Create a login form where users can enter their credentials.
2. Verify the login by checking the credentials against the database.
3. If the login is successful, create a session to track the user's login status.
4. Create a logout button that destroys the session and logs the user out.

**Task 3:**
- Add form validation to check for empty fields.
- Implement "remember me" functionality using cookies (optional).

---

#### Project 4: **Todo List Application**
**Objective:** Create a simple to-do list app where users can add, edit, and delete tasks. Use PHP to store tasks in a file or a database.

**Steps:**
1. Create a form where users can add a new task.
2. Store the tasks in a text file or a database.
3. Display the list of tasks on the page.
4. Provide the ability to delete a task.
5. Allow users to mark tasks as completed (optional).

**Task 4:**
- Add the ability to edit tasks.
- Implement pagination if there are a lot of tasks.

---

#### Project 5: **Simple Blog System**
**Objective:** Build a simple blog where users can view, create, and delete blog posts. Use a MySQL database to store the posts.

**Steps:**
1. Create a table in MySQL to store blog posts with fields like `id`, `title`, `content`, and `author`.
2. Create a form to submit new blog posts.
3. Display all posts on the homepage.
4. Allow users to view individual blog posts.
5. Add an option to delete blog posts.

**Task 5:**
- Implement an edit option for each blog post.
- Add pagination to display posts in batches (e.g., 10 posts per page).
- Implement basic authentication to allow only registered users to create or delete posts.

---

#### Project 6: **Simple Polling System**
**Objective:** Build a polling system where users can vote for different options and see the results instantly.

**Steps:**
1. Create a MySQL table to store the poll question and options.
2. Display the poll question and options as radio buttons on the page.
3. Allow users to vote and store their choice in the database.
4. After voting, display the results in a simple bar chart or percentages.

**Task 6:**
- Add an option to limit voting to one vote per user (use cookies or IP address to track votes).
- Add a closing date for the poll and prevent voting after that.

---

#### Project 7: **Basic Chat Application**
**Objective:** Create a simple chat application where users can send and receive messages in real time.

**Steps:**
1. Create a MySQL table to store chat messages with fields for the message content, sender, and timestamp.
2. Display all messages in a chat interface.
3. Allow users to send messages, which will be added to the chat and shown to all users.
4. Use AJAX to refresh the chat messages without reloading the page.

**Task 7:**
- Implement user authentication to only allow logged-in users to send and view messages.
- Add functionality to display online users (can use sessions or cookies).

---

#### Project 8: **Weather App using an API**
**Objective:** Create a weather application that fetches data from a public weather API and displays it to the user.

**Steps:**
1. Use a weather API (e.g., OpenWeatherMap) to fetch current weather data for a given city.
2. Create a simple form where users can enter a city name.
3. Display the weather data on the page (temperature, weather condition, etc.).

**Task 8:**
- Handle errors if the API doesn’t return any data (e.g., if the city is invalid).
- Display the weather data in a nice format (with icons for different weather conditions).

---

### 22. **Additional Tasks for Students**

**Task 9: PHP Debugging**
- Give students PHP code with intentional bugs (e.g., syntax errors, logic errors) and ask them to debug it. This will help them improve their problem-solving skills.

**Task 10: Writing SQL Queries**
- Provide students with a database schema and ask them to write SQL queries for common tasks (e.g., `SELECT`, `INSERT`, `UPDATE`, `DELETE`). This will help them get comfortable with both PHP and MySQL.

**Task 11: Security Audits**
- Ask students to analyze the security of a basic login system and suggest improvements. This can include things like preventing SQL injection, hashing passwords securely, and using HTTPS.

**Task 12: Create an Admin Panel**
- Ask students to create an admin panel for the blog system or the to-do list app. The admin panel should allow the admin to view, add, edit, and delete posts or tasks.

---

### 23. **Advanced Student Projects**

#### Project 9: **E-commerce System**
**Objective:** Create a basic e-commerce website where users can browse products, add items to their cart, and proceed to checkout.

**Steps:**
1. Create a database to store products (e.g., name, description, price, image).
2. Create pages to display products and a shopping cart.
3. Allow users to add items to the cart and proceed to checkout.
4. Implement simple payment functionality (simulate payments).

**Task 13:**
- Add user authentication and allow users to view their past orders.
- Implement an order history page for customers and an admin panel to view orders.

---

#### Project 10: **Job Portal**
**Objective:** Build a job portal where employers can post job listings and job seekers can apply for them.

**Steps:**
1. Create a database to store job postings and applications.
2. Allow employers to create, edit, and delete job listings.
3. Allow job seekers to view job listings and apply for jobs.
4. Send email notifications to employers when someone applies for a job.

**Task 14:**
- Implement user roles (employer and job seeker).
- Add functionality for job seekers to update their resume/profile.

---

### 24. **Evaluation and Grading Criteria**

To assess the students’ progress, here’s how you can evaluate their projects:

- **Code Quality:**
  - Is the code clean, readable, and well-commented?
  - Does it follow best practices (e.g., naming conventions, file structure)?

- **Functionality:**
  - Does the project work as expected (e.g., form submissions, database interactions)?
  - Are error handling and edge cases accounted for?

- **Security:**
  - Are the projects secure (e.g., password hashing, preventing SQL injection)?
  - Is sensitive data (e.g., passwords) handled securely?

- **Design:**
  - Is the user interface user-friendly?
  - Is the application mobile-responsive (if applicable)?

---

### Conclusion

These projects and tasks will help students apply their PHP knowledge in practical scenarios. By working on these projects, students will develop skills such as **database interaction**, **form handling**, **authentication**, **security**, and more. 
