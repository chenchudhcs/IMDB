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
        this.onClickBatmanHandler =  this.onClickBatmanHandler.bind(this);
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
        console.log("response", this.props.batsmanMovies);
        return this.props.batsmanMovies || [];
    }

    onClickBatmanHandler(e, imdbID) {
        console.log("BatmanContainer:  onClickBatmanHandler: imdbId", imdbID);
        e.preventDefault();
        this.setState({ movieId: imdbID });
    }

    renderPosters({ Poster, Title, Year, imdbID }) {
        return <div className="flex-item">
            <a target="_blank" onClick={(e) => (this.onClickBatmanHandler(e, imdbID))}>
                <img src={Poster} alt="Batman" width="200" height="200"/>
            </a>
            <div className="desc">{Title} {Year}</div>
        </div>
    }

    renderMovies() {
        return this.getListOfMovies().map((movie, i) => {
            return (
                <div className="row">
                    <div key={i}>
                        {this.renderPosters(movie)}
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="video"><VideoComponent movieId={this.state.movieId}/></div>
                <div className="flex-container">
                    {this.renderMovies()}
                </div>
            </div>
        );
    }
}
BatmanContainer.propTypes = {

    batsmanMovies: PropTypes.array
};

const mapStateToProps = (state) => {
    return {batsmanMovies: state.batsmanMovies.movies[0]}
};
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchMovies}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BatmanContainer);
