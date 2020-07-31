import React  from 'react'
import PropTypes from 'prop-types'

function SortPopup({ items, activeSortType, onClickSortType }) {
  const [visiblePopup, setVisiblePopup] = React.useState(false)
  const sortRef = React.useRef()
  const activeLabel = items.find((obj) => obj.type === activeSortType).name

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
  }

  const onSelectItem = (index) => {
    if (onClickSortType) {
      onClickSortType(index)
    }
    setVisiblePopup(false)
  }

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={ toggleVisiblePopup }>{ activeLabel }</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((obj, index) => (
                <li
                  onClick={() => onSelectItem(obj)}
                  className={activeSortType === obj.type ? 'active' : ''}
                  key={`${obj.type}_${index}`}>
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  )
}

SortPopup.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickSortType: PropTypes.func.isRequired,
}

SortPopup.defaultProps = {
  items: [],
}

export default SortPopup
