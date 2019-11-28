import i118n from '../../components/i118n';

const API_TOKEN = "b4d4c267aea648659aca8853a1f95666";

export async function getFilmsFromSearchedText(text) {

  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language='+ i118n.locale +'&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export async function getTrailersFromMovie(id) {
  const url = "https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=" + API_TOKEN + "&language="+i118n.locale;
  console.log("url", url);

  return fetch(url)
  .then((response) => response.json())
  .catch((error) => console.error(error) )
}

