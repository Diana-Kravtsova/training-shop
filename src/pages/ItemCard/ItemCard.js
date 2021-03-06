import React from "react";
import { Link } from "react-router-dom";

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


const items = [
    {
        img: item_women_1,
        gender: "women",
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
        id: 1,
    },
    {
        img: item_women_2,
        gender: "women",
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
        id: 2,
    },
    {
        img: item_women_3,
        gender: "women",
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
        id: 3,
    },
    {
        img: item_women_4,
        gender: "women",
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
        id: 4,
    },
    {
        img: item_women_5,
        gender: "women",
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
        id: 5,
    },
    {
        img: item_women_6,
        gender: "women",
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
        id: 6,
    },
    {
        img: item_women_7,
        gender: "women",
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
        id: 7,
    },
    {
        img: item_women_8,
        gender: "women",
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
        id: 8,
    },
    {
        img: item_men_1,
        gender: "men",
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
        id: 1,
    },
    {
        img: item_men_2,
        gender: "men",
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
        id: 2,
    },
    {
        img: item_men_3,
        gender: "men",
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
        id: 3,
    },
    {
        img: item_men_4,
        gender: "men",
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
        id: 4,
    },
    {
        img: item_men_5,
        gender: "men",
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
        id: 5,
    },
    {
        img: item_men_6,
        gender: "men",
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
        id: 6,
    },
    {
        img: item_men_7,
        gender: "men",
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
        id: 7,
    },
    {
        img: item_men_8,
        gender: "men",
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
        id: 8,
    }
];

function ItemCard(props) {
    let item = props.product_item;
    let genderItems = items.filter((e) => e.gender === item);
    let id_card = "clothes-card-" + item;
    return (
        <div className="sort__items">
            {genderItems.map((a, index) => (
                <Link
                    to={`/${item}/${a.id}`}
                    data-test-id={id_card}
                    key={index}
                    className="item__card"
                >
                    <div className="item__card-img">
                        <img src={a.img} alt="item" />
                    </div>
                    <div className="item__card-title">{a.title}</div>
                    <div className="item__card-suptitle">
                        <div className="item__card-price">{a.price}</div>
                        <div className="item__card-score"/>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ItemCard;