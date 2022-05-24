import React, {useEffect, useState} from 'react';
import ItemCard from "../ItemCard/ItemCard";


import Share from "../../assets/img/vectorHeader/Share.svg"
import view1 from "../../assets/img/vectorHeader/view1.svg"
import view2 from "../../assets/img/vectorHeader/view2.svg"
import further from "../../assets/img/vectorHeader/item__further.svg"
import filter from "../../assets/img/vectorHeader/filter.svg"

import "./Categories.scss";
import {getProducts} from "../../services/product";
import {Link} from "react-router-dom";

function Categories(props) {
    const [menProducts, setMen] = useState([]);
    const [womenProducts, setWomen] = useState([]);
    useEffect(() => {
        getProducts('men').then((res) => {
            setMen(
                res.map((element) => {
                    return {
                        sizes: element.size.split(' '),
                        images: {
                            color: element.color,
                            url: element.image
                        },
                        rating: element.star,
                        category: element.sex,
                        ...element
                    }
                })
            );
        });
        getProducts('women').then((res) => {
            setWomen(
                res.map((element) => {
                    return {
                        sizes: element.size.split(' '),
                        images: {
                            color: element.color,
                            url: element.image
                        },
                        rating: element.star,
                        category: element.sex,
                        ...element
                    }
                })
            );
        });

    }, [])

    return <div>
        <div className="nav__categoriya">
            <div className="container">
                <div className="nav__categotiya-wrapper">
                    <div className="nav_categoriya__chit">
                        <ul className="nav__categoriya-link">
                            <li><Link to={'/'}><span>Home</span></Link></li>
                            <li><Link to={`/${props.product_type}`}><span>{props.product_type}</span></Link></li>
                        </ul>
                        <div className="nav__categoriya-share">
                            <img src={Share} alt="share"/>
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
                            <img src={filter} alt="filter"/>
                            <p>filter</p>
                        </div>
                        <div className="filter__view">
                            <img src={view1} alt="view"/>
                            <img src={view2} alt="view"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="items">
            <div className="continer">
                <div className="items_wrapper">
                    <div className="sort__items">
                        {(props.product_type === 'women' ? womenProducts : menProducts).map((card) =>
                            <ItemCard card={card} productType={props.product_type} key={card.id}/>
                        )}
                    </div>
                    <div className="item__further">
                        <img src={further} alt="item__further"/>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Categories;