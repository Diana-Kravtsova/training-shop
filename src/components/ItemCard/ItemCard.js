import React from "react";
import { Link } from "react-router-dom";
import './ItemCard.scss'
import CardRating from '../CardRating/CardRating'
/*
import item_women_1 from "../../assets/img/women-img/item-women1.jpg";
import item_men_1 from "../../assets/img/men-img/men1.jpg";
import item_men_2 from "../../assets/img/men-img/men3.jpg";
import item_men_5 from "../../assets/img/men-img/men2.jpg";
import item_men_6 from "../../assets/img/men-img/men4.jpg";
import item_men_3 from "../../assets/img/men-img/men5.jpg";
import item_men_7 from "../../assets/img/men-img/men6.jpg";
import item_men_4 from "../../assets/img/men-img/men7.jpg";
import item_men_8 from "../../assets/img/men-img/men8.jpg";

import item_women_1 from "../../assets/img/women-img/women1.jpg";
import item_women_2 from "../../assets/img/women-img/women2.jpg";
import item_women_3 from "../../assets/img/women-img/women3.jpg";
import item_women_4 from "../../assets/img/women-img/women4.jpg";
import item_women_5 from "../../assets/img/women-img/women5.jpg";
import item_women_6 from "../../assets/img/women-img/women6.jpg";
import item_women_7 from "../../assets/img/women-img/women7.jpg";
import item_women_8 from "../../assets/img/women-img/women8.jpg";
*/


const ItemCard = ({ card , productType }) => {
    return (
            <div className='cards__item'>
            <Link to={`/${productType}/${card.id}`}>
                {card.discount && <span className='cards__sale'>{card.discount}</span>}
                <div className="item__card-img">
                    <img style={{width: '250px', height: '300px'}} src={card.images.url} alt="item" />
                </div>
                <h3 className='cards__title'>{card.name}</h3>
                <div className='cards__info'>
                        <span className='cards__price'>$ {Math.round(card.price + (parseInt(card.discount ?? 0) * (card.price / 100)))} {card.discount &&
                            <span className='cards__price cards__price--sale'>$ {card.price}</span>}</span>
                    <CardRating rating={card.rating}/>
                </div>
            </Link>
        </div>

    );
}

export default ItemCard;