import './Banners.scss'
import MainCategory from './categories/Category'
import MainSlider from './slider/Slider'

import bannerWomen from '../../../../assets/img/imagesMain/banner-women.jpg'
import bannerMen from '../../../../assets/img/imagesMain/banner-men.jpg'
import bannerBlog from '../../../../assets/img/imagesMain/banner-accessories.jpg'



const Banners = () => {
    return (
        <div className="main__banners">
            <div className="container">
                <MainSlider />
                <MainCategory title={'Women'} src={bannerWomen} />
                <MainCategory title={'Men'} src={bannerMen} />
                <MainCategory title={'Blog'} src={bannerBlog} />
            </div>
        </div>
    )
}

export default Banners