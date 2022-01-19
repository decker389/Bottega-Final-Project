

import React, { Component } from 'react'


class Quantity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shoppingCart: ['a test']
        }
        this.addProductToCart = this.addProductToCart.bind(this);
        this.removeProductFromCart = this.removeProductFromCart.bind(this);
    }

    addProductToCart(e, product) {
        e.preventDefault();
        if (product.ProductInCartCount < product.InstockQuanity) {
            product.ProductInCartCount += 1;
            this.setState({
                shoppingCart: [product.InstockQuanity]
            })
            console.log(this.shoppingCart)

        }
        else {
            console.log(`No more ${product.Title} in Stock`)
        }
    }

    removeProductFromCart(e, product) {
        e.preventDefault();
        if (product.ProductInCartCount > 0) {
            product.ProductInCartCount -= 1
            this.setState({ shoppingCart: product })
        } else {
            console.log('no products to remove from cart')
        }
    }

    render() {
        const { item } = this.props
        return (
            <form className="product-card__back__buttons">
                <div className="product-card__back__minus-button">
                    <button onClick={e => this.removeProductFromCart(e, item)}>
                        <i className="fas fa-minus"></i>
                    </button>
                </div>
                <div className="product-card__back__plus-button">
                    <button onClick={e => this.addProductToCart(e, item)}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                <div className="product-card__back__cart-count">
                    {item.ProductInCartCount}
                </div>
            </form>
        )
    }
}

export default Quantity;