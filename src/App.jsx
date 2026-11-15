import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList, { sampleProducts } from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(sampleProducts.map((product) => product.category))];

  function handleToggleDarkMode() {
    setDarkMode((previous) => !previous);
  }

  function handleAddToCart(product) {
    setCartItems((previous) =>
      previous.some((item) => item.id === product.id) ? previous : [...previous, product]
    );
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <header className="app-header">
        <h1>Grocery Store</h1>
        <DarkModeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />
      </header>

      <div className="filter">
        <label htmlFor="category-filter">Filter by category</label>
        <select id="category-filter" value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <ProductList selectedCategory={selectedCategory} onAddToCart={handleAddToCart} />

      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;