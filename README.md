# Fake Store React App

This is a React application that fetches data from the Fake Store API and implements an "Add to Cart" feature using a modal interface. The application is designed to be responsive and user-friendly.

## Features

- Fetches product data from the Fake Store API.
- Displays products in a grid layout with individual product cards.
- Allows users to add products to their cart.
- Displays a modal interface for viewing and managing cart items.
- Responsive design for optimal viewing on various devices.

## Installation

1. Clone the repository:

```
git clone https://github.com/PradeeshKumarR/Fake-Store-React-Cart-Modal.git
```

2. Navigate to the project directory:

```
cd Fake-Store-React-Cart-Modal
```

3. Install the dependencies:

```
npm install
```

4. Start the development server:

```
npm run dev
```

5. After running npm run dev, open your browser and navigate to the localhost URL shown in the terminal to view the application.

## Directory Structure

The project is organized into the following directory structure:

```
Fake-Store-React-Cart-Modal/
  src/
    components/
      CartModal.jsx
      Navbar.jsx
      ProductCard.jsx
    hooks/
      useFetchProducts.js
    styles/
      App.css
      CartModal.css
      Navbar.css
      ProductCard.css
    App.jsx
    main.jsx
    index.css
  .gitignore
  README.md
  eslint.config.js
  index.html
  package-lock.json
  package.json
  vite.config.js
```

- src/components/ — React components for UI
- src/hooks/ — Custom React hooks
- src/styles/ — CSS files for styling
- App.jsx — Main application logic

## Usage

- Browse through the available products.
- Click on the "Add to Cart" button to add items to your cart.
- Click on the "Cart" button in the navbar to view your cart items in a modal.
- Remove items from the cart if needed.

## Technologies Used

- React
- React Hooks
- CSS for styling
- Fake Store API for product data
- Vite (for fast development and build)

## Live Demo

View the deployed landing page here:  
[https://fakestorereactcartmodalpradeeshkumarr.netlify.app/](https://fakestorereactcartmodalpradeeshkumarr.netlify.app/)

## License

This project is for educational and demonstration purposes only.
