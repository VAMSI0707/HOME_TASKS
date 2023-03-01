function displayVideos(videos){
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
        videoDetailsContainer.append(videoTitle, videoDescription, videoAuthor, releaseDate, videoLink);
        videoContainer.append(videoImg, videoDetailsContainer);
        console.log(videoLink.innerText);
        totalVideoContainer.append(videoContainer);
    });
}