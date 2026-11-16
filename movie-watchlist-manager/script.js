const addMovieBtn = document.getElementById("addMovieBtn");
const movieInput = document.getElementById("movieInput");
const movieList = document.getElementById("movieList");

addMovieBtn.addEventListener("click", function () {

    const movieValue = movieInput.value.trim();

    if (movieValue === "") {
        alert("Please insert a movie title");
        return;
    }

    const moviecontainer = document.createElement("li");
    const movietitle = document.createElement("h1");

    movietitle.textContent = movieValue;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        moviecontainer.remove();
    });

    const watchedButton = document.createElement("button");
    watchedButton.textContent = "Watched";

    watchedButton.addEventListener("click", function () {
        moviecontainer.classList.toggle("watched");
    });

    moviecontainer.appendChild(movietitle);
    moviecontainer.appendChild(deleteButton);
    moviecontainer.appendChild(watchedButton);

    movieList.appendChild(moviecontainer);

    movieInput.value = "";
});
