import React from 'react';

import PageTitle from '../../pageComponents/pageTitle';
import ShopContent from './shopContent';

// eslint-disable-next-line
export default function () {
    return (
        <div className='shop-wrapper'>
            <PageTitle className='shop__page-title' title='The Shop' />
            <ShopContent />
        </div>
    )
}
