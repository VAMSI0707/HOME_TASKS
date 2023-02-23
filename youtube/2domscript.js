const videosPerPage = 15;
//AIzaSyC9q4aTHdWSjdDb94tOeJ_7ecjrvVUm56A-vs
//AIzaSyBou69TyTIwDNGXxMMyM78GcaWgyNACvHA-kvs
const apiKey = "AIzaSyC9q4aTHdWSjdDb94tOeJ_7ecjrvVUm56A";
const searchBox = document.getElementById('search-box');
const searchButton = document.getElementById('search-button');
const totalVideoContainer = document.getElementById('total-video-container');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let searchValue = '';
let pageToken;
searchButton.addEventListener('click', () => {
    searchValue = searchBox.value;
    pageToken = '';
    fetchYoutubeVideos(searchValue);
});
prevButton.addEventListener('click', () => {
    fetchYoutubeVideos(searchValue, 'prevPage');
});
nextButton.addEventListener('click', () => {
    fetchYoutubeVideos(searchValue, 'nextPage');
});




