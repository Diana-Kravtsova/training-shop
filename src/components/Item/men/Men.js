import React, {useEffect, useState} from "react";
import '../Item.scss'
import ItemCardRelated from "../../ItemCard/ItemCardRelated";
import ItemHeader from "../ItemHeader";
import { getProduct } from "../../../services/product";
import { useLocation } from "react-router-dom"
/*images import*/
/*
import Item_color_1 from "../../../assets/img/imagesItem/item_color1.jpg";
import Item_color_2 from "../../../assets/img/imagesItem/item_color2.jpg";
import Item_color_3 from "../../../assets/img/imagesItem/item_color3.jpg";
import Item_color_4 from "../../../assets/img/imagesItem/item_color4.jpg";
*/
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

import Heart from "../../../assets/img/vectorItem/heart.svg";
import Scale from "../../../assets/img/vectorItem/scales.svg";
import Review from "../../../assets/img/vectorItem/review.svg";
import ItemPics from "../ItemPics";
import CardRating from "../../CardRating/CardRating";

const payImg = [{img: Pay1},{img: Pay2},{img: Pay3},{img: Pay4},{img: Pay5},{img: Pay6},{img: Pay7}]

function Men() {
    const id = useLocation().pathname.split(`/`).pop()
    const [item, setItem] = useState(null)

    useEffect(() => {
        getProduct(id).then((element) => {
            let blah = {
                    sizes: element.size.split(' '),
                    images: {
                        color: element.color,
                        url: element.image
                    },
                    rating: element.star,
                    category: element.sex,
                    ...element
                }
            setItem(
                blah
            );
        });
    }, [])
    return (
       !item ? <div>Loading...</div> :
           <div>
               <ItemHeader card ={item}/>
               <div className="item">
                   <div className="container">
                       <div className="item__wrapper">
                           <div className="item__all">
                               <ItemPics card ={item}/>

                               <div className="item__info">
                                   <div className="item__info-color">
                                       <p>
                                           <span>COLOR:</span>{item.color}
                                       </p>
                                   </div>
                                   <div className="item__info-color-foto">
                                       <img style={{height: '80px', width: '80px'}} src={item.images.url} alt="item_color"/>
                                   </div>
                                   <div className="item__info-size">
                                       <p>
                                           <span>Size:</span>{item.size}
                                       </p>
                                   </div>
                                   <div className="item__info-size-guide">
                                       <img src={Size_guide} alt=""/>
                                       Size guide
                                   </div>
                                   <div className="item__info-line"/>
                                   <div className="item__info-cost">
                                       <div className="item__info-price">{item.price}</div>
                                       <div className="item__info-add-to-card">Add to card</div>
                                       <img className="icon_heart" src={Heart} alt="icon"/>
                                       <img src={Scale} alt="icon"/>
                                   </div>
                                   <div className="item__info-line"/>
                                   <div className="item__info-conditions">
                                       <p>
                                           <img src={Shipping} alt="icon"/>
                                           Shipping & Delivery
                                       </p>
                                       <p>
                                           <img src={Returns} alt="icon"/>
                                           Returns & Exchanges
                                       </p>
                                       <p>
                                           <img src={Ask} alt="icon"/>
                                           Ask a question
                                       </p>
                                   </div>
                                   <div className="item__info-checkout">
                                       <div className="item__info-checkout-safe">
                                           <p>guaranteed safe checkout</p>
                                           <p className="item__info-checkout-safe-line"/>
                                       </div>

                                       <div className="item__info-pay">
                                           {payImg.map((a)=>{
                                               <img src={a.img} alt="pay"/>
                                           })}
                                       </div>
                                       <div className="item__info-line"/>
                                       <div className="item__info-description">DESCRIPTION
                                           <p className="item__info-additional">
                                               {item.description}
                                           </p>
                                       </div>
                                       <div className="item__info-line"/>
                                       <div className="item__info-additional">
                                           <p>ADDITIONAL INFORMATION</p>
                                           <p>
                                               Color: <span>{item.color}</span>
                                           </p>
                                           <p>
                                               Size: <span>{item.size}</span>
                                           </p>
                                           <p>
                                               Material: <span>{item.material}</span>
                                           </p>
                                       </div>
                                       <div className="item__info-line"/>
                                       <div className="item__info-reviews">
                                           <p>REVIEWS</p>
                                           <div className="item__info-score-reviews">
                                               <div className="item__score-star">
                                                   <CardRating rating={item.rating}/>
                                                   <p>2 Reviews</p>
                                               </div>
                                               <p>
                                                   <img src={Review} alt="icon"/> Write a review
                                               </p>
                                           </div>
                                           <div className="item__review">
                                               <div className="item__review-title">
                                                   <div className="item__review-title-name">Oleh Chabanov</div>
                                                   <div className="item__review-title-data">
                                                       <CardRating rating={item.rating}/>
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
                                                       <CardRating rating={item.rating}/>
                                                   </div>
                                               </div>
                                               <div className="item__review-contain">
                                                   At vero eos et accusamus et iusto odio dignissimos
                                                   ducimus qui blanditiis praesentium voluptatum deleniti
                                               </div>
                                           </div>
                                       </div>
                                       <div className="item__info-line"/>
                                   </div>
                               </div>
                           </div>

                           <section className="similar">
                               <div className="similar__container">
                                   <ItemCardRelated card ={item} />
                               </div>
                           </section>
                       </div>
                   </div>
               </div>
           </div>
    );
}

export default Men;