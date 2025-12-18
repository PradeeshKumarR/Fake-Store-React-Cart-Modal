/**
 * Navbar component.
 * Displays the application title and cart button with item count.
 * Receives cartCount and toggleCartModal as props.
 */

import "../styles/Navbar.css";

const Navbar = ({ cartCount, toggleCartModal }) => {
    return (
        <nav className="navbar">
            {/* Application title */}
            <h1 className="navbar-title">Fake Store</h1>
            {/* Cart button with item count */}
            <div className="navbar-cart">
                <button className="cart-button" onClick={toggleCartModal}>
                    Cart ({cartCount})
                </button>
            </div>
        </nav>
    );
}

export default Navbar;