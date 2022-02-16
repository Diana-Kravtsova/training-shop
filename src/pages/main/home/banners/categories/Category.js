import './Category.scss'
import {Link} from "react-router-dom";
const Category = (props) => {
    return (

        <div className="main__category">
            <Link to={`/${props.title}`}>
                <img src={props.src} alt="pic" />
                <div className='campaignTeaser'>
                    <h4 className="main__cat_title">{props.title}</h4>
                </div>
            </Link>
        </div>

    )
}

export default Category