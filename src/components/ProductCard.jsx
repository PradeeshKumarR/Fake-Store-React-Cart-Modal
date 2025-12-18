/**
 * ProductCard component.
 * Displays product image, title, price, and add-to-cart button.
 * Disables button and shows alert if item is already in cart.
 * Receives product, addToCart, and cartItems as props.
 */

import '../styles/ProductCard.css';

const ProductCard = ({ product, addToCart, cartItems }) => {
    // Check if product is already in cart
    const isInCart = cartItems.some(item => item.id === product.id);

    /**
     * Handles add to cart button click.
     * Shows alert if item is already in cart.
     */
    const handleAddToCart = () => {
        if (isInCart) {
            alert('This item is already in your cart.');
        } else {
            addToCart(product);
        }
    };

    return (
        <div className="product-card">
            {/* Product image */}
            <img
                src={product.image}
                alt={product.title}
                className="product-image"
            />
            {/* Product title */}
            <h3 className="product-title">{product.title}</h3>
            <div className="product-card-footer">
                {/* Product price */}
                <p className="product-price">${product.price.toFixed(2)}</p>
                {/* Add to cart button */}
                <button
                    className={`add-to-cart-button ${isInCart ? 'added' : 'add'}`}
                    onClick={handleAddToCart}
                    disabled={isInCart}
                >
                    {isInCart ? 'Added to Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;