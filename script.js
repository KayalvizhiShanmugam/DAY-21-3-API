fetch("https://api.tvmaze.com/search/shows?q=girls")
.then((response) => response.JSON())
.then((data) =>{
    data.forEach(element => {
        const shows= {
            ...element,
            id : element.show.id,
            language : element.language,
            rating : element.rating
        }
        tvshows(shows)
    });
}).catch((error => console.log ("error")));

function tvshows({id,language,rating}){
    document.body.innerHTML +=`
    <div class="container">
    <div class="card">
    <div class="card-header">
    <h1>tvshows</h1>
    </div>
    <div class="info">
    <p><span>Id:<span/>${id}</p>
    <p><span>Language:<span/>${language}</p>
    <p><span>Rating:<span/>${rating}}</p>
    </div>
    </div>
    </div>`
}