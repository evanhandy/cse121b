import { displayStories, sortBy } from "./modules/stories.js";

/* Declare and initialize global variables */
let storyList = [];

/* async getStories Function using fetch()*/
const getStories = async () => {
    const response = await fetch("https://run.mocky.io/v3/507d8f92-4572-4887-9cd9-5a0d8eed470a");
    storyList = await response.json();
    displayStories(storyList);
}

getStories();

/* Event Listeners */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(storyList) });
document.querySelector("#showList").addEventListener("click", () => { sortBy(storyList) });