import React from 'react';
/*router links*/
import { NavLink } from "react-router-dom";

function MenuHeader({ items }) {
    return (
        items.map((name_navigation, index) => (
            <li key={index}>
                <NavLink to={`/${name_navigation}`} data-test-id={`menu-link-${name_navigation}`}>
                    {name_navigation}
                </NavLink>
            </li>
        ))
    );
}

export default MenuHeader;