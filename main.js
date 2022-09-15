const movies = document.querySelector('.movies')
// const boxes = document.createElement('a').setAttribute('href', '#').classList.add('box')

const getMovies = async () => {
    
    const api_key = '86783762237ff3e97be67f3473685c59'
    const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)).json()
    
    results.map(({backdrop_path, title}) => {
        const box = document.createElement('a')
        movies.appendChild(box)
        box.setAttribute('href', '#')
        box.classList.add('box')
        box.innerHTML = `
            <div class="img-box">
                <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" alt="${backdrop_path}">
            </div>
            <div class="title-box">
                ${title}
            </div>
        `
    })
    console.log(results)
}

const body = document.body;

// boxes.addEventListener("click", function(){
//     alert(1)
// })

// console.log(box)

getMovies()