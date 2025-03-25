// MOVIE SECTION
// PREPARE DATA FOR API
const movieList = document.getElementById("movie-list");
const movieFilter = document.getElementById("movie-filter");

//Fetch data from API
const fetchData = async (query) => {
  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data");
  }
};

//Create a movie elements

const createList = (movies) => {
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    if (movie.show.image.medium) {
      const element = document.createElement("div");
      element.classList.add("movie-item");

      element.innerHTML = `<img src="${movie.show.image.medium}" alt="${movie.show.name}">
        <p>${movie.show.name}</p>`;

      movieList.appendChild(element);
    }
  });
};

//Event listener to change filter

movieFilter.addEventListener("change", async (event) => {
  const selectedValue = event.target.value;
  if (selectedValue) {
    const movies = await fetchData(selectedValue);
    createList(movies);
  }
});
