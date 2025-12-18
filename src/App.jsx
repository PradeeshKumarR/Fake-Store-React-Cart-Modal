/** 
 * Main application component.
 * Handles product fetching, cart state, and modal visibility.
 * Passes necessary props to Navbar, ProductCard, and CartModal components.
*/
import { useState } from "react";
import ProductCard from "./components/ProductCard";
import useFetchProducts from "./hooks/useFetchProducts";
import Navbar from "./components/Navbar";
import CartModal from "./components/CartModal";
import "./styles/App.css";

function App() {
  // Fetch products using custom hook
  const { products, loading, error } = useFetchProducts();
  // State for cart items
  const [cart, setCart] = useState([]);
  // State for cart modal visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  /**
   * Adds a product to the cart if not already present.
   * Shows alert if product is already in the cart.
   */
  const addToCart = (product) => {
    if (!cart.some(item => item.id === product.id)) {
      setCart([...cart, product]);
    } else {
      alert('This item is already in your cart.');
    }
  };

  /**
   * Removes a product from the cart by its ID.
   */
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  /**
   * Toggles the visibility of the cart modal.
  */
  const toggleCartModal = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className="App">
      <div className="container">
        <header>
          {/* Navbar displays cart count and opens cart modal */}
          <Navbar cartCount={cart.length} toggleCartModal={toggleCartModal} />
        </header>
        <main>
          {/* Show loading or error messages */}
          {loading && <p>Loading products...</p>}
          {error && <p>Error fetching products: {error.message}</p>}
          {/* Display list of products */}
          <section className="product-list" aria-label="Product List">
            {products.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} cartItems={cart} />
            ))}
          </section>
        </main>
        {/* Cart Modal for viewing and removing cart items */}
        {isCartOpen && <CartModal cart={cart} removeFromCart={removeFromCart} toggleCartModal={toggleCartModal} />}
      </div>
    </div>
  );
}

export default App;
