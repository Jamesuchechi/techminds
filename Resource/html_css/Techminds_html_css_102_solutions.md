---

## **Challenge 1: Toggle Visibility of Multiple Elements**

### **Task**:  
Create a webpage with several sections of content (e.g., images, paragraphs, or divs). Use jQuery to toggle the visibility of these sections when buttons are clicked.

### **Solution**:

#### **HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Toggle Visibility</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    .content {
      padding: 10px;
      margin: 10px;
      background-color: #f2f2f2;
      display: none; /* Hidden by default */
    }
    button {
      margin: 5px;
    }
  </style>
</head>
<body>
  <button class="toggle-btn" data-target="#section1">Toggle Section 1</button>
  <button class="toggle-btn" data-target="#section2">Toggle Section 2</button>
  <button class="toggle-btn" data-target="#section3">Toggle Section 3</button>

  <div id="section1" class="content">
    <h3>Section 1</h3>
    <p>This is content for Section 1.</p>
  </div>
  <div id="section2" class="content">
    <h3>Section 2</h3>
    <p>This is content for Section 2.</p>
  </div>
  <div id="section3" class="content">
    <h3>Section 3</h3>
    <p>This is content for Section 3.</p>
  </div>

  <script>
    // jQuery to toggle visibility of sections
    $(".toggle-btn").click(function() {
      var target = $(this).data("target");
      $(target).toggle(); // Toggle visibility of the targeted section
    });
  </script>
</body>
</html>
```

### **Explanation**:
- Three sections are defined (`#section1`, `#section2`, `#section3`) and are initially hidden.
- Each button has a `data-target` attribute that corresponds to the section it controls.
- When a button is clicked, jQuery toggles the visibility of the associated section using `.toggle()`.

---

## **Challenge 2: Animate an Object**

### **Task**:  
Animate a box or div element to move horizontally and vertically across the page when a button is clicked. Use jQuery animations and CSS properties.

### **Solution**:

#### **HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animate Object</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    #box {
      width: 50px;
      height: 50px;
      background-color: blue;
      position: absolute;
    }
    button {
      margin: 10px;
    }
  </style>
</head>
<body>
  <button id="animateBtn">Move Box</button>
  <div id="box"></div>

  <script>
    $("#animateBtn").click(function() {
      $("#box").animate({
        left: "300px", // Move 300px to the right
        top: "200px"   // Move 200px down
      }, 1000); // Duration of 1000ms (1 second)
    });
  </script>
</body>
</html>
```

### **Explanation**:
- A blue box (`#box`) starts at the top-left corner.
- When the button is clicked, jQuery's `.animate()` method is used to move the box 300px to the right (`left: "300px"`) and 200px down (`top: "200px"`).
- The animation lasts for 1 second (`1000ms`).

---

## **Challenge 3: Form Validation**

### **Task**:  
Use jQuery to validate a form on submit. Ensure that all fields (e.g., name, email, password) are filled out and display an alert or message if any are missing.

### **Solution**:

#### **HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Validation</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    .error {
      color: red;
    }
  </style>
</head>
<body>
  <h2>Registration Form</h2>
  <form id="regForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password"><br><br>

    <button type="submit">Submit</button>
  </form>

  <div id="errorMessages" class="error"></div>

  <script>
    $("#regForm").submit(function(event) {
      event.preventDefault(); // Prevent form from submitting

      var errorMessages = "";
      var name = $("#name").val();
      var email = $("#email").val();
      var password = $("#password").val();

      if (!name) {
        errorMessages += "Name is required.<br>";
      }
      if (!email) {
        errorMessages += "Email is required.<br>";
      }
      if (!password) {
        errorMessages += "Password is required.<br>";
      }

      if (errorMessages) {
        $("#errorMessages").html(errorMessages); // Display errors
      } else {
        alert("Form submitted successfully!"); // If no errors, submit form
        $("#regForm")[0].reset(); // Reset form fields
      }
    });
  </script>
</body>
</html>
```

### **Explanation**:
- The form (`#regForm`) contains three fields: Name, Email, and Password.
- When the form is submitted, jQuery's `submit()` method is used to validate the fields.
- If any field is empty, an error message is displayed under the form.
- If all fields are filled out, an alert is shown, and the form is "submitted" (in this case, the page simply resets the form as a placeholder for actual submission).

---

### **Grading Criteria**:
Here’s how to grade the solutions for each challenge:

1. **Challenge 1**:
   - Correctly implements toggling visibility with jQuery.
   - Demonstrates proper use of `data-target` for dynamic interaction.
   - All sections should toggle on button clicks.

2. **Challenge 2**:
   - Successfully animates the object (box) to move horizontally and vertically.
   - Uses jQuery’s `.animate()` method correctly.
   - Animation should be smooth and within the specified duration.

3. **Challenge 3**:
   - Properly validates the form inputs.
   - Displays error messages for missing fields and ensures all fields are filled.
   - Prevents form submission until all fields are valid.

---
