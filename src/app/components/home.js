import React from 'react';
import {Carousel} from "react-bootstrap";

export class Home extends React.Component {
    render(){
        let divStyle = {
            display:"inline"
        };

        return(
            <div>
                <Carousel>
                    <Carousel.Item>

                        <img width={1400} height={700} alt="900x500" src={'https://s3-us-west-2.amazonaws.com/imdbrepository/imdb/spiderman.jpg'}/>
                        <Carousel.Caption>
                            <h3>Spider Man</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1400} height={700} alt="900x500" src={'https://s3-us-west-2.amazonaws.com/imdbrepository/imdb/zootopiagood.jpg'}/>
                        <Carousel.Caption>
                            <h3>Zootopia</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1400} height={700} alt="900x500" src={'https://s3-us-west-2.amazonaws.com/imdbrepository/imdb/frozen.jpg'}/>
                        <Carousel.Caption>
                            <h3>Frozen</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="container-fluid bg-1 text-center">
                    <h3 className="margin">IMDB Movies</h3>
                    <p>IMDb, the world's most popular and authoritative source for movie, TV and celebrity content.
                        It depicts the adventures of various characters "a long time ago in a galaxy far, far away." </p>
                </div>
                <div className="container-fluid bg-2 text-center">
                    <br/><br/>
                    <img src={'https://s3-us-west-2.amazonaws.com/imdbrepository/imdb/IMDB.PNG'} className="img-responsive img-circle margin grow" style={divStyle} alt="MoviesList" width="350" height="350"/>
                    <br/><br/>
                    <br/>
                </div>
                <div className="container-fluid bg-3 text-center">
                    <h3 className="margin">IMDB Posters?</h3><br/>
                    <div className="row">
                        <div className="col-sm-4">
                            <p>The Azure Angel II was a modified Jedi Delta-7 Aethersprite-class light interceptor piloted by Anakin Skywalker during the Clone Wars.</p>
                            <img src={'https://s3-us-west-2.amazonaws.com/imdbrepository/imdb/Zootopia.jpg'} className="img-responsive margin"  alt="Image"/>
                        </div>
                        <div className="col-sm-4">
                            <p>The Corellian Corvette Tantive IV, sometimes identified as a blockade runner, is the first ship to appear in Star Wars. Darth Vader (David Prowse) and his stormtroopers capture the ship and its crew.</p>
                            <img src={'https://s3-us-west-2.amazonaws.com/imdbrepository/imdb/deadpool.jpg'} className="img-responsive margin" alt="Image"/>
                        </div>
                        <div className="col-sm-4">
                            <p>A modified Cokgjhrellian HWK-290 used by Kyle Katarn and Jan Ors in the Star Wars: Dark Forces and Star Wars: Dark Forces II: Jedi Knight video games.</p>
                            <img src={'https://s3-us-west-2.amazonaws.com/imdbrepository/imdb/Zootopia1.jpg'} className="img-responsive margin"  alt="Image"/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}