import {STARWARS_FILMS,RESET_STARWARS_FILMS} from "../constants/actionTypes";

const INITIAL_STATE = {films: []};

export default function (state = INITIAL_STATE, action) {
    // console.log(" Starwars : reducer",action.payload);

    switch (action.type) {

        case STARWARS_FILMS:
            return {
                state,
                films: [
                    action.payload.results
                ]
            };
        default:
            return state;
    }
}


