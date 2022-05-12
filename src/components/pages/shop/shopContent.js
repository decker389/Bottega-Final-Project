import React, { Component } from "react";
import { db } from '../../reducers/initFirebase';

import DefaultImage from '../../../Static/Images/defaultimage.png'
import Quantity from "./Quantity";


class ShopContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productCategories: [],
            onClick: '',
            data: [],
            productsInCart: []
        };

        this.handleFilter = this.handleFilter.bind(this);

    }

    handleFilter(filter) {
        if (filter === "CLEAR_FILTER") {
            this.getShopItems();
        } else {
            this.getShopItems(filter);
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
        this.getShopItems();
    }

    getShopItems = (category = null) => {
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
            return (
                <div className="product-card" key={item.Id}>
                    <div className="product-card__front">
                        <div className="product-card__front__title">
                            {item.Title}
                        </div>
                        <div className="product-card__front__img" style={{ height: '200px' }}>
                            <img style={{ height: 200 }} src={item.ImgUrl ? item.ImgUrl : DefaultImage} alt=' not loading' />
                        </div>
                        <div className="product-card__front__instock-quanity">
                            Available Quantity: {item.InstockQuanity}
                        </div>
                    </div>
                    <div className="product-card__back">
                        <div className="product-card__back__title">
                            {item.Title}
                        </div>
                        <div className="product-card__back__price">
                            Price: ${item.Price}
                        </div>
                        <div className="product-card__back__description">
                            {item.Description}
                        </div>
                        {
                            item.InstockQuanity > 0 ? (
                                <Quantity item={item} />
                            ) : <div className="product-card__back__out-of-stock">Product out of Stock, Sorry.</div>
                        }
                    </div >
                </div>
            )
        })
    }

    render() {
        const { productCategories } = this.state
        return (
            <div>
                <div className="product-sort-bar">
                    {
                        productCategories.map(category => (
                            <button key={category} className='category-button' onClick={() => this.handleFilter(category)}>{category}</button>
                        ))
                    }
                    <button className="category-button" onClick={() => this.handleFilter("CLEAR_FILTER")}>All</button>

                </div >
                <div className="shop-content-container">
                    {this.products()}
                </div>
            </div >
        )
    }
}



export default ShopContent;