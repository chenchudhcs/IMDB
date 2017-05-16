/**
 * Created by Sravani on 5/12/2017.
 */
import axios from 'axios';
import React from "react";

import {STARWARS_FILMS} from "../constants/actionTypes"
import * as URL from "../constants/api";

/*

function receiveStarwarsFilms(data) {

    return {
        type: STARWARS_FILMS,
        payload: data
    };
}


function resetStarwarFilms()
{
    return {
        type: RESET_STARWARS_FILMS,
        payload: true
    };
}


export function fetchStarwarFilms() {
    return function (dispatch) {

        dispatch(resetStarwarFilms());

        axios.get(URL.films)
            .then(res => {
                console.log("response for fetchStarwarFilms Action ", res.data);
                dispatch(receiveStarwarsFilms(res.data));

            })
            .catch((err) => {//error
                console.log("error in fetchStarwarFilms Action :  ", err);

            });
    }


}*/

export function fetchStarwarFilms() {
    return function(dispatch) {
        axios.get(URL.films)
            .then((res) => {//success
                dispatch({
                    type:STARWARS_FILMS ,
                    payload: res.data
                });
            })
            .catch((err) => {//error
                console.log("fetchFilms Action : films service failed: ", err);
            });
    }
}

