/**
 * Custom React Hook: useFetchProducts
 * ----------------------------------
 * Fetches product data from the Fake Store API.
 * Manages loading, error, and product state.
 * Returns an object containing:
 *  - products: Array of product objects fetched from the API
 *  - loading: Boolean indicating if the fetch is in progress
 *  - error: Error message if the fetch fails
 */

import { useEffect, useState } from "react";

const useFetchProducts = () => {
    // State to store fetched products
    const [products, setProducts] = useState([]);
    // State to indicate loading status
    const [loading, setLoading] = useState(true);
    // State to store error message, if any
    const [error, setError] = useState(null);

    useEffect(() => {
        /**
         * Fetches products from the Fake Store API.
         * Handles network errors and updates state accordingly.
         */
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) {
                    // Throw error if network response is not ok
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setProducts(data); // Update products state
            } catch (error) {
                setError(error.message); // Update error state
            } finally {
                setLoading(false); // Set loading to false after fetch completes
            }
        };

        fetchProducts(); // Initiate fetch on component mount
    }, []);

    // Return products, loading, and error state
    return { products, loading, error };
};
export default useFetchProducts;
