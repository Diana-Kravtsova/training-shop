
import './Offer.scss'
import man from '../../../assets/img/imagesMain/man.png'
import woman from '../../../assets/img/imagesMain/woman.png'
import Form from "../Form";

const Offer = () => {
    return (
        <div className='offer'>
            <div className="container">
                <div className='background'>
                    <h5>Special offer</h5>
                    <h2>Subscribe
                        <br />
                        and <span className='accent'> get 10% off</span>
                    </h2>
                    <input
                        className="bigbanner__email"
                        type="email"
                        name="email-address"
                        placeholder="Enter your email"
                    />
                    <button className="bigbanner__button">Subscribe</button>

                    <Form text='subscribe' classname='column' btnStyle='btnDark' />
                    <div className='offer__man'><img src={man} alt="man" /></div>
                    <div className='offer__woman'><img src={woman} alt="woman" /></div>
                </div>
            </div>
        </div>
    )
}

export default Offer