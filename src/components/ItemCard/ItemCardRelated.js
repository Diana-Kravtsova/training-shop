import React from "react";
import {Link} from "react-router-dom";
import '../Item/Sliders/Sliders.scss'
import './ItemCardRelated.scss'

import item_women_1 from "../../assets/img/women-img/item-women1.jpg";
import item_women_2 from "../../assets/img/women-img/item-women2.jpg";
import item_women_3 from "../../assets/img/women-img/item-women3.jpg";
import item_women_4 from "../../assets/img/women-img/item-women4.jpg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import 'swiper/scss';
import {NextButton, PrevButton} from "../Item/Sliders/SliderButtons/SliderButtons";

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
    {
        img: item_women_1,
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: ""
    },
    {
        img: item_women_2,
        title: "Women's tracksuit Q109",
        price: "$ 30.00",
        score: ""
    },
];

function ItemCardRelated({card}) {
    return (
        <section className='products__related' >
            <div className="container">
                <div className='related__top'>
                    <h3 className="product__related_title">Related Products</h3>
                    <div className='related__top_btn'>
                        <PrevButton prev="left: : '3.2%'" _class={'relatedPrev'}/>
                        <NextButton next="right : '3.2%'" _class={'relatedNext'}/>
                    </div>
                </div>
                <ul className="product__related">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={4}
                        grabCursor={true}
                        navigation={{
                            nextEl: '.swiper-button-next.relatedNext',
                            prevEl: '.swiper-button-prev.relatedPrev',
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1
                            },
                            560: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                height: '100%'
                            },
                            900: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1110: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                    >

                        {
                            items.map((a, index) => (
                                <SwiperSlide key={index} className="item__card">
                                    <li className='li_cards-item'>
                                        <Link to={`/${card.category}`}
                                              className='cards-item'>
                                            <div className='img__containter'>
                                                <img className="cards__img" src={card.images.url} alt="goods"/>
                                            </div>
                                            <div className='product__info'>
                                                <h5 className="product__title">{card.title}</h5>
                                                <div className='product__info_bottom'>
                                                    <span className="item__card-suptitle">
                                                        <span className="product__price">{card.price}</span>
                                                        <span className="item__card-score"/>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </ul>
            </div>
        </section>
    );
}

export default ItemCardRelated;