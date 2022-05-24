import {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import './Sliders/Sliders.scss'
import './ItemPics.scss'
import "swiper/css/thumbs"
import "swiper/css/navigation"
import "swiper/css"
import Photo_1 from "../../assets/img/imagesItem/item_photo1.jpg";
import Photo_2 from "../../assets/img/imagesItem/item_photo2.jpg";
import Photo_3 from "../../assets/img/imagesItem/item_photo3.jpg";
import Photo_4 from "../../assets/img/imagesItem/item_photo4.jpg";
import Photo_main from "../../assets/img/imagesItem/main_photo.jpg";
import {NextButton, PrevButton} from "./Sliders/SliderButtons/SliderButtons";
import {Controller, Navigation} from "swiper";

const secondaryPhoto = [
    {img: Photo_1},
    {img: Photo_2},
    {img: Photo_3},
    {img: Photo_4}
]

const mainPhoto = [
    {img: Photo_main},
    {img: Photo_main},
    {img: Photo_main},
    {img: Photo_main},
]


function ItemPics({card}) {

    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    return (<>
            <div className="product__pics">
                <div className="product__pics_previews">
                    <div className="product__pics_controls">
                        <PrevButton _class='product__pics_controls'/>
                        <NextButton _class='product__pics_controls'/>
                    </div>
                    <ul className="product__pics_little">
                        <Swiper
                            watchSlidesProgress
                            modules={[Navigation, Controller]}
                            navigation={{
                                nextEl: '.product__pics_controls.swiper-button-next',
                                prevEl: '.product__pics_controls.swiper-button-prev',
                            }}
                            style={{
                                "--swiper-navigation-color": "#121212",
                                transform: "translate3d(0, 0, 0) !important"
                            }}
                            speed={1000}
                            controller={{control: secondSwiper}}
                            spaceBetween={10}
                            slidesPerView={4}
                            virtualTranslate={true}
                            direction={'vertical'}
                            slideToClickedSlide={true}
                            centeredSlides={true}
                            onSwiper={setFirstSwiper}
                            watchOverflow={true}
                        >

                            {secondaryPhoto.map((a, index) => (
                                <SwiperSlide key={index}>
                                    <li>
                                        <img src={card.images.url} alt="prev"/>
                                    </li>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </ul>
                </div>

                <ul className="product__pics_big">
                    <Swiper
                        onSwiper={setSecondSwiper}
                        controller={{control: firstSwiper}}
                        speed={1000}
                        style={{
                            "--swiper-navigation-color": "#000"
                        }}
                        watchSlidesProgress
                        spaceBetween={10}
                        navigation
                        modules={[Navigation, Controller]}
                        grabCursor={true}
                        className="mySwiper2"
                    >

                        {
                            mainPhoto.map((a, index) =>
                                <SwiperSlide key={index}>
                                    <li>
                                        <img src={card.images.url} alt="prev"/>
                                    </li>
                                </SwiperSlide>
                            )}
                    </Swiper>
                </ul>
            </div>
        </>
    );
}

export default ItemPics;