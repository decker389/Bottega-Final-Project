import React, { Component } from "react";
import { db } from '../../reducers/initFirebase';

import DefaultImage from '../../../Static/Images/defaultimage.png'


class ProductSort extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productCategories: [],
            onClick: '',
            data: [],
            productsInCart: []
        };

        this.handleFilter = this.handleFilter.bind(this);
        // this.addProductToCart = this.addProductToCart.bind(this);
        // this.removeProductFromCart = this.removeProductFromCart.bind(this);
    }

    handleFilter(filter) {
        if (filter === "CLEAR_FILTER") {
            this.getPortfolioItems();
        } else {
            this.getPortfolioItems(filter);
        }
    }
    componentDidMount() {
        db.collection("Products")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                var category = [], categories = [];
                data.forEach(v => {
                    categories.push(v.Category);

                })
                categories.forEach(v => {
                    var index = category.indexOf(v);
                    if (index === -1) {
                        category.push(v)
                    }
                })
                this.setState({ productCategories: category })
            });
        this.getPortfolioItems();
    }
    addProductToCart(product) {
        // console.log(product);
    }
    removeProductFromCart(product) {
        product.productInCartCount +=
            console.log(product.productInCartCount);
    }
    getPortfolioItems = (category = null) => {
        if (category) {
            db.collection('Products')
                .where("Category", "==", category)
                .get()
                .then(response => {
                    const data = response.docs.map(doc => doc.data());
                    this.setState({ data: data })
                });
        } else {
            db.collection('Products')
                .get()
                .then(response => {
                    const data = response.docs.map(doc => doc.data());
                    this.setState({ data: data })
                })
        }
    }
    products() {
        return this.state.data.map(item => {
            item.productInCartCount = 0;
            return (
                <div className="product-card" key={item.Id}>
                    <div className="product-card__title">
                        {item.Title}
                    </div>
                    <div className="product-card__img" style={{ height: '200px' }}>
                        <img style={{ height: 200 }} src={item.ImgUrl ? item.ImgUrl : DefaultImage} alt=' not loading' />
                    </div>
                    <div className="product-card__instock-quanity">
                        Available Quantity: {item.InstockQuanity}
                    </div>
                    <div className="product-card__price">
                        Price: ${item.Price}
                    </div>
                    <div className="product-card__buttons">
                        <div className="product-card__minus-button">
                            <button onClick={this.removeProductFromCart(item)}>
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>
                        <div className="product-card__plus-button">
                            <button onClick={this.addProductToCart(item)}>
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div className="product-card__cart-count">
                        {item.InstockQuanity > 0 ? `${item.Title}'s in cart ${item.productInCartCount}` : 'Product out of Stock, Sorry'}
                    </div>
                </div >
            )
        })
    }

    render() {
        const { productCategories } = this.state
        return (
            <div className="product-sort-bar">
                {
                    productCategories.map(category => (
                        <button key={category} className='category-link' onClick={() => this.handleFilter(category)}>{category}</button>
                    ))
                }
                <button className="category-link" onClick={() => this.handleFilter("CLEAR_FILTER")}>All</button>
                {this.products()}
            </div >
        )
    }
}



export default ProductSort;