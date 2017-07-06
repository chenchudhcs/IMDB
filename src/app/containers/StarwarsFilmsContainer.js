import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {fetchStarwarFilms} from "../actions/starwarsFilmsAction"
class StarwarsFilmsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.renderFilms = this.renderFilms.bind(this);
    }

    componentWillMount() {
        this.props.fetchStarwarFilms();
    }

    getFilms() {
        return this.props.starwarsFilms[0] || [];

    }

    renderFilms() {
        return this.getFilms().map((film, i) => {
            // console.log("StarwarsFilmsContainer : renderFilms ", film.title);

            return (
                <ul className="list-group " key={i}>
                    <li className="list-group-item filmlist">
                        <div>{film.title}</div>
                    </li>
                </ul>
            );
        });

    }


    render() {
        // console.log("StarwarsFilmsContainer: API response", this.props.starwarsFilms);
        return (
            <div className="container-fluid filmspage">
                <div className="row">
                    <div className="col-xs-4 ">
                        {this.renderFilms()}
                    </div>
                    <div className="col-sm-6 ">
                        <br/>
                        <img src="https://s3-us-west-1.amazonaws.com/imdbproject/starwars.jpg" className="img-responsive margin swing" style={{display:"inline"}} alt="MoviesList" width="350" height="350"/>
                    </div>
                </div>
            </div>
        );
    }
}
StarwarsFilmsContainer.propTypes = {

    starwarsFilms: PropTypes.array
};

const mapStateToProps = (state) => {
    return {starwarsFilms: state.starwarsFilms.films}
};
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchStarwarFilms}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(StarwarsFilmsContainer);
