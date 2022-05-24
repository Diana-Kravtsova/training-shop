import slider from '../../../../../assets/img/imagesMain/girl-slider.jpg'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import './slider.scss'

import bannerWomen from '../../../../../assets/img/imagesMain/banner-women.jpg'
import bannerMen from '../../../../../assets/img/imagesMain/banner-men.jpg'
import bannerAccessories from '../../../../../assets/img/imagesMain/banner-accessories.jpg'

let slides = [slider, bannerWomen, bannerMen, bannerAccessories]

const MainSlider = () => {
    return (<div className="main__slider" data-test-id='main-slider'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {slides.map((slide, index) =>
                    <SwiperSlide key={index} >
                        <img src={slide} alt="slider" />
                        <div className='campaignTeaser__slider'>
                            <div className="main__slider_text">Don't lose</div>
                            <h3 className="main__slider_title">Huge sales!</h3>
                        </div>
                    </SwiperSlide>)}
            </Swiper>
        </div>
    )
}
export default MainSlider