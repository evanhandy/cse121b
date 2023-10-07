/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Evan Handy",
    photo: "../images/ProfilePic.jpg",
    favoriteFoods: [
        "Pizza",
        "Mac and Cheese",
        "Hamburgers"
    ],
    hobbies: [
        "Piano",
        "Video Games",
        "D&D",
        "Writing"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Oregon",
        length: "7 years"
    }
);

myProfile.placesLived.push(
    {
        place: "North Carolina",
        length: "20 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement("dt");
    dt.textContent = placeLived.place;
    let dd = document.createElement("dd");
    dd.textContent = placeLived.length;
    document.querySelector("#places-lived").append(dt, dd);
});

