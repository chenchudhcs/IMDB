/**
 * Created by Sravani on 5/12/2017.
 */
import axios from 'axios';
import React from "react";

import {STARWARS_FILMS} from "../constants/actionTypes"
import * as URL from "../constants/api";

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

