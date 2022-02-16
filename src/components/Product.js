import { Link } from 'react-router-dom'

const Product = ({ productType, item }) => {
    console.log(item)
    return (
        <Link
            to={`/${productType}/${item.id}`}
            className='card-item'
            data-test-id={`clothes-card-${productType}`}
        >
            <img src={item.src} alt="src" />
            <h5>{item.title}</h5>
            <div><span>{item.price}</span></div>
        </Link>
    )
}

export default Product