import react, { Component } from 'react';

import { db } from '../../reducers/initFirebase';
class TestpageRead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        db.collection("Products")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                // console.log(<div key={data.Id} className='data-detail'>{data.title}</div>)
                console.log(data)
                this.setState({ products: data })
            });
    }
    render() {
        const { products } = this.state;
        return (
            <div className='test-page-read'>
                {products.map(product => (
                    <div key={product.Id} className='read-card' >
                        {product.Title}

                    </div>
                ))}
            </div>
        )
    }
}


export default TestpageRead