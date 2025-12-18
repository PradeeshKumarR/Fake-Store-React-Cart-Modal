/**
 * CartModal component.
 * Displays a modal with all products added to the cart.
 * Allows removing items from the cart.
 * Receives cart, removeFromCart, and toggleCartModal as props.
 */

import "../styles/CartModal.css"
const CartModal = ({ cart, removeFromCart, toggleCartModal }) => {
    //Total number of items in cart
    const totalItems = cart.length;

    return (
        <div className="cart-modal">
            <div className="cart-modal-content">
                {/* Close button */}
                <button className="close-button" onClick={toggleCartModal}>
                    &times;
                </button>
                <div className="cart-modal-header">
                    <h2>Your Cart</h2>
                </div>
                {/* Display total items */}
                <div className="total">Total Items: {totalItems}</div>
                {/* Show message if cart is empty */}
                {totalItems === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="cart-items">
                        {/* List all cart items */}
                        {cart.map(item => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <div>
                                    <h3>{item.title}</h3>
                                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                                    {/* Remove from cart item */}
                                    <button
                                        className="remove-button"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove from Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartModal;
