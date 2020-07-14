import React, { useState, useEffect, useRef } from 'react'

function Sorting({items}) {
    const [visiblePopUp, setVisiblePopUp] = useState(false)
    const [activeItem, setActiveItem] = useState(0)
    const sortRef = useRef()
    const activeLabel = items[activeItem].name

    const toggleVisiblePopUp = () => {
        setVisiblePopUp(!visiblePopUp)
    }

    const onSelectItems = index => {
        setActiveItem(index)
        setVisiblePopUp(false)
    }

    const handleOutsideClick = (e) => {
        if(!e.path.includes(sortRef.current)) {
            setVisiblePopUp(false)
        }
    }

    useEffect(()=> {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    return(
        <div ref={sortRef} className="sorting">
            <div className="filter">
              <div className="filter__label">
                <b>Сортировка по: </b>
                <span onClick={ toggleVisiblePopUp }>{ activeLabel }</span>
              </div>
            </div>

            {visiblePopUp &&
                <div className="filter__popup">
                <ul>
                    {
                        items.map((object, index) => (
                            <li className={
                                    activeItem === index ? '.filter__popup ul li active' : ''
                                }

                                onClick={() => onSelectItems(index)}

                                key={`${ object.name }`}> { object.name }
                            </li>
                        )
                    )}
                </ul>
              </div>
            }
        </div>
    )
}

export default Sorting