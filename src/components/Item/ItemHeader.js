import {Link} from "react-router-dom";
import Share from "../../assets/img/vectorItem/Share.svg";
import './Item.scss'
import CardRating from "../CardRating/CardRating";
import React from "react";

function ItemHeader({card}) {
    return (
        <div className="nav__categoriya">
            <div className="nav_categoriya__chit">
                <ul className="nav__categoriya-link">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to={`/${card.category}`}>{card.category}</Link>
                    </li>
                    <li>
                        <Link to='/'>{card.name}</Link>
                    </li>
                </ul>
                <div className="nav__categoriya-share">
                    <img src={Share} alt="share"/>
                    <p>Share</p>
                </div>
            </div>
            <div className="nav__categoriya-title">{card.name}</div>
            <div className="item__score-all">
                <div className="item__score">
                    <CardRating rating={card.rating}/>
                    <p>2 Reviews</p>
                </div>
                <div className="item__score__info">
                    <p>
                        <span>SKU:</span>777
                    </p>
                    <p>
                        <span>Availability:</span>In Stock
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ItemHeader