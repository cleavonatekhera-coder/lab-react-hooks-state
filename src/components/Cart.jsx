function Cart({ cartItems }) {
  return (
    <section className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{`${item.name} is in your cart.`}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Cart;