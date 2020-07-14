import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

function Item({ image, name, types, sizes, price }) {
  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];

  const [activeType, setActiveType] = useState(types[0])
  const [activeSize, setActiveSize] = useState(sizes[1])

  const onSelectType = index => {
    setActiveType(index)
  }

  const onSelectSize = index => {
    setActiveSize(index)
  }

  return (
    <div className="item">
      <img src={ image } alt="pizza1" className="item-preview"/>
      <h3 className="item-name">{ name }</h3>
      <div className="item-dimantion">
        <ul className="list">
        {
          availableTypes.map((type, index) => (
          <li
            key={type}
            className={classNames({
              choice: true,
              active: activeType === index ? 'active' : '',
              disable: types.includes(index)
            })}
            onClick={() => onSelectType(index)}>
            { type }
          </li>
        ))}
        </ul>

        <ul className="list">
          {
            availableSizes.map((size, index) => (
              <li key={ size }
                  className={classNames({
                    choice: true,
                    active: activeSize === index ? 'active' : '',
                    disable: sizes.includes(index)
                  })}
                  onClick={() => onSelectSize(index)}>
                  { size } см.
              </li>
            ))
          }
        </ul>
      </div>

      <div className="more">
        <h4 className="price">от { price } грн</h4>
        <button className="add">Добавить</button>
      </div>
    </div>
  )
}

Item.propTypes = {
  image: PropTypes.string,
   name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  price: PropTypes.string,
}

Item.defaultProps = {
  image: '',
   name: '',
  types: [],
  sizes: [],
  price: '',
}

export default Item