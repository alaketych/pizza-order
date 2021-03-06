import { object } from "prop-types"

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PIZZA_CART': {
            const newItems = {
                ...state.items,
                [action.payload.id]:
                    !state.items[action.payload.id]
                        ? [action.payload] : [...state.items[action.payload.id],
                    action.payload,
                ]
            }

            const addedPizza = [].concat.apply([], Object.values(newItems))
            const totalPrice = addedPizza.reduce((sum, object) => object.price + sum, 0)

            return  {
                ...state,
               items: newItems,
               totalCount: addedPizza.length,
               totalPrice,
            }
        }

        default:
            return state
    }
}

export default cart