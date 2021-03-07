import React from 'react'

import { connect } from 'react-redux'
import { addItem } from "../../redux/cart/cart.actions";

import './collection-item.styles.scss'
import CustomButton from "../custom-button/custom-button.component";

function CollectionItem({ item, addItem }) {
    const {id, name, price, imageUrl} = item    
    return (
        <div className="collection-item" key={id}>
            <div className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)