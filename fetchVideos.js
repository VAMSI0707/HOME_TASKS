//Description-
//Write unit tests for the youtube search api 
const fetchYoutubeVideos=async function(searchValue,apiKey,videosPerPage,token = '') {

    let url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&maxResults=${videosPerPage}&q=${searchValue}`;
    if (token === 'prevPage' && pageToken.prevPageToken) {
        url += `&pageToken=${pageToken.prevPageToken}`;
        console.log(url);
    } else if (token === 'nextPage' && pageToken.nextPageToken) {
        url += `&pageToken=${pageToken.nextPageToken}`;
        console.log(url);
    }
    const response = await fetch(url);
    const data = await response.json();
    const videos = data.items;
    pageToken = {
        prevPageToken: data.prevPageToken,
        nextPageToken: data.nextPageToken,
    };
    const resultHtml=displayVideos(videos);
    return resultHtml;
}
function displayVideos(videos) {
    const totalVideoContainer=document.createElement('div');
    totalVideoContainer.setAttribute('id','result-video-container');
    videos.forEach(video => {
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
        const videoImg = document.createElement('img');
        videoImg.src = video.snippet.thumbnails.default.url;
        const videoDetailsContainer = document.createElement('div');
        const videoTitle = document.createElement('p');
        videoTitle.innerText = video.snippet.title;
        const videoAuthor = document.createElement('p');
        videoAuthor.innerText = video.snippet.channelTitle;
        const videoDescription = document.createElement('p');
        videoDescription.innerText = video.snippet.description;
        const releaseDate = document.createElement('p');
        releaseDate.innerText = video.snippet.publishedAt.slice(0, 10);
        const videoLink = document.createElement('a')
        videoLink.href = `https://www.youtube.com/watch?v=${video.id.videoId}`;
        videoLink.innerText = "Click here to watch";
        videoAuthor.setAttribute('class','video-author');
        videoTitle.setAttribute('class','video-title');
        videoDescription.setAttribute('class','video-description');
        videoAuthor.setAttribute('class','video-author');
        releaseDate.setAttribute('class','release-date');
        videoDetailsContainer.append(videoTitle, videoDescription, videoAuthor, releaseDate, videoLink);
        videoContainer.append(videoImg, videoDetailsContainer);
        totalVideoContainer.append(videoContainer);
    });
    return totalVideoContainer;
}
