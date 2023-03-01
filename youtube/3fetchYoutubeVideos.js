function fetchYoutubeVideos(searchValue, token = '') {
    event.preventDefault();

    let url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&maxResults=${videosPerPage}&q=${searchValue}`;

    if (token === 'prevPage' && pageToken.prevPageToken) {
        url += `&pageToken=${pageToken.prevPageToken}`;
        console.log(url);
    } else if (token === 'nextPage' && pageToken.nextPageToken) {
        url += `&pageToken=${pageToken.nextPageToken}`;
        console.log(url);
    }
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            totalVideoContainer.innerHTML = '';
            const videos = data.items;
            console.log(data);
            pageToken = {
                prevPageToken: data.prevPageToken,
                nextPageToken: data.nextPageToken,
            };
            displayVideos(videos);
        })
        .catch(error => console.log(error));
}