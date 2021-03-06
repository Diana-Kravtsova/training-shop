import React from 'react';
import ItemCard from "../../pages/ItemCard/ItemCard";


import Share from "../../assets/img/vectorHeader/Share.svg"
import view1 from "../../assets/img/vectorHeader/view1.svg"
import view2 from "../../assets/img/vectorHeader/view2.svg"
/*import down from "../../assets/img/vectorHeader/down.svg"*/
import further from "../../assets/img/vectorHeader/item__further.svg"
import filter from "../../assets/img/vectorHeader/filter.svg"

import "./Categories.scss";

function Categories(props) {
    let id = "products-page-" + props.product_type;
    return <div data-test-id= {id} >
        <div className="nav__categoriya">
            <div className="container">
                <div className="nav__categotiya-wrapper">
                    <div className="nav_categoriya__chit">
                        <ul className="nav__categoriya-link">
                            <li><span>Home</span></li>
                            <li><span>{props.product_type}</span></li>
                        </ul>
                        <div className="nav__categoriya-share">
                            <img src={Share} alt="share" />
                            <p>Share</p>
                        </div>
                    </div>
                    <div className="nav__categoriya-title">{props.product_type}</div>
                </div>
            </div>
        </div>
        <div className="filter">
            <div className="container">
                <div className="filter__wrapper">
                    <div className="filter__items">
                        <div className="filter__filter">
                            <img src={filter} alt="filter" />
                            <p>filter</p>
                        </div>
                        <div className="filter__view">
                            <img src={view1} alt="view" />
                            <img src={view2} alt="view" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="items">
            <div className="continer">
                <div className="items_wrapper">
                    <div className="sort__items">
                        <ItemCard product_item = {props.product_type} />
                    </div>
                    <div className="item__further">
                        <img src={further} alt="item__further" />
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Categories;