import slider from '../../../../../assets/img/imagesMain/girl-slider.jpg'

import './slider.scss'

const MainSlider = () => {
    return (
        <div className="main__slider">
            <div><img src={slider} alt="slider" /></div>
            <div className='campaignTeaser__slider'>
                <div className="main__slider_text">Banner</div>
                <h3 className="main__slider_title">your Title text</h3>
            </div>
        </div>
    )
}

export default MainSlider