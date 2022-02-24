import { Navigation, Autoplay, Controller, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import Photo_1 from "../../../assets/img/imagesItem/item_photo1.jpg";

const SecondarySlider = ({ setFirstSwiper }) => {
    return (
        <div className="product__secondary-slider secondary-slider" data-test-id={'related-slider'}>
            <Swiper
                modules={[Navigation, Autoplay, Controller, Thumbs]}
                navigation={{
                    nextEl: '.btn-next',
                    prevEl: '.btn-prev',
                }}
                watchSlidesProgress={true}
                direction="vertical"
                speed={1000}
                spaceBetween={15}
                slidesPerView={4}
                onSlideChange={() => console.log('change')}
                onSwiper={setFirstSwiper}
            >
                <SwiperSlide className="swiper-slide">
                    <img className="swiper-slide__img" src={Photo_1} alt="product"></img>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <img className="swiper-slide__img" src={Photo_1}  alt="product"></img>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <img className="swiper-slide__img" src={Photo_1} alt="product"></img>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <img className="swiper-slide__img" src={Photo_1} alt="product"></img>
                </SwiperSlide>

                <div className="btn-container">
                    <div className="btn-prev"></div>
                    <div className="btn-next"></div>
                </div>
            </Swiper>
        </div >
    );
}

export default SecondarySlider;