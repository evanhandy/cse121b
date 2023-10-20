const storiesElement = document.querySelector("#storyList");

/* display Functions */
const displayStories = (stories) => {
    reset();
    stories.forEach(story => {
        let h2Element = document.createElement("h2");
        h2Element.className = "storyTitle";
        h2Element.innerHTML = story.storyTitle;
        h2Element.addEventListener("click", () => { displayStoryDetails(story) });
        storiesElement.append(h2Element);
    });
}

const displayStoryDetails = (story) => {
    reset();
    let imgElement = document.querySelector("#previewImage");
    imgElement.src = `final-project/images/${story.image}`;
    imgElement.alt = `${story.storyTitle} preview image`;
    let h2Element = document.createElement("h2");
    h2Element.innerHTML = story.storyTitle;
    let h3Element = document.createElement("h3");
    h3Element.innerHTML = `Word Count: ${story.wordCount}`;
    let pElement = document.createElement("p");
    pElement.innerHTML = story.synopsis;
    storiesElement.append(h2Element, h3Element, pElement);
    document.querySelector("#showList").innerHTML = "Show List";
}

/* reset Function */
const reset = () => {
    while (storiesElement.hasChildNodes()) {
        storiesElement.removeChild(storiesElement.firstChild);
    }
    document.querySelector("#showList").innerHTML = "";
    let imgElement = document.querySelector("#previewImage");
    imgElement.src = "final-project/images/default_img.jpg";
    imgElement.alt = "Default preview image";
}

/* sortBy Function */
const sortBy = (stories) => {
    reset();
    let filter = document.querySelector("#sortBy").value;

    switch (filter) {
        case "finished":
            displayStories(stories.filter((story) => story.finished === "finished"));
            break;
        case "unfinished":
            displayStories(stories.filter((story) => story.finished === "unfinished"));
            break;
        case "all":
            displayStories(stories);
            break;
    }
}

export { displayStories, sortBy };