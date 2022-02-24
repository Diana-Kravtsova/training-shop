import {Navigation, Autoplay, Controller, Thumbs} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import Photo_main from "../../../assets/img/imagesItem/main_photo.jpg";

const MainSlider = ({ firstSwiper }) => {
    return (
        <div className="product__main-slider main-slider">
            <Swiper
                style={{
                    "--swiper-navigation-color": "#000"
                }}
                modules={[Navigation, Autoplay, Controller, Thumbs]}
                // navigation
                navigation={{
                    nextEl: '.btn-next',
                    prevEl: '.btn-prev',
                }}
                speed={1000}
                spaceBetween={0}
                slidesPerView={1}
                thumbs={{ swiper: firstSwiper }}
            >
                <SwiperSlide className="swiper-slide">
                    <img className="swiper-slide__img" src={Photo_main} alt="product"></img>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <img className="swiper-slide__img" src={Photo_main} alt="product"></img>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <img className="swiper-slide__img" src={Photo_main} alt="product"></img>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <img className="swiper-slide__img" src={Photo_main} alt="product"></img>
                </SwiperSlide>

                <div className="btn-container">
                    <div className="btn-prev"></div>
                    <div className="btn-next"></div>
                </div>

                <div className="btn-container btn-container--two">
                    <div className="btn-prev btn-prev--two"></div>
                    <div className="btn-next btn-next--two"></div>
                </div>
            </Swiper>
        </div>
    );
}

export default MainSlider;