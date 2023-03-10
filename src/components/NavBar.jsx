import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"

function NavBar({cartnum}){
    return(
        <div className="navBar">
            <a>My Store</a>
            <div className="cart-items">
                <AiOutlineShoppingCart/>
                <p className="cart-num">{cartnum}</p>
            </div>
        </div>
    )
}

export default NavBar