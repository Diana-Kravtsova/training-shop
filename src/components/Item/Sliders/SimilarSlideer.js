/*
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import ItemCardRelated from "../../../pages/ItemCard/ItemCardRelated";



const SimilarSlider = ({ getProducts, params }) => {

    return (
        <div className="similar__content">
            <Swiper
                modules={[Navigation, Autoplay]}
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


                {related.map(item => (<SwiperSlide key={`${item.id}-${category}-slide`} >
                        <li
                            className='li_cards-item'
                            key={`${item.id}-${category}`}
                        >
                            <CardItem
                                key={`${item.id}-${category}`}
                                item={item}
                                category={category}
                                relatedString='related'
                            />
                        </li></SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SimilarSlider;*/
