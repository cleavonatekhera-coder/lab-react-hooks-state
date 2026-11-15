function ProductCard({ product, onAddToCart }) {
  return (
    <li className="product-card">
      <span className="product-name">{product.name}</span>
      <span className="product-category">{product.category}</span>
      <button
        type="button"
        data-testid={`product-${product.id}`}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </li>
  );
}

export default ProductCard;