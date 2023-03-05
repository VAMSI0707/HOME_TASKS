const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ac44f4a0c9a341af96b9a85adced1884`;
export function fetchHeadLines() {
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            const headlinesList=data.articles.map(article=>article.title);
            const headlinesContainer=document.querySelector('.headlines-container');
            headlinesContainer.innerHTML=headlinesList.join("<br>");

        });
}
