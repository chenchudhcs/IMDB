/**
 * Created by Sravani on 4/19/2017.
 */
import {fetchMovies} from "../actions/BatmanMovieAction";
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {VideoComponent} from "../components/VideoComponent"

class BatmanContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onClickBatmanHandler = this.onClickBatmanHandler.bind(this);
        this.state = {
            movieId: "default"
        };
        this.renderMovies = this.renderMovies.bind(this);
        this.getListOfMovies = this.getListOfMovies.bind(this);
    }

    componentWillMount() {
        this.props.fetchMovies();
    }

    getListOfMovies() {
        // console.log("batmancontainer: response", this.props.batsmanMovies);
        return this.props.batsmanMovies || [];
    }

    onClickBatmanHandler(e, imdbID) {
        // console.log("BatmanContainer:  onClickBatmanHandler: imdbId", imdbID);
        e.preventDefault();
        this.setState({movieId: imdbID});
    }


    renderMovies() {
        return this.getListOfMovies().map((movie, i) => {
            return (
                <div key={i} className="row">
                    <div className="col-xs-6 movievideo">
                        <a target="_blank" onClick={(e) => (this.onClickBatmanHandler(e, movie.id))}>
                            <img src={movie.Post} height="150px" width="200px" alt="Batman"/>
                        </a>
                    </div>
                    <div className="col-xs-6 movietitle">
                        <div className="desc">{movie.Title} {movie.Year}</div>
                    </div>
                    <br/>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-9 video embed-responsive-item"><VideoComponent
                            movieId={this.state.movieId}/></div>
                        <div className="col-xs-3  movievideolist">
                            {this.renderMovies()}
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

BatmanContainer.propTypes = {

    batsmanMovies: PropTypes.array
};

const mapStateToProps = (state) => {
    return {batsmanMovies: state.batsmanMovies.movies}
};
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchMovies}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BatmanContainer);