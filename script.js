console.log("sanity check")
const submit = document.querySelector("#search-input")
movie
onsubmit = (event) => {
    console.log(event)
}
event.preventDefault 
submit.addEventListener("submit",onsubmit)
const pageSize = 9;
const movieArea = document.querySelector("movies-grid")
var currentApiPage = 0;
var currentSearchTerm = ''

async function getResults(searchTerm) {
    searchTerm.preventDefault();
    const offset = currentApiPage * pageSize;
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${f27535d95ad768a486022d215675d811}&query=fight&page=1`)
    const jsonResponse = await response.json();

    console.log(jsonResponse);

    return jsonResponse.data;  
}

async function displayResults(movieDb){
       let urlPath = `https://image.tmdb.org/t/p/w300` + data.poster_path;
       let Title = data.title;
       let Rated = data.vote_average;


       movieArea.innerHTML += `
       `
       <img class="movie-poster" src='${urlPath}'>
        <h3 class="movie-votes">Rating: ${Rated}</h3>
        <h3 class="movie-title">${Title}</h3>
        <button class="show-more" onclick="showPopUp(${data.id})">Show Info</button>

        
               
}


async function getResults(searchTerm) {
    searchTerm.preventDefault();
    const offset = currentApiPage * pageSize;
    const response = await fetch(`https://api.themoviedb.org/3/search/company?api_key=${f27535d95ad768a486022d215675d811}&query=fight&page=1`) 
    const jsonResponse = await response.json();

    console.log(jsonResponse)
    //search query
    //different link for now playing 
    //use base url + path 
    //
    //foreach on results
   // `https://api.themoviedb.org/3/search/movie?api_key=f27535d95ad768a486022d215675d811&language=en-US&query=${myContents}&page=1&include_adult=false`
    return jsonResponse.data;  























async function getResults(searchTerm) {
    searchTerm.preventDefault();
    const offset = currentApiPage * pageSize;
    const response = await fetch(`https://api.themoviedb.org/3/search/company?api_key=${f27535d95ad768a486022d215675d811}&query=fight&page=1`)
    const jsonResponse = await response.json();

    console.log(jsonResponse)
    //search query
    //different link for now playing 
    //use base url + path 
    //
    //foreach on results
   // `https://api.themoviedb.org/3/search/movie?api_key=f27535d95ad768a486022d215675d811&language=en-US&query=${myContents}&page=1&include_adult=false`
    return jsonResponse.data;  
}
var selectedEl
/** 
//i want to get to the path and to do that loop through jsonResponse.data
//`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${this is the image path that can be got by }`
function displayResults(results) {
    const MovieHTMLString = results.map(gif => `
        <div class="gif">
            <img src="${gif.images.original.url}" />
        </div>
    `).join('');

    gifAreaDiv.innerHTML = gifAreaDiv.innerHTML + gifsHTMLString;
}
console.log(jsonResponse.data)
console.log(myContents)
*/