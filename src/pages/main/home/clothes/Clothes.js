import React from 'react';
import ProductType from "../ProductType";

function Clothes() {
    return <div>
        <ProductType product_type={"women"} />
        <ProductType product_type={"men"} />
    </div>;
}

export default Clothes;