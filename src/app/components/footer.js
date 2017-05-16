import React from "react";

export class Footer extends React.Component {
    render(){
        return(
            <div className="text-center">
                <footer className="footer">
                   <p> Copyright  &copy;2017, API from <a href="https://www.omdbapi.com/">IMDB</a></p>
                </footer>
            </div>
        );
    }
}