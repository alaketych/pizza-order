import axios from 'axios'

export const setLoaded = value => ({
  type: 'SET_LOADED',
  payload: value,
})

export const fetchPizzas = (category, sortBy) => dispatch => {
  dispatch(setLoaded(false))

  axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}`).then(({ data }) => {
    dispatch(setPizzas(data))
  })
}

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
})
