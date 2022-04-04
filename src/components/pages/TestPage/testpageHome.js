import { Component } from 'react';

import { db } from '../../reducers/initFirebase';
class TestpageHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loggedInl: true
        };
    }

    componentDidMount() {
        db.collection("Products")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                console.log(data)
                this.setState({ products: data })
            });
    }
    render() {
        const { products, loggedInl } = this.state;
        console.log(loggedInl);
        console.log('sdf', this.state.loggedInl);

        console.log(loggedInl);
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


export default TestpageHome