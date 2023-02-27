describe('displayVideos', () => {
    let videos;
    beforeEach(() => {
        videos = [{
            "kind": "youtube#searchResult",
            "etag": "nyciafbCbYSw0spuPzFvezLf848",
            "id": {
                "kind": "youtube#video",
                "videoId": "FLEY6riPilA"
            },
            "snippet": {
                "publishedAt": "2023-02-23T11:13:39Z",
                "channelId": "UCX7NrBIGUezEJxDK3vCZa7Q",
                "title": "Unusual Moments in Football",
                "description": "Follow us! • Instagram - https://instagram.com/score90 • TikTok - https://tiktok.com/@score90 Score 90 is a global football ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/FLEY6riPilA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/FLEY6riPilA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/FLEY6riPilA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Score 90",
                "liveBroadcastContent": "none",
                "publishTime": "2023-02-23T11:13:39Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "PcbAACXDiSscPDWKPAYFp86DQkQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "MqfY-XO8YqA"
            },
            "snippet": {
                "publishedAt": "2023-02-23T11:51:09Z",
                "channelId": "UCHYhXiy8KYCuYgz3MvZrptQ",
                "title": "Funny Soccer Football Vines 2023 ● Goals l Skills l Fails",
                "description": "Funny Soccer Football Vines 2023 ○ Goals l Skills l Fails Funny,Soccer,Football,Vines,2023,Goals,Skills,Fials,Funny Football ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/MqfY-XO8YqA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/MqfY-XO8YqA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/MqfY-XO8YqA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Sim Mot",
                "liveBroadcastContent": "none",
                "publishTime": "2023-02-23T11:51:09Z"
            }
        }
        ]
    });
    it('should create a container for each video',()=>{
        const totalVideoContainer=document.getElementById('total-video-container');
        const totalConatiners=totalVideoContainer.querySelectorAll('.video-container');
        expect(totalConatiners.length).toBe(0);
        displayVideos(videos);
        expect(totalConatiners.length).toBe(2);
    });
});