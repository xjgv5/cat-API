const APIURL = "https://api.thecatapi.com/v1/images/search"
let btn = document.querySelector("#prrr")

btn = addEventListener("click", function(event){
    fetch(APIURL)
    .then(response => response.json())
    .then(data => {

        const img = document.querySelector("#cat-container")
        img.src = data[0].url
        
    })
})

