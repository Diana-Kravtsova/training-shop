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
import {SlideNextButton, SlidePrevButton} from "../../components/Item/Sliders/SliderButtons/SliderButtons";

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

function ItemCardRelated() {
    return (
        <section className='products__related' data-test-id='related-slider'>
            <div className="container">
                <div className='related__top'>
                    <h3 className="product__related_title">Related Products</h3>
                    <div className='related__top_btn'>
                        <SlidePrevButton prev="left: : '3.2%'" _class={'relatedPrev'}/>
                        <SlideNextButton next="right : '3.2%'" _class={'relatedNext'}/>
                    </div>
                </div>
                <ul className="product__related">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            nextEl: '.swiper-button-next.relatedNext',
                            prevEl: '.swiper-button-prev.relatedPrev',
                        }}
                        speed={1000}
                        grabCursor={true}
                        spaceBetween={50}
                        slidesPerView={6}
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
                                    <div className="item__card-img">
                                        <Link to="/women">
                                            <img src={a.img} alt="item"/>
                                        </Link>
                                    </div>
                                    <div className="item__card-title">{a.title}</div>
                                    <div className="item__card-suptitle">
                                        <div className="item__card-price">{a.price}</div>
                                        <div className="item__card-score"/>
                                    </div>
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