
import './Home.scss'
import Banners from "./banners/Banners"
import Policies from "./policies/Policies"
import Collection from './banners/collections/Collection'

import collection1 from '../../../assets/img/imagesMain/collection1.jpg'
import collection2 from '../../../assets/img/imagesMain/collection2.jpg'

import Offer from '../offer/Offer'
import Blog from "../Blog/Blog";
import Clothes from "./clothes/Clothes";

const Home = () => {
    return (
        <div className='home'>
            <Banners />
            <Policies />
            <Clothes />
            <section className='collections'>
                <Collection src={collection1} title='new season' text='lookbook collection' />
                <Collection src={collection2} title='sale' text='get up to' accent='50% OFF' />
            </section>
            <Offer />
            <Blog />
        </div>
    )
}

export default Home