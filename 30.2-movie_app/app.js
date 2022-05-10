const apiURL = `http://www.omdbapi.com/?i=tt3896198&apikey=29b8d5f5`;
// http://www.omdbapi.com/?apikey=[yourkey]&

const btn = document.querySelector("button");
const title = document.querySelector(".movie-title");
const poster = document.querySelector("img");
const genre = document.querySelector(".genre");
const year = document.querySelector(".year");
const plot = document.querySelector(".plot");
const director = document.querySelector(".director");
const actors = document.querySelector(".actors");
const ratings = document.querySelector(".ratings");
const input = document.querySelector("input");

const getMovie = async () => {
  try {
    const response = await fetch(`${apiURL}&t=${input.value}`);
    const data = await response.json();
    console.log(response);

    console.log("hi", data);
    console.log(input.value);
    poster.src = data.Poster;
    genre.textContent = `Genre: ${data.Genre}`;
    year.textContent = `Year: ${data.Year}`;
    plot.textContent = `Plot: ${data.Plot}`;
    director.textContent = `Director: ${data.Director}`;
    actors.textContent = `Actors: ${data.Actors}`;
    ratings.textContent = `Ratings:
     Rotten Tomattoes ${data.Ratings[1].Value}
      IMDB ${data.Ratings[0].Value}
      Metacritic: ${data.Ratings[2].Value}  `;
    if (data.Error === "Movie not found!") {
      genre.textContent = `The movie doesn't exist!`;
    }
  } catch (e) {
    console.log(e);
  }
};
btn.addEventListener("click", getMovie);
