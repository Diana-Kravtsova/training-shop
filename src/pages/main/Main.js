import React from "react";
import './Main.scss'
import './home/Home.scss'
import Banners from "./home/banners/Banners";
import Policies from "./home/policies/Policies";
import Collection from "./home/banners/collections/Collection";
import collection1 from "../../assets/img/imagesMain/collection1.jpg";
import collection2 from "../../assets/img/imagesMain/collection2.jpg";
import Offer from "./offer/Offer";
import Blog from "./Blog/Blog";
import ProductType from "./home/ProductType";

const Main = ( banners ) => {
    return (
        <div className='home'>
            <Banners banners={banners} />
            <Policies />
            <ProductType productType={"women"}/>
            <ProductType productType={"men"}/>
            <section className='collections'>
                <Collection
                    src={collection1}
                    title='new season'
                    text='lookbook collection' />
                <Collection
                    src={collection2}
                    title='sale'
                    text='get up to'
                    accent='50% OFF' />
            </section>
            <Offer />
            <Blog />
        </div>
    )
};

export default Main;