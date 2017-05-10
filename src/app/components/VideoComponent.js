import React, { PropTypes } from 'react';
import MovieUrls from '../constants/movieUrls';

export class VideoComponent extends React.Component {
    static defaultProps = {
        movieId: "default"
    };

    static propTypes = {
        movieId: PropTypes.string
    };

    render() {
        console.log('VideoComponent : this.props', this.props, MovieUrls);
        return (
            <div>
                <video type="video/mp4" autoPlay="true" width="1000" height="500" src={MovieUrls[this.props.movieId]} controls>
                </video>
            </div>
        );
    }
}