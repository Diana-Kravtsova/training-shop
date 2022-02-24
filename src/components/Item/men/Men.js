import React from "react";
import '../Item.scss'
import ItemCardRelated from "../../../pages/ItemCard/ItemCardRelated";
import ItemHeader from "../ItemHeader";

/*images import*/
import Share from "../../../assets/img/vectorItem/Share.svg";
import Star from "../../../assets/img/vectorItem/star.svg";
import Slider_up from "../../../assets/img/vectorItem/slider_up.png";
import Slider_down from "../../../assets/img/vectorItem/slider_down.png";

import Photo_1 from "../../../assets/img/imagesItem/item_photo1.jpg";
import Photo_2 from "../../../assets/img/imagesItem/item_photo2.jpg";
import Photo_3 from "../../../assets/img/imagesItem/item_photo3.jpg";
import Photo_4 from "../../../assets/img/imagesItem/item_photo4.jpg";
import Photo_main from "../../../assets/img/imagesItem/main_photo.jpg";
import Item_color_1 from "../../../assets/img/imagesItem/item_color1.jpg";
import Item_color_2 from "../../../assets/img/imagesItem/item_color2.jpg";
import Item_color_3 from "../../../assets/img/imagesItem/item_color3.jpg";
import Item_color_4 from "../../../assets/img/imagesItem/item_color4.jpg";

import Size_guide from "../../../assets/img/vectorItem/size_guide.svg";
import Shipping from "../../../assets/img/vectorItem/Shipping_Delivery.svg";
import Returns from "../../../assets/img/vectorItem/Returns.svg";
import Ask from "../../../assets/img/vectorItem/Ask_question.svg";

import Pay1 from "../../../assets/img/vectorFooter/cards/card1.svg";
import Pay2 from "../../../assets/img/vectorFooter/cards/card2.svg";
import Pay3 from "../../../assets/img/vectorFooter/cards/card3.svg";
import Pay4 from "../../../assets/img/vectorFooter/cards/card4.svg";
import Pay5 from "../../../assets/img/vectorFooter/cards/card5.svg";
import Pay6 from "../../../assets/img/vectorFooter/cards/card6.svg";
import Pay7 from "../../../assets/img/vectorFooter/cards/card7.svg";

import Left from "../../../assets/img/vectorItem/left.png";
import Right from "../../../assets/img/vectorItem/right.png";
import Heart from "../../../assets/img/vectorItem/heart.svg";
import Scale from "../../../assets/img/vectorItem/scales.svg";
import Review from "../../../assets/img/vectorItem/review.svg";

function Men() {
    return (
        <div data-test-id="product-page-men">
            <ItemHeader />
            <div className="item">
                <div className="container">
                    <div className="item__wrapper">
                        <div className="item__score-all">
                            <div className="item__score">
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <p>2 Reviews</p>
                            </div>
                            <div className="item__score__info">
                                <p>
                                    <span>SKU:</span>777
                                </p>
                                <p>
                                    <span>Availability:</span>In Stock
                                </p>
                            </div>
                        </div>
                        <div className="item__all">
                            <div className="item__slider">
                                <div className="item__slider-small-photo">
                                    <div className="item__slider-arrow">
                                        <img src={Slider_up} alt="up_icon" />
                                        <img src={Slider_down} alt="down_icon" />
                                    </div>
                                    <img src={Photo_1} alt="item__photo" />
                                    <img src={Photo_2} alt="item__photo" />
                                    <img src={Photo_3} alt="item__photo" />
                                    <img src={Photo_4} alt="item__photo" />
                                </div>
                                <div className="item__slider-big-photo">
                                    <img src={Photo_main} alt="main__photo" />
                                </div>
                            </div>
                            <div className="item__info">
                                <div className="item__info-color">
                                    <p>
                                        <span>COLOR:</span>Blue
                                    </p>
                                </div>
                                <div className="item__info-color-foto">
                                    <img src={Item_color_1} alt="item_color" />
                                    <img src={Item_color_2} alt="item_color" />
                                    <img src={Item_color_3} alt="item_color" />
                                    <img src={Item_color_4} alt="item_color" />
                                </div>
                                <div className="item__info-size">
                                    <p>
                                        <span>Size:</span>S
                                    </p>
                                </div>
                                <div className="item__info-size-icon">
                                    <p className="size_icon">XS</p>
                                    <p className="size_icon_active">S</p>
                                    <p className="size_icon">M</p>
                                    <p className="size_icon">L</p>
                                </div>
                                <div className="item__info-size-guide">
                                    <img src={Size_guide} alt="" />
                                    Size guide
                                </div>
                                <div className="item__info-line"></div>
                                <div className="item__info-cost">
                                    <div className="item__info-price">$ 379.99</div>
                                    <div className="item__info-add-to-card">Add to card</div>
                                    <img src={Heart} alt="icon" />
                                    <img src={Scale} alt="icon" />
                                </div>
                                <div className="item__info-line"></div>
                                <div className="item__info-conditions">
                                    <p>
                                        <img src={Shipping} alt="icon" />
                                        Shipping & Delivery
                                    </p>
                                    <p>
                                        <img src={Returns} alt="icon" />
                                        Returns & Exchanges
                                    </p>
                                    <p>
                                        <img src={Ask} alt="icon" />
                                        Ask a question
                                    </p>
                                </div>
                                <div className="item__info-checkout">
                                    <div className="item__info-checkout-safe">
                                        <p>guaranteed safe checkout</p>
                                        <p className="item__info-checkout-safe-line"></p>
                                    </div>

                                    <div className="item__info-pay">
                                        <img src={Pay1} alt="pay" />
                                        <img src={Pay2} alt="pay" />
                                        <img src={Pay3} alt="pay" />
                                        <img src={Pay4} alt="pay" />
                                        <img src={Pay5} alt="pay" />
                                        <img src={Pay6} alt="pay" />
                                        <img src={Pay7} alt="pay" />
                                    </div>
                                    <div className="item__info-line"></div>
                                    <div className="item__info-description">DESCRIPTION</div>
                                    <div className="item__info-line"></div>
                                    <div className="item__info-additional">
                                        <p>ADDITIONAL INFORMATION</p>
                                        <p>
                                            Color: <span>Blue, White, Black, Grey</span>
                                        </p>
                                        <p>
                                            Size: <span>XS, S, M, L</span>
                                        </p>
                                        <p>
                                            Material: <span>100% Polyester</span>
                                        </p>
                                    </div>
                                    <div className="item__info-line"></div>
                                    <div className="item__info-reviews">
                                        <p>REVIEWS</p>
                                        <div className="item__info-score-reviews">
                                            <div className="item__score-star">
                                                <img src={Star} alt="star" />
                                                <img src={Star} alt="star" />
                                                <img src={Star} alt="star" />
                                                <img src={Star} alt="star" />
                                                <img src={Star} alt="star" />
                                                <p>2 Reviews</p>
                                            </div>
                                            <p>
                                                <img src={Review} alt="icon" /> Write a review
                                            </p>
                                        </div>
                                        <div className="item__review">
                                            <div className="item__review-title">
                                                <div className="item__review-title-name">Oleh Chabanov</div>
                                                <div className="item__review-title-data">
                                                    <img src={Star} alt="star" />
                                                    <img src={Star} alt="star" />
                                                    <img src={Star} alt="star" />
                                                    <img src={Star} alt="star" />
                                                    <img src={Star} alt="star" />
                                                </div>
                                            </div>
                                            <div className="item__review-contain">
                                                On the other hand, we denounce with righteous
                                                indignation and like men who are so beguiled and
                                                demoralized by the charms of pleasure of the moment
                                            </div>
                                        </div>
                                        <div className="item__review">
                                            <div className="item__review-title">
                                                <div className="item__review-title-name">ShAmAn design</div>
                                                <div className="item__review-title-data">
                                                    <img src={Star} alt="star" />
                                                    <img src={Star} alt="star" />
                                                    <img src={Star} alt="star" />
                                                    <img src={Star} alt="star" />
                                                    <img src={Star} alt="star" />
                                                </div>
                                            </div>
                                            <div className="item__review-contain">
                                                At vero eos et accusamus et iusto odio dignissimos
                                                ducimus qui blanditiis praesentium voluptatum deleniti
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item__info-line"></div>
                                </div>
                            </div>
                        </div>

                        <div className="related-products">
                            <div className="related-products__title">
                                <div>RELATED PRODUCTS</div>
                                <p>
                                    <img src={Left} alt="icon" />
                                    <img src={Right} alt="icon" />
                                </p>
                            </div>
                            <div className="related-products__items">
                                <ItemCardRelated />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Men;