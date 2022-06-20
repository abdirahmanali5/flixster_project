console.log("sanity check");
// const submit = document.querySelector("#search-input");
//const MovieAreaDiv = document.querySelector("#movie-area");
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const movieArea = document.querySelector("#movie-grid");
const showMeMoreBtn = document.querySelector("#show-me-more-btn");
 const movieCard = document.querySelector("#movie-card")
const pageSize = 9;

const movieSearchUrl = "https://api.themoviedb.org/3/search/movie"
const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key="
const movieImageUrl = "https://api.themoviedb.org/3/movie";

var currentApiPage = 1;
var currentSearchTerm = '';

//onsubmit = (event) => {
//    console.log(event)
//}
//submit.addEventListener("submit",onsubmit)



const api_key = "f27535d95ad768a486022d215675d811";
console.log("hey1");
async function getResults(event) {

    try{
        const offset = currentApiPage * pageSize;
        event.preventDefault();
        console.log("hey2");
        //mov.preventDefault();
        console.log("sanity check2");
        // const offset = currentApiPage * pageSize;
        // let url = `api_key`;
        let response = await fetch(nowPlayingUrl + api_key + "&page=" +currentApiPage );
        var jsonResponse = await response.json();
        
        console.log(jsonResponse);
        var result = jsonResponse.results
        console.log(result)
        console.log("hey3");
        jsonResponse.results.map(movie =>{displayResults(movie)})
    }
    catch(error){
        console.log(error)
    }
    
}
//getResults();
function displayResults(e){
    console.log("sanity check3");
    let urlPath = `https://www.themoviedb.org/t/p/w440_and_h660_face`;
    let Title = e.title;
    let Rated = e.vote_average;
    console.log(Title)
    console.log(Rated)
    
    movieArea.innerHTML += `
    <div class="movie-card">
    <img class="movie-poster" src="https://www.themoviedb.org/t/p/w440_and_h660_face${e.poster_path}">'
    <div class="movieDetails"
     <h3 class="movie-votes">Rating: ${Rated}</h3>
     <h3 class="movie-title">${Title}</h3>
     
     </div>
`
}

async function getMovie(searchTerm) {
    const offset = currentApiPage * pageSize;
    //https://api.themoviedb.org/3/search/movie
    const response_m = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${api_key}&page=${currentApiPage}`);
    //const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=${pageSize}&offset=${offset}&api_key=${apiKey}`);
    const jsonResponse2 = await response_m.json();
    console.log(jsonResponse2)
    
    jsonResponse2.results.map(movie =>{displayMovie(movie);});
    //return jsonResponse2.data;
}

function displayMovie(movieDb) {
    //let urlPath = `https://www.themoviedb.org/t/p/w440_and_h660_face`;
    let Title = movieDb.title;
    let Rated = movieDb.vote_average;
    console.log(Rated)
    console.log(Title)
    movieArea.innerHTML += `
        <div class="movie-card">
        <img class="movie-poster" src="https://www.themoviedb.org/t/p/w440_and_h660_face${movieDb.poster_path}">'
        <div class="movieDetails"
        <h3 class="movie-votes">Rating: ${Rated}</h3>
        <h3 class="movie-title">${Title}</h3>
         
        </div>
    `
}

showMeMoreBtn.addEventListener('click', handleShowMeMoreClick);
function handleShowMeMoreClick(event) {
    event.preventDefault();
    currentApiPage++;

    displayMovie(results);
    if(searchInput.value == ''){
       getMovie();

    }   
     else {
        currentApiPage++
        getResults(searchInput.value);
     }
  
   // console.log(currentApiPage);
}
async function handleFormSubmit(eventz) {
    eventz.preventDefault();
    movieArea.innerHTML = '';
    var currentSearchTerm = searchInput.value;
    console.log(currentSearchTerm)
    getMovie(currentSearchTerm);
    searchInput.value = '';
    currentApiPage++;
    
    // showMeMoreBtn.classList.remove('hidden');
}
function Clear(r){
if(searchInput.value = ""){
   searchInput.value = '';
   movieCard.innerHTML = "";
   getResults(searchInput);

}

}

searchForm.addEventListener('submit', (event) => {
    handleFormSubmit(event);
})

showMeMoreBtn.addEventListener('click', handleShowMeMoreClick);


window.addEventListener('load',(event) => {
    getResults(event);
} )









//<button class="show-more" onclick="showPopUp(${data.id})">Show Info</button>
/*
async function handleFormSubmit(event) {
    console.log("sanity check");
    event.preventDefault();
    MovieAreaDiv.innerHTML = '';
    currentSearchTerm = searchInput.value;
    const results = await getResults(currentSearchTerm);
    displayResults(results);
    searchInput.value = '';
    currentApiPage++;
 //   showMeMoreBtn.classList.remove('hidden');
}


/*

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

*/


















/*
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