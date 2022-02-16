import React from 'react';
/*router links*/
import { Link } from "react-router-dom";

function MenuHeader({ items }) {
    return (
        <div className="main__navigation" data-test-id='menu' >
            <ul>
                {items.map((name_navigation, index) => (
                    <li key={index}>
                        <Link to={`/${name_navigation}`} data-test-id={`menu-link-${name_navigation}`}>
                            {name_navigation}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MenuHeader;