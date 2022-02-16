import React from "react";
import Item_Card from "../../Item_card/Item_card";

import "./ProductType.scss";

function ProductType (props)  {
    let id = 'clothes-' + props.product_type;
    return (
        <div data-test-id = {id}>
            <div className="sort">
                <div className="container">
                    <div className="sort__main">
                        <div className="sort__title">
                            <div className="sort__logo">{props.product_type}’S</div>
                            <ul className="sort__navigation">
                                <li>NEW ARRIVALS</li>
                                <li>SPECIALS</li>
                                <li>BESTSELLERS</li>
                                <li>MOST VIEWED</li>
                                <li>FEATURED PRODUCTS</li>
                            </ul>
                        </div>
                        <div className="sort__items">
                            <Item_Card product_item = {props.product_type} />
                        </div>
                        <div className="sort__button">See All</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductType;