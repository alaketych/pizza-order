import React from 'react'
import { Categories, Sorting, Item } from '../index'
import { Pizza } from '../../pizza.json'

function Main({ items }) {
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
              { name:'популярности', type: 'popular'},
              { name: 'цене',        type: 'price' },
              { name: 'алфавиту',    type: 'alphabet'},
            ]}
          />
        </div>

        <div className="main__content">
          <h1 className="title">Все пиццы</h1>
          <div className="main__content__items">
            {Pizza.map(data => {
              return(
                <Item key={data.id}
                      name={data.Name}
                      image={data.Image}
                      price={data.Price}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main