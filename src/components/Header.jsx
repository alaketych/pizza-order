import React from 'react'

import PizzaLogo from '../images/logo.png'
import CartLogo from '../images/cart.png'

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <div className="image-logo">
                        <img className="logo" src={PizzaLogo} alt="PizzaOrder"/>
                    </div>

                    <div className="logo-description">
                    <h2 className="logo-name">react order</h2>
                    <h3 className="logo-devis">cамaя вкусная пицца во вселенной</h3>
                    </div>
                </div>

                <div className="header__cart">
                    <button className="header__cart-button">
                    <span>749 грн</span>
                    <img src={CartLogo} width="30" height="30" alt="Cart" className="header__cart-image"/>
                    <span>2</span>
                    </button>
                </div>
            </div>
      </div>
    )
}

export default Header