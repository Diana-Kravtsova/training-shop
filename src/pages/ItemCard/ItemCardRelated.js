import React from "react";
import {Link} from "react-router-dom";
import '../../components/Item/Sliders/Sliders.scss'

import item_women_1 from "../../assets/img/women-img/item-women1.jpg";
import item_women_2 from "../../assets/img/women-img/item-women2.jpg";
import item_women_3 from "../../assets/img/women-img/item-women3.jpg";
import item_women_4 from "../../assets/img/women-img/item-women4.jpg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";
import 'swiper/scss';

const items = [
    {
        img: item_women_1,
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
    },
    {
        img: item_women_2,
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
    },
    {
        img: item_women_3,
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: "",
    },
    {
        img: item_women_4,
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: ""
    },
];

function ItemCardRelated() {
    return (
        <div className="similar__content">
            <Swiper
                modules={[Navigation, Autoplay]}
                // navigation
                navigation={{
                    nextEl: '.btn-similar-next',
                    prevEl: '.btn-similar-prev',
                }}
                speed={1000}
                spaceBetween={20}
                slidesPerView={4}
                breakpoints={{
                    900: {
                        slidesPerView: 4
                    },
                    630: {
                        slidesPerView: 3
                    },
                    450: {
                        slidesPerView: 2
                    },
                    360: {
                        slidesPerView: 1
                    }
                }}
            >

                {
                    items.map((a, index) => (
                        <SwiperSlide key={index} className="item__card">
                            <div className="item__card-img">
                                <Link to="/women">
                                    <img src={a.img} alt="item"/>
                                </Link>
                            </div>
                            <div className="item__card-title">{a.title}</div>
                            <div className="item__card-suptitle">
                                <div className="item__card-price">{a.price}</div>
                                <div className="item__card-score"></div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    );
}

export default ItemCardRelated;