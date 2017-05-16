import {combineReducers} from 'redux';
import BatmanMoviesReducer from "./BatmanMoviesReducer";
import StarwarsFilmsReducer from "./StarwarsFilmsReducer";

const appReducer = combineReducers({
    batsmanMovies: BatmanMoviesReducer,
    starwarsFilms: StarwarsFilmsReducer
});

export default appReducer;
