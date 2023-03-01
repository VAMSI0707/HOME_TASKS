describe('fetchYoutubeVideos', () => {
    let totalVideoContainer;
    var fixture;
    beforeEach(() => {
        fixture = `<div class="search-container">
        <form id="search-form">
            <input type="text" id="search-box" placeholder="Search Youtube">
            <input type="submit" value="search" id="search-button">
        </form>
    </div>
    <div id="total-video-container">
    </div>
    <div id="pagination-container">
        <button id="prev-button">Previous</button>
        <button id="next-button">Next</button>
    </div>`;
        setFixtures(fixture);
    });
    it('should fetch videos', (done) => {
        const searchValue = 'football';
        const expectedVideoCount = 15;
        console.log("hi");
        expect($('#total-video-container')).toBeInDOM();
        fetchYoutubeVideos(searchValue)
            .then(() => {
                expect(totalVideoContainer.childElementCount).toBe(expectedVideoCount);
                done();
            })
            .catch((error) => {
                done.fail(error);
            })
    });
});

// describe('displayVideos', () => {
//     let totalVideoContainer;
//     beforeEach(() => {
//         totalVideoContainer = document.createElement('div');
//         totalVideoContainer.id = "total-video-container";
//         document.body.appendChild(totalVideoContainer);

//     });
//     it('should create a container for each video', () => {
//         const mockVideos = [{
//             "kind": "youtube#searchResult",
//             "etag": "nyciafbCbYSw0spuPzFvezLf848",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "FLEY6riPilA"
//             },
//             "snippet": {
//                 "publishedAt": "2023-02-23T11:13:39Z",
//                 "channelId": "UCX7NrBIGUezEJxDK3vCZa7Q",
//                 "title": "Unusual Moments in Football",
//                 "description": "Follow us! • Instagram - https://instagram.com/score90 • TikTok - https://tiktok.com/@score90 Score 90 is a global football ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/FLEY6riPilA/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/FLEY6riPilA/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/FLEY6riPilA/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "Score 90",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2023-02-23T11:13:39Z"
//             }
//         },
//         {
//             "kind": "youtube#searchResult",
//             "etag": "PcbAACXDiSscPDWKPAYFp86DQkQ",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "MqfY-XO8YqA"
//             },
//             "snippet": {
//                 "publishedAt": "2023-02-23T11:51:09Z",
//                 "channelId": "UCHYhXiy8KYCuYgz3MvZrptQ",
//                 "title": "Funny Soccer Football Vines 2023 ● Goals l Skills l Fails",
//                 "description": "Funny Soccer Football Vines 2023 ○ Goals l Skills l Fails Funny,Soccer,Football,Vines,2023,Goals,Skills,Fials,Funny Football ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/MqfY-XO8YqA/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/MqfY-XO8YqA/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/MqfY-XO8YqA/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "Sim Mot",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2023-02-23T11:51:09Z"
//             }
//         }
//         ];
//         displayVideos(mockVideos);
//         let videoConatiners = document.querySelectorAll('.video-container');
//         expect(videoConatiners.length).toBe(2);
//         const videoTitle1 = videoConatiners[0].querySelector('p');
//         expect(videoTitle1.innerText).toBe(mockVideos[0].snippet.title);
//         const videoTitle2 = videoConatiners[1].querySelector('p');
//         expect(videoTitle2.innerText).toBe(mockVideos[1].snippet.title);
//     });
// });

// describe("Calculator",function(){
//     var calculator;
//     beforeEach(function(){
//         calculator = new Calculator();
//     });

//     it("Should add two numbers", function(){
//         var result = calculator.add(4,5);
//         expect(result).toBe(9);
//     });
//     it("should subtract two numbers",function(){
//         var result=calculator.sub(9,5);
//         expect(result).toBe(4);
//     });
// })