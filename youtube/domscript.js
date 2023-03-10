
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
document.addEventListener('DOMContentLoaded', function () {
    searchButton.addEventListener('click', () => {
        searchValue = searchBox.value;
        pageToken = '';
        totalVideoContainer.innerHTML="";
        event.preventDefault();
        fetchYoutubeVideos(searchValue,apiKey,videosPerPage).then(response=>{
            console.log(response);
            totalVideoContainer.append(response);
        });
        
    });
    prevButton.addEventListener('click', () => {
        totalVideoContainer.innerHTML="";
        event.preventDefault();
        fetchYoutubeVideos(searchValue,apiKey,videosPerPage,'prevPage').then(response=>{
            totalVideoContainer.append(response);
        });
        

    });
    nextButton.addEventListener('click', () => {
        totalVideoContainer.innerHTML="";
        event.preventDefault();
        fetchYoutubeVideos(searchValue,apiKey,videosPerPage,'nextPage').then(response=>{
            totalVideoContainer.append(response);
        });

    });
});







