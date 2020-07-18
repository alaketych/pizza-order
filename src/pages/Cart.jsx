import React from 'react'
import { Link } from 'react-router-dom'
import EmptyCard from '../assets/img/cart-empty.png'

function Cart() {
    return (
        <div className="cart">
            <div className="container">
                <h1 className="title">Корзина пустая</h1>

                <h3 className="description">
                    <p>Вероятней всего, вы не заказывали ещё.</p>
                    <p>Для того, чтобы заказать пиццу, перейдите на главную страницу.</p>
                </h3>

                <img src={EmptyCard} width="350px" alt="Пустая корзина" className="cart-state"/>

                <Link to="/">
                    <button className="back">Вернутся назад</button>
                </Link>
            </div>
        </div>
    )
}

export default Cart