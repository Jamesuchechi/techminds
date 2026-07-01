const title = document.getElementById('title');
const description = document.getElementById('description');
const card = document.getElementById('card');

console.log("----------------------");
console.log(title);
console.log(title.textContent);

console.log("----------------------");
console.log(description);
console.log(description.textContent);

console.log("----------------------");

console.log(card);
console.log(card.textContent);

console.log("----------------------");

// Change the text content of the title and description
title.textContent = "Welcome to todays lesson on DOM manipulation!";
description.textContent = "This is the new description for the card.";

console.log("----------------------");

// innerHTML allows you to change the HTML content of an element, not just the text
card.innerHTML = "<h2>Premium Dashboards</h2><p>Get access to premium dashboards and analytics tools.</p><a href='#'>Learn More</a>";

// You can also use innerHTML to add new elements to the DOM
const newElement = document.createElement('p');
newElement.textContent = "This is a new paragraph added to the card.";
card.appendChild(newElement);

console.log("----------------------");
console.log(card);
console.log(card.innerHTML);

// Changing the style of an element using JavaScript
title.style.color = "blue";
title.style.fontSize = "40px";
title.style.fontWeight = "bold";
title.style.textAlign = "center";

description.style.color = "green";
description.style.fontSize = "20px";
description.style.fontStyle = "italic";
description.style.textAlign = "center";
description.style.marginTop = "10px";
description.style.marginBottom = "20px";

card.style.backgroundColor = "#f9f9f9";
card.style.padding = "20px";
card.style.borderRadius = "10px";
card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
card.style.textAlign = "center";