import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPizzas } from '../redux/actions/pizzas'
import { addPizza } from '../redux/actions/cart'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { Categories, SortPopup, PizzaBlock, PizzaLoader } from '../components'
import { object } from 'prop-types'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене',         type: 'price'   },
  { name: 'алфавит',      type: 'name'    },
]

function Home() {
  const dispatch  = useDispatch()
  const items     = useSelector(({ pizzas }) => pizzas.items)
  const cartItems = useSelector(({ cart })   => cart.items )
  const isLoaded  = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { category, sortBy }       = useSelector(({ filters }) => filters)

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy))
  }, [category, sortBy])

  const onSelectCategory = index => {
    dispatch(setCategory(index))
  }

  const onSelectSortType = type => {
    dispatch(setSortBy(type))
  }

  const addToCart = object => {
    dispatch(addPizza(object))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items = { categoryNames }
          activeCategory = { category }
          onClickCategory = { onSelectCategory }
        />
        <SortPopup
          items = { sortItems }
          activeSortType = { sortBy }
          onClickSortType  = { onSelectSortType }
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoaded
            ? items.map(object => (<PizzaBlock addToCart={ addToCart }
                                      key={ object.id }
                                      quantity={ cartItems[object.id] && cartItems[object.id].length }
                                      { ...object } />
                                  )
                        )
            : Array(10)
              .fill(0)
              .map((_, index) => (<PizzaLoader key={index}></PizzaLoader>))
        }
      </div>
    </div>
  )
}

export default Home
