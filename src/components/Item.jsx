import React from 'react'

class Item extends React.Component {
    render() {
        return (
            <div className="item">
                <img src={require('../images/' + this.props.itemPreview + '.png')} alt="pizza1" className="item-preview"/>
                <h3 className="item-name">{ this.props.itemName }</h3>
                <div className="item-dimantion">
                    <ul className="asd">
                    <item className="choice">тонкое</item>
                    <item className="choice active">традиционное</item>
                  </ul>

                  <ul className="asd">
                    <item className="choice active">20 cм.</item>
                    <item className="choice">30 cм.</item>
                    <item className="choice">40 см.</item>
                  </ul>
                </div>
                <div className="more">
                    <h4 className="price">от { this.props.itemPrice } грн</h4>
                    <button className="add">Добавить</button>
                </div>
              </div>
        )
    }
}

export default Item