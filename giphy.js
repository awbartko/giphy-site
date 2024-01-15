function formSubmitted(event) {
    event.preventDefault();
    const memeText = document.querySelector("#meme-text-input").value;
    const memeCount = Number.parseInt(document.querySelector("#num-of-gifs-select").value);

    getData(memeText, memeCount);

    document.querySelector("#meme-text-input").value = "";

    let str = "   ";
        if (str.trim().length === 0) {
            console.log("The string is empty");
        } else {
            console.log("The string is not empty")
        }
}

const API_KEY = "5NxphX0SS2z8aqxNX6ZxopPO2CL7pEzH";

function getData(memeText, memeCount) {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${memeText}&limit=${memeCount}`)
        .then(x => x.json())
        .then(renderData);
}

function renderData(response) {
    console.log(response);

    let html = '';
    for (let image of response.data) {
        html += `
            <img 
            src="${image.images.original.url} 
            alt="${image.title}" 
            class="giphy-img"/>
        `;
    }
    document.querySelector(".js-images").innerHTML = html
}

document.querySelector(".js-giphy-form").addEventListener("submit", formSubmitted);

function scrollToTop(){
    window.scrollTo(0,0);
}