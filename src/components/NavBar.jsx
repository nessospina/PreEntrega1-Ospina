import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
    <>
    <nav className="navbar navbar-light bg-success text-light">
    <span className="navbar-brand mb-0 h1 text-light">SugarBox</span>
    <div>
    <CartWidget/>
    </div>
    </nav>

    <ul>
            <li><a href="">Producto1</a></li>
            <li><a href="">Producto2</a></li>
            <li><a href="">Producto3</a></li>
        </ul>

    </>
    )
}

export default NavBar; 


