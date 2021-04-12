import React, { Component } from 'react';

import PageTitle from '../../pageComponents/pageTitle';
import HomeInfo from './homeInfo';

class Home extends Component {
    render() {

        return (
            <div className='home'>
                <PageTitle className='home__page-title' title='Home Page' />
                <HomeInfo />
            </div>
        )
    }
}

export default Home;