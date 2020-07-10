import React, { useState } from 'react'

function Categories({items, onClickItem}) {
    const [activeItem, setActiveItem] = useState()

    const onSelectItem = index => {
        setActiveItem(index)
    }

    return (
        <ul className="types">
            <li className = { activeItem == null ? 'categories active' : 'categories'}
                onClick = {() => { onSelectItem(null)}}
            >Все</li>
            {
                items.map((categoryName, index) => (
                    <li className = {
                            activeItem === index ? 'categories active' : 'categories'
                        }

                        onClick={() => {
                            onSelectItem(index)
                        }}

                        key={`${ categoryName }_${ index }`}
                        >{ categoryName }
                    </li>
                )
            )}
        </ul>
    )
}

export default Categories
