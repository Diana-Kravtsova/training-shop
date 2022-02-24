import {Link} from "react-router-dom";
import Share from "../../assets/img/vectorItem/Share.svg";
import './Item.scss'
import Star from "../../assets/img/vectorItem/star.svg";

const ItemHeader = () => {

    return (
        <div className="nav__categoriya">
                    <div className="nav_categoriya__chit">
                        <ul className="nav__categoriya-link">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/women'>Women</Link>
                            </li>
                            <li>
                                <Link to='/'>Women's tracksuit Q109</Link>
                            </li>
                        </ul>
                        <div className="nav__categoriya-share">
                            <img src={Share} alt="share"/>
                            <p>Share</p>
                        </div>
                    </div>
                    <div className="nav__categoriya-title">Women's tracksuit Q109</div>
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


        </div>

    )
}

export default ItemHeader