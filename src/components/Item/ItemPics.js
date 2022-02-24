import { useState } from "react";
import SecondarySlider from "./Sliders/SecondarySlider";
import MainSlider from "./Sliders/MainSlider";
import './Sliders/Sliders.scss'


const ItemPics = () => {

    const [firstSwiper, setFirstSwiper] = useState(null);

    return (
        <div className="product__sliders" data-test-id={'product-slider'}>
            <SecondarySlider setFirstSwiper={setFirstSwiper}/>

            <MainSlider firstSwiper={firstSwiper}/>
        </div>
    );
}

export default ItemPics;