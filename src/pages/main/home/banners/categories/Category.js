import './Category.scss'
const Category = (props) => {
    return (

        <div className="main__category">
            <div><img src={props.src} alt="pic" /></div>
            <div className='banners'>
                <h4 className="main__cat_title">{props.title}</h4>
            </div>
        </div>

    )
}

export default Category