import React from 'react';
import {Header} from './header';
import {Footer} from './footer';
export default class Root extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}




