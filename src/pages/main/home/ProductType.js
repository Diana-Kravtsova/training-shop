import React, {useState} from "react";
import ItemCard from "../../../components/ItemCard/ItemCard";

import "./ProductType.scss";
import {Link} from "react-router-dom";
import { getProducts } from "../../../services/product";
import {useEffect} from "react";
/*
const buttons = [
    {
        name:'NEW ARRIVALS',
        particularName:'isNewArrivals'
    },
    {
        name:'SPECIALS',
        particularName:'isSpecial'
    },
    {
        name:'BESTSELLERS',
        particularName:'isBestseller'
    },
    {
        name:'MOST VIEWED',
        particularName:'isMostViewed'
    },
    {
        name:'FEATURED PRODUCTS',
        particularName:'isFeatured'
    }
];
*/
const ProductType = ({productType}) => {
/*
    const [filter, setFilter] = useState(buttons[0].particularName)

    const clickFilter = (e) => {
        setFilter(e.target.id)
    }*/
    const [items, setItems] = useState([])
    useEffect(() => {
        getProducts(productType).then((res) => {
            let blah = res.map((element) => {
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
            setItems(
                blah
            );
        });
    }, [])
    return (
        <div>
            <div className="sort">
                <div className="container">
                    <div className="sort__main">
                        <div className="section__head">
                            <h2 className="section__title">{productType}’S</h2>
                            {/*<ul className='clothes__filter' >
                                {buttons.map((item, index) => {
                                    return <li key={index} id={item.particularName}
                                               className={classNames('clothes__sorting', {'clothes__sorting--active': (filter === item.particularName)})}>{item.name}</li>
                                })}
                            </ul>*/}
                        </div>

                        <div className="sort__items">
                            <div className='clothes__grid contain'>
                                {
                                    items.map((card) => {
                                    return <ItemCard
                                                card={card}
                                                key={card.id}
                                                productType={productType}
                                    />
                                })}
                            </div>
                        </div>

                        <Link to={productType}>
                            <div className="sort__button">
                                <button>See All</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductType;