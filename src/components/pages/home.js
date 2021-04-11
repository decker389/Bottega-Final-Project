import React, { Component } from 'react';
import PageTitle from '../pageComponents/pageTitle';


class Home extends Component {
    render() {

        return (
            <div className='home'>
                <PageTitle className='home__page-title' title='Home Page' />
            </div>
        )
    }
}

export default Home;