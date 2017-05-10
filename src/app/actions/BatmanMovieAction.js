/**
 * Created by Sravani on 4/19/2017.
 */
import axios from 'axios';
import React from "react";
import {BATMAN_MOVIES} from "../constants/actionTypes"

import * as URL from "../constants/api";

function receiveActiveAd(data) {

    return {
        type: BATMAN_MOVIES,
        payload: data
    };
}

export function fetchMovies() {
    return function (dispatch) {
        axios.get(URL.MOVIES)
            .then(res => {
            console.log("response for fetchMovies Action ", res.data);
        dispatch(receiveActiveAd(res.data.Search));

    })
        .catch((err) => {//error
            console.log("error in fetchMovies Action :  ", err);

    });
    }


}
