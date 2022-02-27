import './Burger.scss'

const Burger = ({ toggleMenu, isOpen }) => {
    let toggle
    isOpen ? toggle = '_active' : toggle = null
    return (
        <>
            <button data-test-id='burger-menu-btn'
                    type="button"
                    className={`menu__icon ${toggle} icon-menu`}
                    onClick={toggleMenu}>
                <span/>
                <span/>
                <span/>
            </button>
        </>
    )
}

export default Burger