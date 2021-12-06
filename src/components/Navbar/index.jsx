import {
    NavLink
} from "react-router-dom";

//import { FaStore, FaShoppingCart} from 'react-icons/fa';

import "./styles.css"
export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/">Memes Home</NavLink>
                </li>

            </ul>
        </nav>
    )
}