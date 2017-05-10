import { combineReducers } from 'redux';
import BatmanMoviesReducer from "./BatmanMoviesReducer"

const appReducer = combineReducers({
  batsmanMovies: BatmanMoviesReducer
});

export default appReducer;
