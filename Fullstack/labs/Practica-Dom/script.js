// 1. Generar array con peliculas iniciales
const movies = ["Seven", "Origen", "The Shining", "Amelie", "Interestelar", "El Padrino"];
console.log(movies);

// 2. Seleccionar elementos del DOM
const movieList = document.getElementById("movie-list");
const movieInput = document.getElementById("movie-input");
const addMovieBottom = document.getElementById("add-movie-btn");

// 3. Funcion para mostar peliculas en la lista y limpiamos la lista antes de llenarla de nuevo
function renderMovies() {
    movieList.innerHTML = "";
    movies.forEach((movie) => {
        const li = document.createElement("li");
        li.textContent= movie;
        movieList.appendChild(li);
    })
}

// 4. Añadir movie y que se actualice la lista
function addMovie() {
    const newMovie = movieInput.value.trim();
    if (newMovie !== "") {
        movies.push(newMovie);
        renderMovies()
        movieInput.value = "";
    }
}


//5. Agregar evento al boton de agregar movie
addMovieBottom.addEventListener("click", addMovie);

//Arranque inicial

renderMovies();

console.log(movieInput);