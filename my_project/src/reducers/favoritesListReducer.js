import {deleteFromFirestore} from '../helpers/vendors/Firebase'
import { getMovieDetails } from '../helpers/vendors/TMDB'

let initialState = {
    favorites : [],
    status : null
}

const favoritesListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDFAV":
            state.favorites.push({idFromApi: action.payload.id, ...action.payload})
            console.log("state", state.favorites);
            return state
        case "SETFAV": 
            let tmpFav = [];
            action.payload.forEach((item) => {
                getMovieDetails(item.idFromApi).then((data) => {
                    let concatPosterPath = "http://image.tmdb.org/t/p/w1280/"
                    let dateTmp = data.release_date
                    let dateFormat = (dateTmp!=undefined? dateTmp.substring(0, 4) : '')
                    let format = {
                        idFromApi : data.id.toString(),
                        id: data.id,
                        title: data.original_title,
                        date : dateFormat,
                        vote_average : data.vote_average,
                        popularity: data.popularity,
                        content : data.overview,
                        poster: concatPosterPath+""+data.poster_path,
                    }
                    tmpFav.push(format)});
            });
            state.favorites = tmpFav;
            return state;
        case "REMOVEFAV":
            let id = action.payload.id
            let tmpState = state.favorites
            let indexToRemove = ""
            tmpState.forEach((value, index) => {
                if(value.idFromApi==id){
                    indexToRemove = index
                }
            })
            tmpState.splice(indexToRemove, 1)
            const tmp = deleteFromFirestore(action.payload.username, id.toString()).then();
            return {...state, favorites: tmpState, status: 'removed'}
        default:
            return state

    }
}

export default favoritesListReducer;
