import React from 'react';
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



export default MenuHeader;