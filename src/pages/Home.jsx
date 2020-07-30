import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPizzas } from '../redux/actions/pizzas'
import { setCategory } from '../redux/actions/filters'
import { Categories, SortPopup, PizzaBlock, PizzaLoader } from '../components'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)

  useEffect(() => {
    dispatch(fetchPizzas())
  }, [])

  const onSelectCategory = index => {
    dispatch(setCategory(index))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={ onSelectCategory }
          items={ categoryNames }
        />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавит', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoaded
            ? items.map((obj) => (<PizzaBlock key={obj.id} isLoading={true} {...obj} />))
            : Array(10).fill(<PizzaLoader></PizzaLoader>)
        }

      </div>
    </div>
  );
}

export default Home;
