import React from 'react';

import PageTitle from '../../pageComponents/pageTitle';
import ShopContent from './shopContent';

// eslint-disable-next-line
export default function () {
    return (
        <div className='page-container'>
            <div className='shop-title-container'>
                <PageTitle className='shop__page-title' title='The Shop' />
            </div>
            <ShopContent />
        </div>
    )
}
