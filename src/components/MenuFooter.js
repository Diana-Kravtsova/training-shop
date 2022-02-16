import React from "react";
import { Link } from "react-router-dom";

function MenuFooter({ items }) {
    return (
        <div>
            <ul>
                {items.map((name_navigation, index) => (
                    <li key={index}>
                        <Link to={`/${name_navigation}`} className='menu-item' data-test-id={`footer-nav-link-${name_navigation}`}>
                            {name_navigation}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MenuFooter;