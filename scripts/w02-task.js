/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Evan Handy";
let currentYear = 2023;
let profilePicture = "images/ProfilePic.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
let imageElement = document.getElementsByTagName("img")[0];

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ["pizza", "mac and cheese", "hamburgers"];
foodElement.innerHTML = favoriteFoods;
anotherFavoriteFood = ["cheesecake"];
favoriteFoods.push(anotherFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;
