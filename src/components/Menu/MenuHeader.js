import React from 'react';
import {Link} from "react-router-dom";

function MenuHeader({items, show, hide}) {
    return (
        items.map((name_navigation, index) => (
            <li key={index}>
                <Link
                    to={`/${name_navigation}`}
                    className='menu-item'
                    onFocus={show}
                    onBlur={hide}
                >
                    {name_navigation}
                </Link>
            </li>
        ))
    );
}

export default MenuHeader;