import React from 'react'

import { Categories, Sorting, Item } from './index'

function Main() {
    return (
      <div className="main">
        <div className="container">
          <div className="main__options">
            <Categories
              onClickItem={categoryName => {
                console.log(categoryName)
              }}

              items = {[
                'Мясные',
                'Вегетерианские',
                'Гриль',
                'Острые',
                'Закрытые',
              ]}
            />

            <Sorting items = {[
                'популярности',
                'цене',
                'алфавиту',
              ]}
            />
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