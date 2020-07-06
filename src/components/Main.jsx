import React from 'react'
import Item from './Item'

import Pizza1 from '../images/pizza-1.png'
import Pizza2 from '../images/pizza-2.png'
import Pizza3 from '../images/pizza-3.png'
import Pizza4 from '../images/pizza-4.png'

function Main() {
    return (
      <div className="main">
        <div className="container">
          <div className="main__options">
            <ul className="types">
              <li className="categories active">Все</li>
              <li className="categories">Мясные</li>
              <li className="categories">Вегетиранские</li>
              <li className="categories">Гриль</li>
              <li className="categories">Острые</li>
              <li className="categories">Закрытые</li>
            </ul>

            <div className="filter">
              <div className="filter__label">
                <b>Сортировка по: </b>
                <span>популярности</span>
              </div>
            </div>

            <div class="filter__popup">
              <ul>
                <li class="active">популярности</li>
                <li>цене</li>
                <li>алфавиту</li>
              </ul>
            </div>
          </div>

          <div className="main__content">
            <h1 className="title">Все пиццы</h1>

            <div className="main__content__items">
              <Item itemPreview="pizza-1"
                    itemName="Маргарита"
                    itemPrice="149"/>

              <Item itemPreview="pizza-2"
                    itemName="Сырная"
                    itemPrice="249"/>

              <Item itemPreview="pizza-3"
                    itemName="Сицилийская"
                    itemPrice="199"/>

              <Item itemPreview="pizza-4"
                    itemName="Капричиоза"
                    itemPrice="299"/>

              <Item itemPreview="pizza-1"
                    itemName="Неаполитанская"
                    itemPrice="249"/>

              <Item itemPreview="pizza-2"
                    itemName="Четыре сыра"
                    itemPrice="129"/>

              <Item itemPreview="pizza-3"
                    itemName="Сицилийская"
                    itemPrice="249"/>

              <Item itemPreview="pizza-4"
                    itemName="Капричиоза"
                    itemPrice="149"/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Main