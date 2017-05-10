/**
 * Created by Sravani on 4/19/2017.
 */

import {BATMAN_MOVIES} from "../constants/actionTypes";

const INITIAL_STATE = {movies: []};

export default function (state = INITIAL_STATE, action) {
// console.log("in reducer",action.payload);

    switch (action.type) {
        case BATMAN_MOVIES:
            return {
                ...state,
                movies: [
                    ...state.movies, action.payload
                ]
            };

        default:
            return state;
    }
}


