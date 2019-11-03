const axios = require('axios').default;

const API_TOKEN = "b4d4c267aea648659aca8853a1f95666";

export function getFilmsFromSearchedText(text) {

  const url = "https://api.themoviedb.org/3/search/movie?"

  axios.get('/user', {
    params: {
      api_key: API_TOKEN,
      language: "en",
      query: text,
    }
  })
    .then(function (response) {
      response.json();
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

}
