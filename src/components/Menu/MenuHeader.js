import React from 'react';
import PropTypes from 'prop-types'
/*router links*/
import { NavLink } from "react-router-dom";

function MenuHeader({ items, show, hide}) {
    return (
        items.map((name_navigation, index) => (
            <li key={index}>
                <NavLink
                    to={`/${name_navigation}`}
                    data-test-id={`menu-link-${name_navigation}`}
                    className='menu-item'
                    onFocus={show}
                    onBlur={hide}
                >
                    {name_navigation}
                </NavLink>
            </li>
        ))
    );
}
MenuHeader.propTypes = {
    items: PropTypes.array,
    show: PropTypes.func,
    hide: PropTypes.func,
}


export default MenuHeader;