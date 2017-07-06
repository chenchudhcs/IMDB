/**
 * Created by Sravani on 4/19/2017.
 */
import React from "react";

import {BATMAN_MOVIES} from "../constants/actionTypes";
import * as URL from "../constants/api";
const batman =
    [{
        "Post": "https://s3-us-west-1.amazonaws.com/imdbproject/batman1.jpg",
        "Title": "Batman Beyond: Return of the Joker",
        "id": "tt2166834",
        "Year": "2017"
    },
        {
            "id": "tt4853102",
            "Post": "https://s3-us-west-1.amazonaws.com/imdbproject/batman10.jpg",
            "Title": "Batman: Mask of the Phantasm ",

            "Year": "2016"

        },
        {
            "id": "tt0106364",
            "Title": "Batman Gotham Knight",
            "Post": "https://s3-us-west-1.amazonaws.com/imdbproject/batman2.jpg",
            "Year": "2015"

        },
        {
            "id": "tt0060153",
            "Title": "Batman Under the Red Hood",
            "Year": "2014",
            "Post": "https://s3-us-west-1.amazonaws.com/imdbproject/batman3.jpg"

        },
        {
            "id": "tt1672723",
            "Year": "2013",

            "Title": "The Batman vs. Dracula",
            "Post": "https://s3-us-west-1.amazonaws.com/imdbproject/batman4.jpg"

        },
        {
            "id": "tt3139086",
            "Year": "2012",
            "Title": "The Batman Superman Movie: World's Finest",
            "Post": "https://s3-us-west-1.amazonaws.com/imdbproject/batman5.jpg"

        },
        {
            "id": "tt1117563",
            "Year": "2011",
            "Title": "Superman Batman Public Enemies ",
            "Post": "https://s3-us-west-1.amazonaws.com/imdbproject/batman6.jpg"


        },
        {
            "id": "tt1673430",
            "Year": "2010",
            "Title": "Batman Mystery of the Batwoman",
            "Post": "https://s3-us-west-1.amazonaws.com/imdbproject/batman7.jpg"


        },
        {
            "id": "tt0147746",
            "Year": "2009",
            "Title": "Superman Batman Apocalypse",
            "Post": "https://s3-us-west-1.amazonaws.com/imdbproject/batman8.jpg"


        },
        {
            "id": "tt1568322",
            "Year": "2008",
            "Title": "Batman Beyond The Movie",
            "Post": "https://s3-us-west-1.amazonaws.com/imdbproject/batman9.jpg"


        }


    ];

function receiveBatmanMovies(data) {

    return {
        type: BATMAN_MOVIES,
        payload: data
    };
}

export function fetchMovies() {


    return function (dispatch) {
        dispatch(receiveBatmanMovies(batman));


    }


}

/*axios.get(URL.MOVIES)
 .then(res => {
 console.log("response for fetchMovies Action ", res.data);
 dispatch(receiveBatmanMovies(res.data.Search));

 })
 .catch((err) => {//error
 console.log("error in fetchMovies Action :  ", err);

 });*/
