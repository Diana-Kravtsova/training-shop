import React from 'react';
/*router links*/
import { Link } from "react-router-dom";

function MenuHeader({ items }) {
    return (
        <ul className="main__navigation" data-test-id="menu">
            {items.map((name_navigation, index) => (
                <li key={index}>
                    <Link to={`/${name_navigation}`} data-test-id={`menu-link-${name_navigation}`}>
                        {name_navigation}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default MenuHeader;