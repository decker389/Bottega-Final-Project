import React from 'react';

import PageTitle from '../../pageComponents/pageTitle';
import ProductSort from './ProductSort';

// eslint-disable-next-line
export default function () {
    return (
        <div className='page-container'>
            <PageTitle className='shop__page-title' title='The Shop' />
            <ProductSort />
        </div>
    )
}
