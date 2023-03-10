describe("fetchYoutubeVideos", function () {
    let apiKey, searchValue, videosPerPage, pageToken, videos, response;
    beforeAll(function () {
        apiKey = "AIzaSyC9q4aTHdWSjdDb94tOeJ_7ecjrvVUm56A";
        videosPerPage = 15;
        searchValue = "javascript";
        spyOn(window, 'displayVideos');
        videos = [
            {
                "kind": "youtube#searchResult",
                "etag": "-SIJb9BmiJLqvpESHRk37gBnUJs",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "hKB-YGF14SY"
                },
                "snippet": {
                    "publishedAt": "2020-05-16T17:57:42Z",
                    "channelId": "UCeVMnSShP_Iviwkknt83cww",
                    "title": "JavaScript Tutorial In Hindi",
                    "description": "00:00 – Video Introduction 01:10 – JavaScript Introduction 02:43 – Basics of JavaScript 04:55 – Coding First Line of JavaScript ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/hKB-YGF14SY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/hKB-YGF14SY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/hKB-YGF14SY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CodeWithHarry",
                    "liveBroadcastContent": "none",
                    "publishTime": "2020-05-16T17:57:42Z"
                }
            },];
        response = { json: () => Promise.resolve({ items: videos }) };
        spyOn(window, 'fetch').and.returnValue(Promise.resolve(response));

    });
    it("should call displayVideos", async () => {
        await fetchYoutubeVideos(searchValue, apiKey, videosPerPage);
        expect(displayVideos).toHaveBeenCalled();
    });
    it("should call display videos with a specific parameter", async () => {
        await fetchYoutubeVideos(searchValue, apiKey, videosPerPage);
        expect(displayVideos).toHaveBeenCalledWith(videos);
    });

});
describe('displayVideos', () => {
    let videos, videoContainers, totalVideoContainer;
    beforeAll(function () {
        videos = [
            {
                "kind": "youtube#searchResult",
                "etag": "-SIJb9BmiJLqvpESHRk37gBnUJs",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "hKB-YGF14SY"
                },
                "snippet": {
                    "publishedAt": "2020-05-16T17:57:42Z",
                    "channelId": "UCeVMnSShP_Iviwkknt83cww",
                    "title": "JavaScript Tutorial In Hindi",
                    "description": "00:00 – Video Introduction 01:10 – JavaScript Introduction 02:43 – Basics of JavaScript 04:55 – Coding First Line of JavaScript ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/hKB-YGF14SY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/hKB-YGF14SY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/hKB-YGF14SY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CodeWithHarry",
                    "liveBroadcastContent": "none",
                    "publishTime": "2020-05-16T17:57:42Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "LaQLzL24l8145BcPmSLLOITuw8k",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "W6NZfCO5SIk"
                },
                "snippet": {
                    "publishedAt": "2018-04-24T02:37:33Z",
                    "channelId": "UCWv7vMbMWH4-V0ZXdmDpPBA",
                    "title": "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
                    "description": "Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. Want to master JavaScript? Get my complete ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/W6NZfCO5SIk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/W6NZfCO5SIk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Programming with Mosh",
                    "liveBroadcastContent": "none",
                    "publishTime": "2018-04-24T02:37:33Z"
                }
            }];
        totalVideoContainer = displayVideos(videos);
        videoContainers = totalVideoContainer.querySelectorAll('.video-container');

    });
    it('should create element for each and every item of videos array', () => {
        expect(videoContainers.length).toBe(videos.length);
    });
    it('should check the src attribute value of img element in video container', () => {
        for (let i = 0; i < videos.length; i++) {
            const video = videos[i];
            const videoContainer = videoContainers[i]; 
            expect(videoContainer.querySelector('img').src).toEqual(video.snippet.thumbnails.default.url);
        }
    });
    it('should check the video title value of element in video container', () => {
        for (let i = 0; i < videos.length; i++) {
            const video = videos[i];
            const videoContainer = videoContainers[i]; 
            expect(videoContainer.querySelector('p.video-title').innerText).toEqual(video.snippet.title);
        }
    });
    it('should check the video author value of element in video container', () => {
        for (let i = 0; i < videos.length; i++) {
            const video = videos[i];
            const videoContainer = videoContainers[i]; 
            expect(videoContainer.querySelector('p.video-author').innerText).toEqual(video.snippet.channelTitle);
        }
    });
    it('should check the video description value of element in video container', () => {
        for (let i = 0; i < videos.length; i++) {
            const video = videos[i];
            const videoContainer = videoContainers[i];
            expect(videoContainer.querySelector('p.video-description').innerText).toEqual(video.snippet.description);
        }
    });
    it('should check the release date value of element in video container', () => {
        for (let i = 0; i < videos.length; i++) {
            const video = videos[i];
            const videoContainer = videoContainers[i];
            expect(videoContainer.querySelector('p.release-date').innerText).toEqual(video.snippet.publishedAt.slice(0, 10));
        }
    });
    it('should check the href and innerText attribute values of link element in video container', () => {
        for (let i = 0; i < videos.length; i++) {
            const video = videos[i];
            const videoContainer = videoContainers[i];
            expect(videoContainer.querySelector('a').href).toEqual(`https://www.youtube.com/watch?v=${video.id.videoId}`);
            expect(videoContainer.querySelector('a').innerText).toEqual('Click here to watch');
        }
    });
});