import React from 'react'

function Categories({items}) {
    return (
        <ul className="types">
            <li className="categories active">Все</li>
            {
                items.map(categoryName => (
                <li className="categories">{categoryName}</li>
                )
            )}
        </ul>
    )
}

export default Categories
