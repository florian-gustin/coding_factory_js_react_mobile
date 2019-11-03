const axios = require('axios').default;

const API_TOKEN = "b4d4c267aea648659aca8853a1f95666";

export function getFilmsFromSearchedText(text) {

  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=en&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
