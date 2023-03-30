import './style.css';
const headLinesButton = document.getElementById("headlines-button");
headLinesButton.addEventListener('click', () => {
    import('./loadheadlines.js')
        .then((headlines) => {
            headlines.fetchHeadLines();

        });
});